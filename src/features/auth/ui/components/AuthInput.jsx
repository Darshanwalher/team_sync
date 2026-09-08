import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { cn } from '../../../../lib/utils'

export const AuthInput = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  required = false,
  autoComplete,
  disabled = false,
  className,
  rightElement,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className={cn("space-y-1.5 w-full", className)}>
      <div className="flex items-center justify-between">
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-medium text-zinc-300 select-none"
          >
            {label}
            {required && <span className="text-rose-500 ml-0.5">*</span>}
          </label>
        )}
        {rightElement && (
          <div className="text-xs text-zinc-400">
            {rightElement}
          </div>
        )}
      </div>

      <div className="relative group">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-zinc-200">
            <Icon className="w-4 h-4" />
          </div>
        )}

        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          disabled={disabled}
          className={cn(
            "w-full h-10 px-3.5 text-sm rounded-lg outline-none",
            "bg-[#141417] text-zinc-100 placeholder:text-zinc-500",
            "border border-zinc-800 hover:border-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            Icon && "pl-10",
            isPassword && "pr-10",
            error && "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20"
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-xs text-rose-400 pt-0.5">
          {error}
        </p>
      )}
    </div>
  )
}

export default AuthInput


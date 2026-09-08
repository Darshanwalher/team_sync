import React from 'react'
import { VengeanceSpinner } from './VengeanceLoader'
import { cn } from '../../../../lib/utils'

export const AuthButton = ({
  children,
  type = 'button',
  variant = 'default',
  size = 'default',
  isLoading = false,
  disabled = false,
  onClick,
  icon: Icon,
  className,
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-lg text-sm outline-none disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer"

  const variants = {
    default: "bg-white text-zinc-950 hover:bg-zinc-200 active:bg-zinc-300 font-semibold shadow-xs",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-600",
    outline: "border border-zinc-800 bg-transparent hover:bg-zinc-900 active:bg-zinc-800 text-zinc-200",
    ghost: "bg-transparent hover:bg-zinc-900 text-zinc-300 hover:text-white",
  }

  const sizes = {
    sm: "h-9 px-3 text-xs gap-1.5",
    default: "h-10 px-4 text-sm gap-2",
    lg: "h-11 px-5 text-base gap-2.5",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {isLoading ? (
        <VengeanceSpinner size="sm" />
      ) : (
        <>
          {Icon && <Icon className="w-4 h-4 shrink-0" />}
          {children}
        </>
      )}
    </button>
  )
}

export default AuthButton


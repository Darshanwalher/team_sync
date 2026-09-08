import React from 'react'
import { cn } from '../../../../lib/utils'

export const AuthDivider = ({ text = "OR", className }) => {
  return (
    <div className={cn("relative my-5 flex items-center justify-center", className)}>
      <div className="w-full border-t border-zinc-800" />
      <span className="absolute bg-[#121215] px-3 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
        {text}
      </span>
    </div>
  )
}

export default AuthDivider


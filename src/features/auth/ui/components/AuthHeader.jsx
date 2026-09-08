import React from 'react'
import { Command } from 'lucide-react'

export const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="space-y-2 mb-6 text-center sm:text-left">
      {/* Brand Icon & Name */}
      <div className="inline-flex items-center justify-center sm:justify-start gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-bold shadow-xs">
          <Command className="w-4 h-4 stroke-[2.5]" />
        </div>
        <span className="font-semibold text-base tracking-tight text-zinc-100">
          TeamSync
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-zinc-400 leading-normal">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default AuthHeader

import React from 'react'

export const AuthShowcase = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between h-full p-12 bg-[#0c0c0e] border-l border-zinc-800 text-zinc-100 select-none">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>TeamSync Network</span>
        </div>
        <span className="text-xs font-mono text-zinc-500">v2.4</span>
      </div>

      <div className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold text-white tracking-tight">
          Modern collaborative workspace for high-velocity teams.
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Manage tasks, track progress, and coordinate across departments with instant synchronization.
        </p>
      </div>

      <div className="pt-6 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
        <span>End-to-end encrypted workspace.</span>
        <span className="font-mono text-[11px]">SOC2 Certified</span>
      </div>
    </div>
  )
}

export default AuthShowcase


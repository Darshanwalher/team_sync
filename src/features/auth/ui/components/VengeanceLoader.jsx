import React from 'react'
import { Command } from 'lucide-react'
import { cn } from '../../../../lib/utils'

/**
 * Vengeance UI - Compact Cybernetic Ring Spinner
 */
export const VengeanceSpinner = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  return (
    <div className={cn('relative flex items-center justify-center', sizeClasses[size] || sizeClasses.md, className)}>
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-zinc-800" />

      {/* Rotating Accent Glow Arc */}
      <div className="absolute inset-0 rounded-full border border-transparent border-t-zinc-100 border-r-zinc-400/40 animate-vengeance-spin" />

      {/* Inner Reverse Ring */}
      <div className="absolute inset-1 rounded-full border border-transparent border-b-zinc-400/60 border-l-zinc-600/30 animate-vengeance-reverse" />

      {/* Center Core Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    </div>
  )
}

/**
 * Vengeance UI - Fullscreen / Card Overlay Ambient Cyber Loader
 */
export const VengeanceFullScreenLoader = ({
  title = "AUTHENTICATING",
  subtitle = "Synchronizing security keys & workspace...",
  fullScreen = true,
  className
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-[#09090b] text-[#fafafa] select-none",
        fullScreen ? "fixed inset-0 z-50 min-h-screen w-screen px-4" : "relative w-full h-full min-h-[320px] p-8",
        className
      )}
    >
      {/* Ambient Radial Backdrop Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-zinc-700/10 blur-[90px] pointer-events-none" />

      {/* Central Cyber Orbital System */}
      <div className="relative flex items-center justify-center w-28 h-28 mb-8">
        {/* Outer Hex/Circle Grid Ring */}
        <div className="absolute inset-0 rounded-full border border-zinc-800/80 border-dashed animate-vengeance-reverse" />

        {/* Outer Glowing Arc */}
        <div className="absolute -inset-1 rounded-full border border-transparent border-t-zinc-100 border-r-zinc-400/50 animate-vengeance-spin filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

        {/* Middle Counter-Rotating Pulse Ring */}
        <div className="absolute inset-2.5 rounded-full border border-zinc-800" />
        <div className="absolute inset-2.5 rounded-full border border-transparent border-b-white/90 border-l-zinc-500/40 animate-vengeance-spin-fast" />

        {/* Center Glowing TeamSync Core */}
        <div className="relative w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-vengeance-pulse">
          <Command className="w-5 h-5 stroke-[2.4]" />
        </div>

        {/* 4 Corner Tech Marks */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-400 rounded-full" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-400 rounded-full" />
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-1 bg-zinc-400 rounded-full" />
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-1 bg-zinc-400 rounded-full" />
      </div>

      {/* Status Typography */}
      <div className="text-center space-y-2 relative z-10 max-w-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-[#121215] text-[11px] font-mono tracking-widest text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{title}</span>
        </div>

        {subtitle && (
          <p className="text-xs text-zinc-500 font-normal leading-relaxed tracking-wide">
            {subtitle}
          </p>
        )}
      </div>

      {/* Futuristic Segmented Progress Bar */}
      <div className="w-48 h-1 bg-zinc-900 rounded-full mt-6 overflow-hidden border border-zinc-800 relative">
        <div className="h-full bg-linear-to-r from-zinc-600 via-white to-zinc-600 w-1/2 rounded-full animate-vengeance-spin-fast relative" />
      </div>
    </div>
  )
}

export default VengeanceFullScreenLoader

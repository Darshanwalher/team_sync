import React from 'react'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#09090b] text-[#fafafa] selection:bg-zinc-800 selection:text-zinc-100 px-4 py-12">
      {/* Centered Clean Minimal Auth Card */}
      <main className="w-full max-w-md bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <Outlet />
      </main>

      {/* Clean Minimal Footer */}
      <footer className="w-full max-w-md mt-6 text-center text-[11px] text-zinc-600 flex items-center justify-center gap-3">
        <span>&copy; {new Date().getFullYear()} TeamSync Inc.</span>
        <span>&bull;</span>
        <a href="#privacy" className="hover:text-zinc-400 transition-colors">Privacy</a>
        <span>&bull;</span>
        <a href="#terms" className="hover:text-zinc-400 transition-colors">Terms</a>
      </footer>
    </div>
  )
}

export default AuthLayout

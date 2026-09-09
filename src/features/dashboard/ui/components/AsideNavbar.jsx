import React from 'react'
import { NavLink, useLocation } from 'react-router'
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  MessageSquare,
  Settings,
  Plus,
  Command
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', path: '/home', icon: LayoutDashboard },
  { name: 'Tasks', path: '/tasks', icon: CheckSquare },
  { name: 'Team', path: '/team', icon: Users },
  { name: 'Chat', path: '/chat', icon: MessageSquare },
  { name: 'Settings', path: '/settings', icon: Settings },
]

const AsideNavbar = () => {
  const location = useLocation()

  return (
    <aside className="h-full w-full flex flex-col justify-between p-5 bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-300 select-none">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-8 px-1">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-bold shadow-sm shrink-0 border border-zinc-800 dark:border-zinc-200">
            <Command className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-bold text-[var(--text-primary)] tracking-tight leading-none truncate">
              TeamSync
            </h2>
            <p className="text-[11px] font-medium text-[var(--text-muted)] mt-1 truncate">
              Enterprise Workspace
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive =
              location.pathname === item.path ||
              (item.path === '/home' && (location.pathname === '/' || location.pathname === ''))

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm transition-all ${isActive
                    ? 'bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold border border-[var(--border-color)] shadow-xs'
                    : 'text-[var(--text-muted)] font-medium hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] border border-transparent'
                  }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'
                    }`}
                />
                <span className="truncate">{item.name}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] opacity-80" />
                )}
              </NavLink>
            )
          })}
        </nav>
      </div>

      {/* Bottom Action: + New Task */}
      <div className="pt-6 border-t border-[var(--border-color)] transition-colors duration-300">
        <button
          onClick={() => { }}
          className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white font-semibold text-sm shadow-md border border-zinc-800 dark:border-zinc-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>New Task</span>
        </button>
      </div>
    </aside>
  )
}

export default AsideNavbar

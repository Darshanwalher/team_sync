import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  LogOut,
  User,
  Settings,
  ChevronDown
} from 'lucide-react'
import { toggleTheme } from '../../../../shared/state/themeSlice'
import { removeEmployee } from '../../../auth/state/auth/authSlice'

const TopNavbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mode } = useSelector((state) => state.theme)
  const { employee } = useSelector((state) => state.auth)

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const userMenuRef = useRef(null)
  const notifMenuRef = useRef(null)

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(event.target)) {
        setIsNotificationsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    dispatch(removeEmployee())
    navigate('/login')
  }

  const displayName = employee?.name || 'Devendra'
  const displayEmail = employee?.email || 'devendra@teamsync.io'

  return (
    <header className="h-16 px-6 w-full flex items-center justify-between bg-[var(--bg-surface)] text-[var(--text-primary)] border-b border-[var(--border-color)] transition-colors duration-300 select-none">
      {/* Left: Menu Icon & Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-sm">
        {/* Menu Icon Button */}
        <button
          className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all cursor-pointer shadow-2xs shrink-0"
          title="Toggle Menu"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search workspace..."
            className="w-full pl-9 pr-4 py-2 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:border-[var(--text-primary)] transition-all"
          />
        </div>
      </div>

      {/* Right Controls: Theme Icon, Bell Icon, and Profile Menu */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Theme Toggle Icon */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all cursor-pointer shadow-2xs"
          title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {mode === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-zinc-700" />
          )}
        </button>

        {/* Bell Icon (Notifications) */}
        <div className="relative" ref={notifMenuRef}>
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all cursor-pointer shadow-2xs"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[var(--bg-surface)]" />
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)] mb-2">
                <span className="text-xs font-bold text-[var(--text-primary)]">Notifications</span>
                <span className="text-[10px] font-semibold text-emerald-500">2 New</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] text-xs">
                  <p className="font-medium text-[var(--text-primary)]">Task Assigned</p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Alex assigned you to Landing Page Review</p>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] text-xs">
                  <p className="font-medium text-[var(--text-primary)]">Deployment Success</p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Production v1.4 successfully published</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile / Menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-xl hover:bg-[var(--bg-hover)] border border-transparent hover:border-[var(--border-color)] transition-all cursor-pointer"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt={displayName}
                className="w-8 h-8 rounded-xl object-cover ring-1 ring-[var(--border-color)]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[var(--bg-surface)]" />
            </div>
            <span className="text-xs font-semibold text-[var(--text-primary)] hidden md:block max-w-[100px] truncate">
              {displayName}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </button>

          {/* Menu Dropdown */}
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-2.5 border-b border-[var(--border-color)] mb-1">
                <p className="text-xs font-bold text-[var(--text-primary)] truncate">
                  {displayName}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] truncate mt-0.5">
                  {displayEmail}
                </p>
              </div>

              <div className="space-y-0.5">
                <button
                  onClick={() => setIsUserMenuOpen(false)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setIsUserMenuOpen(false)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
                >
                  <Settings className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span>Settings</span>
                </button>
              </div>

              <div className="pt-1 mt-1 border-t border-[var(--border-color)]">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-rose-500 hover:bg-rose-500/10 transition-colors font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopNavbar

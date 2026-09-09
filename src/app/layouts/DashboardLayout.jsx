import React from 'react'
import { Outlet } from 'react-router'
import AsideNavbar from '../../features/dashboard/ui/components/AsideNavbar'
import TopNavbar from '../../features/dashboard/ui/components/TopNavbar'

const DashboardLayout = () => {
  return (
    <div className="h-screen w-full flex bg-[var(--bg-main)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
      {/* Sidebar Section */}
      <div className="w-64 h-full shrink-0 border-r border-[var(--border-color)]">
        <AsideNavbar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

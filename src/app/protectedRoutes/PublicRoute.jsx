import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { VengeanceFullScreenLoader } from '../../features/auth/ui/components/VengeanceLoader'

const PublicRoute = () => {
  const { employee, isLoading } = useSelector((state) => state.auth)

  if (isLoading) {
    return (
      <VengeanceFullScreenLoader
        title="SYNCHRONIZING"
        subtitle="Initializing session and security layers..."
      />
    )
  }

  if (employee) {
    return <Navigate to="/home" replace />
  }

  return <Outlet />
}

export default PublicRoute


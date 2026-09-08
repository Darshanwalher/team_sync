import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { VengeanceFullScreenLoader } from '../../features/auth/ui/components/VengeanceLoader'

const ProtectedRoute = () => {
  const { employee, isLoading } = useSelector((state) => state.auth)

  if (isLoading) {
    return (
      <VengeanceFullScreenLoader
        title="SECURITY CHECK"
        subtitle="Verifying workspace access & credentials..."
      />
    )
  }

  if (!employee) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute


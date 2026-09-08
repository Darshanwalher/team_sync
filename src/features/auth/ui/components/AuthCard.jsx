import React from 'react'
import { cn } from '../../../../lib/utils'

export const AuthCard = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full space-y-4",
        className
      )}
    >
      {children}
    </div>
  )
}

export default AuthCard

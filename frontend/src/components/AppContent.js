import { CContainer } from '@coreui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

// routes config

const AppContent = () => {
  return (
    <CContainer lg>
      <Outlet />
    </CContainer>
  )
}

export default React.memo(AppContent)

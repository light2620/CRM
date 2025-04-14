import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../Components/Loading/spinner'
import { Spin } from 'antd'

const MainLayout = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
         <Outlet />
      </div>
    </Suspense>
  )
}

export default MainLayout

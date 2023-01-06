import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import './layout.css'

const Layout = () => {
    return (
        <>
          <section className={`layout bg-[#FAFDFF]`}>
            <Sidebar />
            <div className={`layout__content ${'open' ? "sm:pl-60" : "sm:pl-20"} `}>
              {/* <TopNav /> */}
              <div className={`layout__content-main p-5`}>
                <Outlet />
              </div>
            </div>
            {/* <BottomNav /> */}
          </section>
        </>
      )
}

export default Layout

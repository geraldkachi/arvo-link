import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Disbursement from './pages/Disbursement'
import RequiredRoute from './components/RequiredRoute'
import Layout from './components/layout/Layout'
import History from './pages/History'

function App() {

  return (
    <Suspense>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/disbursement" element={<Disbursement />} />
            <Route path="/history" element={<History />} />
          </Route>
      </Routes>
    </Suspense>
  )
}

export default App

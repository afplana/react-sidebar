import React, { FC } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

const App: FC = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default App
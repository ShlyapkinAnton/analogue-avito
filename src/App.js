import React, { useState } from 'react'
import { AppRoutes } from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import './App.css'

export const App = () => {
  const [user, setUser] = useState(localStorage.getItem('auth') || null)

  return (
    <Provider store={store}>
      <AppRoutes user={user} setUser={setUser} />
    </Provider>
  )
}

export default App

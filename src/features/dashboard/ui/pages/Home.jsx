import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { mode } = useSelector((state) => state.theme)

  const handleThemeChange = () => {
    dispatch(toggleTheme())
  }
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard Home Page</h1>
      <p className="text-lg mb-6">
        Current Theme: <span className="font-semibold uppercase tracking-wider">{mode}</span>
      </p>
      <button 
        onClick={handleThemeChange}
        className="px-5 py-2.5 rounded-lg font-medium border transition-all cursor-pointer shadow-md hover:opacity-90 active:scale-95"
        style={{
          backgroundColor: 'var(--primary)',
          color: '#ffffff',
          borderColor: 'var(--border-color)'
        }}
      >
        Switch to {mode === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  )
}

export default Home

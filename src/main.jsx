import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { inject } from '@vercel/analytics';
import './index.css'

inject()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='absolute w-full h-full bg-transparent top-0 left-0 right-0 flex items-start justify-center z-[-1]'>
      <div className="w-full h-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[radial-gradient(circle_1200px_at_50%_50%,rgba(220,20,60,0.1),rgba(19,21,22,1))] flex flex-col items-center justify-top z-20"></div>
    </div>
    <App />
  </React.StrictMode>,
)

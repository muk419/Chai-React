import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Card from './component/CardTODO'
import CardTODO from './component/CardTODO'
import CardProgress from './component/CardProgress'
import CardDone from './component/CardDone'
import Button from './component/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="min-h-screen bg-slate-200 p-8 font-sans">
        <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">

          <Header />
          <div class="flex p-6 space-x-6 bg-slate-50 min-h-[800px]">
     
            <div class="flex-1 space-y-4">
              <div class="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-lg">
                <h2 class="font-bold">To Do</h2>
                <svg class="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
              </div>

              <CardTODO />
            </div>

            <div class="flex-1 space-y-4">
              <div class="flex justify-between items-center bg-orange-500 text-white p-3 rounded-t-lg">
                <h2 class="font-bold">In Progress</h2>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
              </div>
              <CardProgress />
            </div>
            
            <CardDone />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

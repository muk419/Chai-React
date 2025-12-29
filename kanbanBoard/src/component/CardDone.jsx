import React from 'react'
import Button from './Button'

export default function CardDone() {
  return (
    <>     
    <div class="flex-1 space-y-4">
        <div class="flex justify-between items-center bg-green-500 text-white p-3 rounded-t-lg">
          <h2 class="font-bold">Done</h2>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
        </div>
       
        <Button/>
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-slate-700 font-bold text-sm">Setup CI/CD Pipeline</h3>
            <button class="text-gray-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></button>
          </div>
          <div class="flex justify-between items-center">
             <span class="flex items-center px-2 py-1 bg-green-500 text-white text-[10px] font-bold rounded">
               <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
               DevOps
             </span>
             <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Completed</span>
          </div>
        </div>
      </div>
      </>

  )
}

import React from 'react'
import Button from './Button'

export default function CardProgress() {
  return (
    <>
    <Button/>
      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
    <div class="flex justify-between items-start mb-3">
      <h3 class="text-slate-700 font-bold text-sm">Develop API</h3>
      <button class="text-gray-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></button>
    </div>
    <div class="flex justify-between items-end">
      <span class="px-2 py-1 bg-indigo-100 text-indigo-600 text-[10px] font-bold rounded uppercase">Backend</span>
      <div class="flex -space-x-2">
        <img class="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=A&bg=4F46E5&color=fff" />
        <img class="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=B&bg=10B981&color=fff" />
        <img class="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=C&bg=F59E0B&color=fff" />
      </div>
    </div>
  </div>
    </>
  
  )
}

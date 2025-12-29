import React, { useState } from 'react'
import Button from './Button'

export default function CardTODO() {


  return (
    <>
    <Button/>
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-slate-700 font-bold text-sm">Design Landing Page</h3>
            <button class="text-gray-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></button>
          </div>
          <span class="px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded">High Priority</span>
          <div class="mt-8 text-right text-xs text-gray-400">Due Today</div>
        </div>
        </>
  )
}

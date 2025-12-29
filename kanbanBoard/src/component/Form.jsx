import React from 'react'

export default function Form() {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
    <h2 class="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Create New Task</h2>
    
    <form class="space-y-5">
      <div>
        <label class="block text-sm font-semibold text-slate-700 mb-1">Task Title</label>
        <input type="text" placeholder="e.g., Design Landing Page" 
               class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"/>
      </div>
  
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1">Priority</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
            <option>Low Priority</option>
            <option>Medium Priority</option>
            <option>High Priority</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1">Domain</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
            <option>UI/UX</option>
            <option>Backend</option>
            <option>Functionality</option>
            <option>DevOps</option>
          </select>
        </div>
      </div>
  
      <div>
        <label class="block text-sm font-semibold text-slate-700 mb-1">Due Date</label>
        <input type="date" 
               class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"/>
      </div>
  
      <div>
        <label class="block text-sm font-semibold text-slate-700 mb-1">Assignee</label>
        <div class="relative">
          <input type="text" placeholder="Search team member..." 
                 class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pl-10"/>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
  
      <div class="flex justify-end space-x-3 pt-4 border-t mt-6">
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition">
          Cancel
        </button>
        <button type="submit" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-md shadow-sm transition">
          Save Task
        </button>
      </div>
    </form>
  </div>
  )
}

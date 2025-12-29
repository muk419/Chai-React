import { createSlice } from "@reduxjs/toolkit";
const persistedState = JSON.parse(localStorage.getItem('kanban-board'));
const kanbanSlice=createSlice({
  name:"kanban",
  initialState:persistedState||{
    tasks: [
      {
        id: 'task-1',
        title: 'Design Landing Page',
        priority: 'High Priority',
        domain: 'UI/UX',
        dueDate: 'Today',
        assignee: 'Jane Doe',
        columnId: 'todo'
      },
      {
        id: 'task-2',
        title: 'Develop API',
        priority: 'Medium Priority',
        domain: 'Backend',
        dueDate: 'May 25',
        assignee: 'John Smith',
        columnId: 'inprogress'
      }
    ],
    columns: {
      todo: { id: 'todo', title: 'To Do', color: 'bg-blue-500' },
      inprogress: { id: 'inprogress', title: 'In Progress', color: 'bg-orange-500' },
      done: { id: 'done', title: 'Done', color: 'bg-green-500' }
    },
    loading: false,
    error: null
  },
  reducers:{
    addtoTask:(state,action)=>{
    }
  }
})


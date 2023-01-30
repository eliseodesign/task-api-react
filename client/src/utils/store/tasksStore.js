import create from "zustand"

const useTasks = create(set=>({
  tasks:[],
  setTasks:(newT)=> set({tasks:newT})
}))

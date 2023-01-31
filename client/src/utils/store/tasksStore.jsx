import create from "zustand"
import React,{ useRef } from 'react';


// const modalMenu = useRef(null)

const useTasks = create(set=>({
  tasks:[],
  setTasks:(newT)=> set({tasks:newT}),
  modalMenu:"modalMenu"

}))

export default useTasks
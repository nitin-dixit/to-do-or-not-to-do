import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todolist");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
};
const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action)=>{
        state.todoList.push(action.payload); 
    },
  },
});

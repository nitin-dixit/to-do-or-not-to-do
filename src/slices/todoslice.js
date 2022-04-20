import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  } else {
    //if no todo in localstorage
    window.localStorage.setItem('todoList', []);
    return [];
  }
};
const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      }
      //if someone delete localstorage by clearing cache on running webapp then
      else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },

    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr; //update state
      }
    },
  },

  updateTodo: (state, action) => {
    const todoList = window.localStorage.getItem("todoList");
    if (todoList) {
      const todoListArr = JSON.parse(todoList);
      todoListArr.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.taskName = action.payload.taskName;
          todo.taskDescription = action.payload.taskDescription;
          todo.taskDeadline = action.payload.taskDeadline;
        }
      });
      window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      state.todoList = [...todoListArr];
    }
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

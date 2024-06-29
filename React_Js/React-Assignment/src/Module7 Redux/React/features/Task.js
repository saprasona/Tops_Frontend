// features/Task.js
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load from local storage", e);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.error("Could not save to local storage", e);
  }
};

const taskSlice = createSlice({
  name: "task",
  initialState: { task: loadFromLocalStorage() },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
      saveToLocalStorage(state.task);
    },
    deleteTask: (state, action) => {
      state.task.splice(action.payload, 1);
      saveToLocalStorage(state.task);
    },
    updateTask: (state, action) => {
      const { index, newData } = action.payload;
      state.task[index] = newData;
      saveToLocalStorage(state.task);
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

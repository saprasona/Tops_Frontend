import { createSlice } from "@reduxjs/toolkit";

let taskSlice = createSlice({
  name: "task",
  initialState: { task: [] },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
      console.log("-=-=-=-=>", action);
    },
    deleteTask: (state, action) => {
      let filterData = state.task.filter((e, i) => i !== action.payload);
      state.task = filterData;
    },
    updateTask: (state, action) => {
      console.log("===action===", action.payload);
      let index = action.payload.index;
      let newData = action.payload.newData;
      state.task.splice(index, 1, newData);
    },
  },
});

export default taskSlice.reducer;
export const { addTask, deleteTask, updateTask } = taskSlice.actions;


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
      // console.log("-------action------", action);
      // console.log("Delete Task");
      let filterData = state.task.filter((e, i) => i !== action.payload);
      // console.log("---------filterData-----------", filterData);
      state.task = filterData;
    },
    updateTask: (state, action) => {
      console.log("===action===", action.payload);
      //  state.task.splice(index,1,new-Data);  syntex//
      // state.task.splice(action.payload.index,1, action.payload.newData);
      let index = action.payload.index;
      let newData = action.payload.newData;
      state.task.splice(index, 1, newData);
    },
  },
});

export default taskSlice.reducer;
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

// state.task = state.task.filter(task => task.id !== action.payload.id);

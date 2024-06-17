import { accordionActionsClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { count: 10 }, //always in object
  reducers: {
    incrementCount: (state, action) => {
      // console.log("=====state=====>", state);
      // console.log("=====action======>", action);

      console.log("------state.count---->", state.count);
      state.count++;

      console.log("increment Action called");
    },
    decrementCount: (state, action) => {
      state.count--;
    },
    multiplyCount: (state, action) => {
      // state.count = state.count * 2; // Multiply the count by the payload value
      state.count *= 2; // Multiply the count by the payload value
      console.log("multiply Action called");
    },
    incrementByUser : (state,action) => {
      state.count += +action.payload;
      console.log("-----------  action----------->", action);
    }
  },
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount, multiplyCount, incrementByUser } =
  counterSlice.actions;

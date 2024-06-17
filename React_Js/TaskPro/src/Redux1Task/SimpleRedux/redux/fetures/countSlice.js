import { accordionActionsClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice ({
name:"count",
initialState:{count:1},
reducers:{
   incrementCount :  (state, action) =>{
    state.count++;
   }
}
})

export default countSlice.reducer;
export const { incrementCount} = countSlice.actions;
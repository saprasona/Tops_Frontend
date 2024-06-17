import { accordionActionsClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name : 'amount',
    initialState : {amount:1},
    reducers : {
        incrementAmount : (state,action) =>{
            state.amount++;
        },
        decrementAmount : (state,action) => {
            state.amount--;
        },
        multiplyAmount : (state,action) => {
            state.amount*= 2;
        }
    },
    extraReducers: (builder) => {
        builder.addCase("count/incrementByUser", (state, action) => {
          console.log("-----------Extra reducer----------->");
          state.amount++;
        });
        builder.addCase("count/decrementCount", (state, action) => {
          state.amount += 10;
        });
      },
})


export default amountSlice.reducer;
export const {incrementAmount,decrementAmount,multiplyAmount} = amountSlice.actions;
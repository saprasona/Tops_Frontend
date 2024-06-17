//config store

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import amountSlice from "./features/amountSlice";

 export let store = configureStore({
    reducer:{
        counterSlice : counterSlice,
        amountSlice : amountSlice,
    },
});

// //store like this
// const store2 = {
//     counterSlice : {count:100},
// }
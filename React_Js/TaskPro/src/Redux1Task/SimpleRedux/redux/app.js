import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./fetures/countSlice";

export let store = configureStore ({
    reducer:{
        countSlice : countSlice,
    },
});


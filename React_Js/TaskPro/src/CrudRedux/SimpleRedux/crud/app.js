// config

import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/Task";

export let store = configureStore({
    reducer:{
        taskSlice : taskSlice,
    },
});
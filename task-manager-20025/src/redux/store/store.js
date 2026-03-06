import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settingsSlice.js";
import taskReducer from "../state-slice/taskSlice.js";
import summaryReducer from "../state-slice/summarySlice.js";

export default configureStore({
    reducer: {
        settings: settingsReducer,
        task: taskReducer,
        summary: summaryReducer
    }
})

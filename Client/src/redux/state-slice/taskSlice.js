import {createSlice} from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        New:[],
        Completed:[],
        Progress:[],
        Canceled:[]
    },
    reducers: {
        setNew:(state, action) => {
            state.New=action.payload;
        },
        setCompleted:(state, action) => {
            state.Completed=action.payload;
        },
        setProgress:(state, action) => {
            state.Progress=action.payload;
        },
        setCanceled:(state, action) => {
            state.Canceled=action.payload;
        }
    }
})

export const {setNew,setCompleted,setProgress, setCanceled} = taskSlice.actions;
export default taskSlice.reducer;
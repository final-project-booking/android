import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={
    user:[],
    loading:false,
    error:""
}


export const signUpAsync=createAsyncThunk(
    "signUp/user",
    async(obj,{rejectWithValue})=>{
        try {
            const response=axios.post("http://localhost:3000/api/auth/register",obj)
            return (await response).data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const signUpSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signUpAsync.pending,(state)=>{
            state.loading=true
        })
        .addCase(signUpAsync.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload
        })
        .addCase(signUpAsync.rejected,(state,action)=>{
            state.loading=false
            state.error="invalid information"
        })
    }
})
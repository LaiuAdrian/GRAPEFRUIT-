import { createSlice/*, createAsyncThunk*/ } from '@reduxjs/toolkit';




const reduxCart =createSlice({
    name:'redux_cart',
    initialState:{
        data:0,
        pending:false,
        error:false,
    },
    reducers:{
        addCart:(state,action)=>{
            state.data = state.data + 1
        },
        removeCart:(state,action)=>{
            state.data=state.data-1
        },
    }
})

export const{addCart,removeCart} = reduxCart.actions;

export default reduxCart.reducer
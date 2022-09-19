import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getWheaterApi = createAsyncThunk(
    'getWheaterApi/setGetWheaterApi',
    async(city)=>{
        let fetchOptions ={
            method:'GET',
            redirect:'follow'
            
        }
   
        ///const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bf3c4a175b62bb36adfe0f9de8867ad1&units=metric`,fetchOptions).then(
        const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`,fetchOptions).then(
            (data)=>data.json()           
        )
        return response;
    }
)

export const getWheaterApi2 = createAsyncThunk(
    'getWheaterApi2/setGetWheaterApi2',
    async(city)=>{
        let fetchOptions ={
            method:'GET',
            redirect:'follow'
            
        }
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bf3c4a175b62bb36adfe0f9de8867ad1&units=metric`,fetchOptions).then(
            (data)=>data.json()           
        )
        return response;
    }
)

const createWeatherSlice = createSlice({
    name:'wheater_slice',
    initialState:{
        pending:false,
        error:false,
        wheater:{},
        wheater2:{}
    },
    reducers:{},
    extraReducers:{
        [getWheaterApi.pending]:(state)=>{
            state.pending=true;
            state.error=false;
        },
        [getWheaterApi.fulfilled]:(state,action)=>{
            state.pending=false;
            state.wheater=action.payload;
            state.error=false;
        },
        [getWheaterApi.rejected]:(state)=>{
            state.pending=false;
            state.error=true;
        },
        

        [getWheaterApi2.pending]:(state)=>{
            state.pending=true;
            state.error=false;
        },
        [getWheaterApi2.fulfilled]:(state,action)=>{
            state.pending=false;
            state.wheater2=action.payload;
            state.error=false;
        },
        [getWheaterApi2.rejected]:(state)=>{
            state.pending=false;
            state.error=true;
        }
    }
})
 
export default createWeatherSlice.reducer;
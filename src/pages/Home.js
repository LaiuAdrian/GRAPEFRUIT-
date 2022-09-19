
import React, { useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { addCart,removeCart } from '../redux/reduxCart';



const Home =()=>{
 const dispatch = useDispatch();
 let data =useSelector(state=>state.redux_cart.data)

 const addCartToRedux =()=>{
    dispatch(addCart())
 }
 const removeCartToRedux=()=>{
    dispatch(removeCart())
 }
 return(
    <div>
        <h1>
            Ana are mere
        </h1>
        <p>
            {data}
        </p>
        <button onClick={()=> addCartToRedux()}>
            Creste mai
        </button>

        <button onClick={()=>{
            removeCartToRedux()
        }}>
 Scade
        </button>
    </div>
 )
}
export default Home;
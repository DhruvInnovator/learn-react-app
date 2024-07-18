import { useEffect,useState } from "react";


function useCurrencyInfo(){
   useEffect(()=>{
         fetch('https://api.exchangerate-api.com/v4/latest/USD')
         .then(res=>res.json())
         .then(data=>console.log(data))
   },[])
    return()
}
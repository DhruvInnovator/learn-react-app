import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const[data, setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
        .then((response)=>response.json())
        .then((data)=>setData(data))
    },[currency])
    console.log(data)
    return data.usd;
}

export default useCurrencyInfo;
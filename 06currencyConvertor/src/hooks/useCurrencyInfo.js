import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)

        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        console.log(data);
        
    }, [currency])

    console.log(data);
    return data;
    
}

export default useCurrencyInfo;
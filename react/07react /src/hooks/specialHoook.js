import { useState, useEffect } from 'react'

export default function useSpcialHook() {
    const [dog, setDog] = useState(null);
    const [loding, setLoding] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = 'https://api.freeapi.app/api/v1/public/dogs/124';
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        fetch(url,options)
        .then((res)=>{
            if(!res.ok){
                 throw new Error("Failed to featch.")
            }
            return res.json()
        })
        .then((data)=>{
            setDog(data.data)
            setLoding(false)
        })
        .catch((err)=>{
            setError(err);



            
        })
    }, [])


    return {dog,loding,error}
}
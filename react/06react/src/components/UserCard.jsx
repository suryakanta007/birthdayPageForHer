import React from 'react'
import { useState,useEffect } from "react"

function UserCard() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=7';
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        fetch(url,options)
        .then((res)=>{
           return res.json()
        })
        .then((res)=>{
            setUsers(res.data.data);
            console.log(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])
  return (
        <div>
            {
                users.map((user)=>(
                    <div key={user.id}>
                    <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
                    <img src={user.picture.large} alt="" />
                </div>
                ))
            }
        </div>
  )
}

export default UserCard
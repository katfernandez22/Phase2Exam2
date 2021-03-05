import React,{useState,useEffect} from 'react'
import axios from "axios";
import "./Dogs.css"

function Dogs() {

    const [dog,setDog] = useState([])

    useEffect(() => {
        axios.get("https://api.thedogapi.com/v1/breeds",{
            headers:{
                "x-api-key":"6129f5a4-a087-4170-aae1-0fb29cb4ca21"
            }
        }).then((res) => {
            setDog(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <div>
            {dog.map((data,i)=>{
               return (
                   <li key={i}>
                       <img src={data?.image?.url}/>
                   </li>
               )
            })}
        </div>

    )
}

export default Dogs

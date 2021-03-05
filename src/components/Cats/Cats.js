import React,{useEffect,useState} from 'react'
import "./Cats.css"
import axios from "axios";

function Cats() {

    const [cat,setCats] = useState([])

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/breeds",{
            headers:{
                "x-api-key":"6129f5a4-a087-4170-aae1-0fb29cb4ca21"
            }
        }).then((res) => {
            setCats(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <div>
            {cat.map((data,i)=>{
                return (
                    <li key={i}>
                        <img src={data?.image?.url}/>
                    </li>
                )
            })}
        </div>
    )
}

export default Cats

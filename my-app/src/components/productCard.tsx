import axios from "axios"
import { useEffect } from "react"

export function Cards (){
    useEffect(()=>{axios.get("http://localhost:3000/server/data.json").then(res=>console.log(res.data))},[])

    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>console.log(res))
    return(
        <div className="w-64 h-72 color bg-red-900 rounded-lg"></div>
    )
}
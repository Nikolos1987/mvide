import axios from "axios"
import { log } from "console"
import { useEffect,useState } from "react"

export function Cards (){
    const [data,setData]=useState<any>("")
    useEffect(()=>{axios.get("http://localhost:3000/server/data.json").then(res=>{setData([...data,res.data])}
    
    )},[])
console.log(data,"this")


    return(
        <div className="w-64 h-72 color bg-red-900 rounded-lg"></div>
    )
}
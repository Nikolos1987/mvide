import { useRef, useEffect,useState } from "react";
import {Cards} from "./productCard";
import { Link,useParams } from "react-router-dom";
import axios from "axios"
export function  Main() {
    const [data,setData]=useState<unknown|[{}]>("")
    useEffect(()=>{axios.get("http://localhost:3000/server/data.json").then(res=>{setData(res.data)}
    )},[])
console.log(useParams(),"this")
    return (
        <div className="pt-32 w-100 m-auto ">  
            <Link to='/cards' className="text-white"><p className="text-red-600">Goods</p></Link>                     
        </div>
    )
}   
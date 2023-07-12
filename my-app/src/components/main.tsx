import { useRef, useEffect, useState } from "react";
import { Cards } from "./productCard";
import { Link, useParams,Route,Routes } from "react-router-dom";
import { DetailsCards } from "./detailsCard/detailsCards";
import axios from "axios";
import { Shops } from "./shops";
export function Main() {
    const [data, setData] = useState<[{ id: string, title: string }]>([{ id: "222", title: "dd" }])
    useEffect(() => {
        axios.get< [{ id: string, title: string }]>("http://localhost:3000/server/data.json")
        .then(res => {
            setData(prev => res.data)
         }
        )
    }, [])
    
    return (
    
        <div className="pt-32 w-100 m-auto flex flex-wrap ">
           <Routes>
        <Route path="/"element={data.map(e=><Link to={`/${e.id}`} className="text-black">{<Cards/>}</Link>) }/>
        <Route path='/shops' element={<Shops/>}/>
        <Route path='/:id' element={<DetailsCards/>}/>
      </Routes>
        </div>
    )
}   
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
export function DetailsCards (){
     let paramsData:any=useParams()
          useEffect(() => {
        axios.get< [{ id: string, title: string }]>("http://localhost:3000/server/data.json")
        .then(res => {
            setData(prev => res.data)
            }
        )
    },[])
    const [data, setData] = useState<[{ id: string, title: string }]>([{ id: "222", title: "dd" }])
     

console.log(data,'props');    
    console.log(typeof(paramsData.id),'saaa');
    
    return(
  <div>
    {data.length>1&&<div>{data[paramsData.id].title}</div>}
  </div>
 
    
    )
}
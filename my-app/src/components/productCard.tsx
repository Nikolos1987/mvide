import axios from "axios"
import { log } from "console"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
export function Cards() {
    const [a, setA] = useState(1);
    console.log(a);
    const f = () => {
        setA(prev => prev + 1)
    }
    return (
        <div className="w-64 h-72 color bg-red-900 rounded-lg mb-5 mr-3"> 
            <button className="text-red-600" onClick={f}>push</button>
        </div>

    )
}
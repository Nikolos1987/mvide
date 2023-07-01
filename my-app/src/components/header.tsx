import { Link } from "react-router-dom"
import { Logo } from "./image"
import { Burger } from "./image/burger";
import { ReactComponent as MyLogo } from './image/cart-svgrepo-com.svg';
import { useState } from "react";
import { Menu } from "./menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";

export function Header() {
    const dispetch = useDispatch()
    const s: any = useSelector((state) => state)


    const [visual, setVisual] = useState(false)
    const menu = () => {
        dispetch(toggleVisibleProfile())
    }
    return (
        <div >
            <div className="fixed w-full">
                <div className="h-10 bg-slate-900 w-full">
                    <div className="flex w-100 m-auto pt-2">
                        <div>
                            <Link to='/shops' className="text-white">Магазины</Link>
                            <Link to='/delivery' className="text-white ml-5">Доставка</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 bg-white">
                    <div className="flex w-100 m-auto pt-2">
                        <Logo />
                        <button onClick={menu} style={{ transition: "0.5s linear" }} className="flex ml-10  h-12 w-36 rounded-md text-white bg-red-600 hover:bg-red-800 p-2"> <Burger /> <span>Каталог</span></button>
                        <div className=" ml-8 border rounded-md p-1 border-stone-400">
                            <input className="outline-0 ml-6" type="text" />
                            <button style={{ transition: "0.5s linear" }} className=" bg-red-600  hover:bg-red-800 text-white h-10 w-16 rounded-md">Найти</button>
                        </div>
                        <MyLogo />

                    </div>
                    <hr className="mt-4" />
                </div>
            </div>
            {s.profiles.isvisible && <Menu />}


        </div>
    )
}
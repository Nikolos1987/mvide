import { useSelector, useDispatch } from "react-redux"
import { countPlus } from "../store/profile";
export function Menu() {

    const data: any = useSelector((st: { profiles: {}, data: { data: string, num: number } }): { profiles: {}, data: { data: string, num: number } } => st)
    const dispatch = useDispatch()

    const cnt = () => {
        dispatch(countPlus())
    }
    return (
        <div style={{ height: '1000px' }} className="bg-slate-500 flex ">

                   <div className="bg-slate-300 w-1/3 pt-36">
                <ul>
                    <li className="cursor-pointer hover:text-red-600">{data.profiles.data}
                    </li>
                </ul>
            </div>
        </div>
    )
}
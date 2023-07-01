import { useRef, useEffect } from "react";
export function Main() {
    const ref: any = useRef();

    useEffect(() => {
        let a: any = ref.current.dataset.name
        console.log(a, "tttr");
    }, []);
    return (
        <div className="pt-32">
            <input placeholder="name" className="w-32 h-10 border-2 border-black"
                data-name="thisis"
                ref={ref}
            ></input>
        </div>
    )
}   
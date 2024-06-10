import { twMerge } from "tailwind-merge"

function GlobalButton({ text ,modifyClass,type}) {
    return (
        <button type={type} className={twMerge("rounded  text-center  relative w-[220px]  globalButton  text-[20px] cursor-pointer inline-block p-2 bg-[#008080]  text-white" ,modifyClass)}>
            {text}
        </button>
    )
}

export default GlobalButton
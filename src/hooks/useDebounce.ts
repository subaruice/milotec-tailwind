import { useState, useEffect } from "react";


const useDebounce = (value: string, delay: number) => {
    const [debounce, setDeounce] = useState(value)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setDeounce(value)
        }, delay);

        return () => clearTimeout(timer)
    },[value, delay])

    return debounce;
}

export default useDebounce;
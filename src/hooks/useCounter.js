import { useState } from "react"

// Custom Hook
export const useCounter = ( InicialValue = 10 ) => {

    const [state, setstate] = useState(InicialValue)

    const increment = ( factor = 1) => {
        setstate( state * factor);
    }
    const decrement = ( factor = 1) => {
        setstate( state / factor);
    }
    const reset = () => {
        setstate( InicialValue );
    }

    return { state, increment, decrement, reset}

}

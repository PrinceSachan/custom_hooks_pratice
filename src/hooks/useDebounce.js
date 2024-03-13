import React, { useState, useEffect } from "react";

export default function useDebounce(value, timeout) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setDebouncedValue(value)
        }, timeout)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [value])

    return debouncedValue;
}
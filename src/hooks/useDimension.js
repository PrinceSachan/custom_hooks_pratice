import React, { useState, useEffect } from "react";

export default function useDimension() {
    const [dimension, setDimension] = useState({screenWidth: innerWidth, screenHeight: innerHeight});

    function updateDimension() {
        setDimension({screenWidth: window.innerWidth, screenHeight: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', updateDimension)

        return () => {
            window.removeEventListener('resize', updateDimension)
        }
    }, [dimension])

    return dimension;
}
import React, { useState, useEffect } from "react";

export default function useMousePointer() {
    const [x, setX] = useState()
    const [y, setY] = useState()

    useEffect(() => {
        const update = (e) => {
            setX(e.x)
            setY(e.y)
        }

        window.addEventListener("mousemove", update)

        return () => {
            window.removeEventListener("mousemove", update)
        }
    }, [setX, setY]);

    return {x, y}
}
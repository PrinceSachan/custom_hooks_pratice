import React, { useState, useEffect } from "react";

export default function useInterval(callback, delay) {
    useEffect(() => {
        const interval = setInterval(callback, delay * 1000);

        return() => {
            clearInterval(interval)
        }
    })
}
import React, {useState, useEffect, useCallback} from "react"

export default function useIsOnline() {
    const [isOnline, setIsOnline] = useState(() => {
        return navigator.onLine;
    })
    
    const setIsOnlineUser = useCallback(() => {
        setIsOnline(!isOnline)
    })

    const setIsOfflineUser = useCallback(() => {
        setIsOnline(!isOnline)
    })

    useEffect(() => {
        window.addEventListener('online', setIsOnlineUser)
        window.addEventListener('offline', setIsOfflineUser)

        return () => {
            removeEventListener('online', setIsOnlineUser)
            removeEventListener('offline', setIsOfflineUser)
        }
    }, [setIsOnlineUser, setIsOfflineUser])

    return isOnline;
}
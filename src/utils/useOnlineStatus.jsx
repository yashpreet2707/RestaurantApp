
import { useState, useEffect} from "react" ;

export const useOnlineStatus = () => {

    const [onlineStatus, setonlineStatus] = useState(true)

    useEffect( () => {
        window.addEventListener("offline", () => {
            setonlineStatus(false) ;
        }) ;

        window.addEventListener("online", () => {
            setonlineStatus(true) ;
        })
    }, []) ;


    // this will be a boolean value
    return onlineStatus ;
}


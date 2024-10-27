import { useEffect, useState } from "react"
import { MenuURL } from "./constants";


export const useRestaurantMenu = (resId) => {

    const [resMenu, setresMenu] = useState([])

    useEffect(()=> {
        fetchData() ;
    }, [])

    const fetchData = async () => {
        const data = await fetch(MenuURL+ resId)
        const json = await data.json()

        setresMenu(json)
    }

  return resMenu ;
}

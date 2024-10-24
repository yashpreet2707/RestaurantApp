import { useEffect, useState } from "react";
import { restaurantURL } from "../utils/constants";
import Shimmer from "./Shimmer";
import ResCard from "./ResCard";
import "./customStyles/Body.css"

const Body = () => {
  
  const [resInfo, setresInfo] = useState([])

  useEffect(()=>{
    fetchData() ;
  }, [])

  async function fetchData() {
    const data = await fetch(restaurantURL); 
    const json = await data.json() ;

    // restaurant data
    setresInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
  }

  return (resInfo.length === 0) 
  ? <Shimmer /> 
  : (
    <div className="p-2 h-max">

      {/* Restaurant container  */}
      <div className="w-10/12 mx-auto mt-2 pt-2 border-t-2">
        <h1 className="text-left text-2xl font-bold m-2">Top restaurant chains in Dehradun</h1>
        <div className="flex flex-wrap">
          {resInfo.map((element, index) => {
              return (
                <ResCard key={index} res={element} />
              )
            } )}
        </div>
      </div>
    </div>
  )
}

export default Body
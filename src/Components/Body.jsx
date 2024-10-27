import { useEffect, useState } from "react";
import { restaurantURL } from "../utils/constants";
import Shimmer from "./Shimmer";
import ResCard from "./ResCard";
import "../utils/Custom.css"
import { useOnlineStatus } from "../utils/useOnlineStatus"
import { Link } from "react-router-dom";

const Body = () => {
  
  const [resInfo, setresInfo] = useState([])
  const [filteredRes, setfilteredRes] = useState([])

  const [searchText, setsearchText] = useState([])

  useEffect(()=>{
    fetchData() ;
  }, [])

  async function fetchData() {
    const data = await fetch(restaurantURL); 
    const json = await data.json() ;

    // restaurant data
    setresInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    setfilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
  }

  const onlineStatus = useOnlineStatus() ;

  if ( onlineStatus === false) {
    return (
      <div className="flex justify-center items-center h-80">
        <h1 className="text-2xl">Looks like you're offline! Please check your internet connection :/</h1>
      </div>
    )
  }


  return (resInfo.length === 0) 
  ? <Shimmer /> 
  : (
    <div className="p-2 h-max">

      <div className="w-10/12 mx-auto mt-2 pt-2">

        <div className="p-2 rounded-lg text-left flex gap-x-2">
            <div>
              <input className="px-4 py-2 w-48 outline-none text-sm border border-gray-300 rounded-full hover:bg-gray-100 ml-2" onChange={(e)=> {
                setsearchText(e.target.value)
              }} value={searchText}></input>
              <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 text-sm ml-2" onClick={() => {
                const newList = filteredRes.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setfilteredRes(newList)
              }}>Search</button>
            </div>
            <div>
              <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 text-sm ml-2" onClick={() => {
                const topRatedRes = filteredRes.filter( (res) => (res.info.avgRating >= 4))
                setfilteredRes(topRatedRes)
              }}>Ratings 4.0+</button>

              <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 text-sm ml-2" onClick={()=>{
                const vegRes = filteredRes.filter( (res) => (res.info.veg === true))
                setfilteredRes(vegRes)
              }}>Pure Veg</button>

              <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 text-sm ml-2" onClick={()=> {
                setfilteredRes(resInfo)
                setsearchText([])
              }}>Reset</button>

            </div>
        </div>

        <div className="flex flex-wrap mt-2">
          {filteredRes.map((element) => {
              return (
                <ResCard key={element.info.id} res={element} />
              )
            } )}
        </div>
      </div>
    </div>
  )
  
}

export default Body
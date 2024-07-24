import RestaurantCard, {withVegLabel} from "./RestaurantCard"
import { useEffect, useState , useContext} from "react"
import {Link} from "react-router-dom"
import ShimmerHome from "./ShimmerHome"
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]) ;

    const [filteredRestaurant, setfilteredRestaurant] = useState([]) ;

    const [searchText, setsearchText] = useState([]) ;

    const RestaurantCardVeg = withVegLabel(RestaurantCard) ;

    useEffect(() =>{
        fetchData() ;
    } , []) ;

    const fetchData = async () => {
        const data = await fetch(API_URL) ;

        const json = await data.json() ;

        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        const val = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;

        // optional chaining
        setlistOfRestaurants(val) ;
        setfilteredRestaurant(val)
    }

    const onlineStatus = useOnlineStatus() ;
    if(onlineStatus == false) {
        return (
                <h1 className="text-center font-semibold text-xl py-4 mt-4">
                    Looks like you're offline! Please check your internet connection.
                </h1>   
        ) ;
    }

    // console.log(listOfRestaurants)

    const {loggedInUser, setuserName} = useContext(UserContext) ;


    // conditional rendering
    // terniary operator   
    return listOfRestaurants.length === 0 ? <ShimmerHome /> : (
        <div className="">
            <div className="flex justify-start p-9 ml-10">
                <div className="mx-9">
                    <input className="p-2 border border-black w-56 rounded-lg" type="text" data-testid="searchInput" placeholder="Enter Restaurant name" value={searchText} onChange={ (e) => {
                        setsearchText(e.target.value)
                    }}/>
                    <button className="mx-4 py-2 px-4 border border-black bg-green-300 rounded-lg" onClick={ () => {
                        const filteredRestaurant = listOfRestaurants.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                        setfilteredRestaurant(filteredRestaurant)
                    }} >Search</button>
                </div>
                <div className="mx-2">
                    <button className="py-2 px-4 border border-black bg-blue-300 rounded-lg" onClick={ () => {
                        const topList = filteredRestaurant.filter( (res) =>  (res.info.avgRating >= 4.2) );
                        setfilteredRestaurant(topList)
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="mr-9">
                    <button className="py-2 px-4 border border-black bg-green-400 rounded-lg" onClick={ () => {
                        const vegList = filteredRestaurant.filter( (res) =>  (res.info.veg == true) );
                        setfilteredRestaurant(vegList)
                    }}>Pure Veg Restaurants</button>
                </div>
                <div className="mx-5">
                    <button className="py-2 px-4 border border-black bg-cyan-300 rounded-lg" onClick={ () => {
                        setfilteredRestaurant(listOfRestaurants)
                    }}>Reset</button>
                </div>
                <br></br>
                <div className="mx-9">
                    <input className="p-2 border border-black rounded-lg" placeholder="Enter User Name" value={loggedInUser} onChange={(e) => {
                        setuserName(e.target.value)
                    }} />
                </div>
                
            </div>
            <div className="flex flex-wrap my-4 ml-24">
                {filteredRestaurant.map( (element) => {
                    return (
                    <Link to={"/restaurants/" + element.info.id} key={element.info.id} >
                        {element.info.veg
                        ? <RestaurantCardVeg resData={element} /> 
                        :<RestaurantCard resData={element} />}
                    </Link>
                    )
                })}
            </div>
        </div>
    )

}

export default Body ;
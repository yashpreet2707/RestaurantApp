import { useParams } from "react-router-dom"
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import "../utils/Custom.css"


const RestaurantMenu = () => {

    const {resId} = useParams() ;

    const menuAPI = useRestaurantMenu(resId) ;

    const resInfo = menuAPI?.data?.cards[2]?.card?.card?.info ;

    console.log(resInfo)

  return ( resInfo === null ) ? <Shimmer /> : (
    <div className="w-2/3 mx-auto p-4 rounded-lg ">

      <div className="text-xs text-gray-500 mb-2 text-left">
        Home / Dehradun / {resInfo?.name}
      </div>
      <h1 className="text-2xl font-semibold mb-4 text-left mt-8">{resInfo?.name}</h1>

      <div className="flex border-b">
          <button className="px-4 py-2 font-semibold border-b-2 border-orange-500 text-lg">Order Online</button>
          <button className="px-4 py-2 font-semibold text-gray-500 text-lg">Dineout</button>
        </div>

      {/* Details */}
      <div className="rounded-b-3xl p-3 pb-5 text-left box-yash">

        <div className="p-3 py-5 bg-white rounded-3xl border">

          <div className="flex items-center gap-x-1 text-sm font-semibold">
            <svg width="20" height="20">
                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                    <defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs>
            </svg>
            <h5>{resInfo?.avgRating} ({resInfo?.totalRatingsString}) • {resInfo?.costForTwoMessage}</h5>
          </div>
          <h5 className="text-sm py-2 underline text-orange-500 font-semibold">{resInfo?.cuisines.join(", ")}</h5>

          <div>
            <h5 className="text-sm"><span className="font-bold mr-2">Outlet</span>{resInfo?.areaName}</h5>
            <h5 className="text-sm lowercase font-bold">{resInfo?.sla?.slaString}</h5>
          </div>

        </div>

      </div>

      {/* Deals */}
      <div className="mt-4 p-3 bg-gray-400 rounded-lg">
        <h2 className="text-center">Deals for you</h2>
      </div>

    </div>
  );

}

export default RestaurantMenu
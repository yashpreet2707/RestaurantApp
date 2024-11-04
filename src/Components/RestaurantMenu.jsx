import { Link, useParams } from "react-router-dom";
import "../utils/Custom.css";
import { MenuURL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";


const RestaurantMenu = () => {

  const { resId } = useParams();
  const [resMenu, setresMenu] = useState({});

  const [showIndex, setshowIndex] = useState(0)

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(MenuURL + resId);
    const json = await data.json();

    setresMenu(json);
  };

  let resInfo, menuInfo, categories, dineout;

  if ( resMenu ) {
    resInfo = resMenu?.data?.cards[2]?.card?.card?.info
    menuInfo = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  }

  if (menuInfo) {
    categories = menuInfo.filter( (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    dineout = menuInfo.filter( (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress")[0].card.card
  }

  const [ToggleState, setToggleState] = useState(1);

  const toggleButton = (index) => {
    setToggleState(index);
  };

  return resInfo === undefined ? (
    <ShimmerMenu />
  ) : (
    <div className="w-2/3 mx-auto p-4 rounded-lg ">
      <div className="text-xs text-gray-500 mb-2 text-left">
        Home / Dehradun / {resInfo?.name}
      </div>
      <h1 className="text-2xl font-semibold mb-4 text-left mt-8">
        {resInfo?.name}
      </h1>

    {/* buttons : order online + dineout  */}
    <div className="flex border-b">
        <button className={`${
            ToggleState === 1
              ? `border-b-2 border-orange-500 text-orange-500`
              : ``
          } px-4 py-2 font-semibold text-lg`}
          onClick={() => toggleButton(1)}
        >
          Order Online
        </button>
        <button
          className={`${
            ToggleState === 2
              ? `border-b-2 border-orange-500 text-orange-500`
              : ``
          } px-4 py-2 font-semibold text-lg`}
          onClick={() => toggleButton(2)}
        >
          Dineout
        </button>
      </div> 

      {/* Details - Order Online */}
      <div
        className={`${
          ToggleState === 1 ? `block` : `hidden`
        } rounded-b-3xl p-3 pb-5 text-left box-yash`}
      >
        <div className="p-3 py-5 bg-white rounded-3xl border">
          <div className="flex items-center gap-x-1 text-sm font-semibold">
            <svg width="20" height="20">
              <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs>
            </svg>
            <h5>
              {resInfo?.avgRating} ({resInfo?.totalRatingsString}) •{" "}
              {resInfo?.costForTwoMessage}
            </h5>
          </div>
          <h5 className="text-sm py-2 underline text-orange-500 font-semibold">
            {/* {resInfo?.cuisines.join(", ")} */}
          </h5>

          <div>
            <h5 className="text-sm">
              <span className="font-bold mr-2">Outlet</span>
              {resInfo?.areaName}
            </h5>
            <h5 className="text-sm lowercase font-bold">
              {resInfo?.sla?.slaString}
            </h5>
          </div>
        </div>
      </div>

      {/* Details - Dineout  */}
      <div
        className={`${
          ToggleState === 2 ? `block` : `hidden`
        } rounded-b-3xl p-3 pb-5 text-left box-yash`}
      >

        <div className="p-3 py-5 bg-white rounded-3xl text-sm">
          <h5 className="font-semibold">{resInfo.avgRating} Rating • {resInfo.totalRatingsString} in Google • {resInfo.costForTwoMessage}</h5>
          <h5 className="font-semibold my-2">{resInfo.cuisines.join(", ")}</h5>
          <h5>Location: <span className="font-semibold">{dineout.completeAddress}</span></h5>
        </div>

      </div>

      {/* Deals */}
      <div className="hidden mt-4 p-3 bg-gray-400 rounded-lg">
        <h2 className="text-center">Deals for you</h2>
      </div>

      <div className="mt-5 p-5">

        <h2 className="text-xl">Menu</h2>

        {/* accordian  */}
        <div className="p-5">

          {categories.map( (category, index) => <MenuCategory key={category?.card?.card?.title} props={category} showItems={index === showIndex ? true : false} setshowIndex={()=> setshowIndex(index)} />)}
          
        </div>

      </div>
    </div>
  );
};

export default RestaurantMenu;

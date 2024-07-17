import ShimmerMenu from "./ShimmerMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setshowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const { name, id, cuisines, sla, costForTwo, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

  const categories =
    (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards).filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //   console.log(categories);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        <div className="p-4 mt-6 border-2 border-black-500 rounded-lg shadow-xl">
          <h1 className="mb-4 font-bold text-3xl">{name}</h1>
          <ul className="text-lg">
            <li className="mt-1">₹{costForTwo / 100} for two</li>
            <li className="mt-1">{sla.slaString}</li>
            <li className="mt-1">({totalRatingsString})</li>
            <li className="mt-1">Cuisines : {cuisines.join(", ")}</li>
          </ul>
        </div>

        {/* categories  accordions */}

        {categories.map((category, index) => (
          // controlled component
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

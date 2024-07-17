import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => { 

    const {resData} = props ;

    const {cloudinaryImageId, name, avgRating, sla, cuisines } = resData?.info ;

    return (
        <div className="p-4 border border-black m-4 w-[250px] h-auto bg-gray-200 rounded-lg">
            <div>
                <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
            </div>
            <h3 className="font-bold text-lg pt-3">{name}</h3>
            <div className="text-lg">⭐️ {avgRating}  •  {sla.deliveryTime} mins </div>
            <div className="text-sm pt-2">{cuisines.join(', ')}</div>
        </div>
    )
}

// higher order component

// input -> RestaurantCard , output -> RestaurantCardAvailable

export const withVegLabel = (RestaurantCard) => {

    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-700 text-white p-1 ml-4 rounded-t-lg rounded-r">Pure Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;
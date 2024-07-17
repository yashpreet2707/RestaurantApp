import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const ItemList = ({items}) => {

    const dispatch = useDispatch() ;

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item))
    }


    return (
        <div className="my-2 p-2">
            {items.map( (item) => (
                <div key={item.card.info.id} className="mt-2 p-2 border-b-2 border-black-500 flex justify-between items-center">
                    <div className="p-2 mb-2 w-10/12">
                        <div className="py-2">
                            <span>{item.card.info.name} </span>
                            <span>- ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12">
                        <div className="absolute mx-12 my-11">
                            <button className="border p-2  bg-black text-white rounded-lg border-none" onClick={() => handleAddItem(item)} >Add +</button>
                        </div>
                        <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList ;
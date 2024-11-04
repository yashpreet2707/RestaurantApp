import { resImgURL } from "../utils/constants"
import "../utils/Custom.css"

const ItemList = ({items}) => {

  return (
    <div className='text-left m-2 p-5 text-sm flex justify-between items-center border-t border-gray-400'>

        {items.map( (item) => (
            <>
            <div className='w-full text-left m-2 p-5 text-sm flex flex-col justify-between items-center border-t border-gray-400'>
                <div className='py-5 pr-10 w-10/12'>
                    <h4 className='font-semibold text-lg'>{item?.card?.info?.name}</h4>
                    <h5 className="py-2">₹{item?.card?.info?.price/100}</h5>
                    <p className="text-sm">{item?.card?.info?.description}</p>
                </div>
                <div className='image-menu'>
                    {(item?.card?.info?.imageId) ? <img src={resImgURL + item?.card?.info?.imageId} alt="" /> : <div></div>}
                </div>
            </div>
            </>
        ) )}
    </div>
  )
}

export default ItemList


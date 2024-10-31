import { resImgURL } from "../utils/constants"
import "../utils/Custom.css"


const Item = ({data}) => {

    const {name, price, description, imageId} = data?.card?.info ;

  return (
    <div className='text-left m-2 p-5 text-sm flex justify-between items-center border-t border-gray-400'>
        <div className='py-5 pr-10 w-10/12'>
              <h4 className='font-semibold text-lg'>{name}</h4>
              <h5 className="py-2">₹{price/100}</h5>
              <p className="text-sm">{description}</p>
        </div>
        <div className='image-menu'>
              {(imageId) ? <img src={resImgURL + imageId} alt="" /> : <div></div>}
        </div>
    </div>
  )
}

export default Item
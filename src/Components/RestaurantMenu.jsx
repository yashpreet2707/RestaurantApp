import { useParams } from "react-router-dom"


const RestaurantMenu = () => {

    const data = useParams() ;

    console.log(data) ;

  return (
    <div>{data.resId}</div>
  )
}

export default RestaurantMenu
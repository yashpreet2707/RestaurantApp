import { LOGO_URL } from "../utils/constants";
import {useState, useContext} from "react"

import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux"

export const Header = () => {

    // let btnName = "login" ;
    const [btnName, setbtnName] = useState("Login") ;

    const onlineStatus = useOnlineStatus() ;

    const {loggedInUser} = useContext(UserContext)

    // subscribing to the store using a selector (react-redux)
    const cartItems = useSelector((store) => store.cart.items) ;

    return (
        <div className="flex justify-between items-center border-b-2 border-black">
            <div className="w-44">
                <Link to="/"><img src={LOGO_URL} alt="log-img-res" /></Link>
            </div>
            <div className="">
                <ul className="flex px-10 text-lg">
                    <li className="px-4 cursor-pointer">
                        Online Status : {onlineStatus ? "🟢" : "🔴"} 
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-semibold">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button onClick={ () => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login") //terniary operator
                    }}>{btnName}</button>
                    <li className="px-4 font-serif font-semibold">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header ;
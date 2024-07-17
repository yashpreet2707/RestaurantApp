import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";


const Cart = () => {

    const dispatch = useDispatch() ;

    const cartItems = useSelector( (store) => store.cart.items)
    console.log(cartItems)

    const handleClearCart = () => {
        dispatch(clearCart())
        console.log("reache here")
    }

    return (
        <div>
            <h1 className="py-4 font-bold text-2xl my-2 text-center">This is Cart page</h1>
            <div className="w-6/12 m-auto">
                <div className="text-right">
                    <button className="py-2 px-4 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white" onClick={handleClearCart}>Clear Cart</button>
                </div>
                {cartItems.length === 0 && <h2 className="mt-8 p-4 text-lg text-center border border-black-400 rounded-lg ">Cart is empty. Add Items to the Cart!</h2>}
                <ItemList items={cartItems} />
            </div>


        </div>
    )
}

export default Cart ;
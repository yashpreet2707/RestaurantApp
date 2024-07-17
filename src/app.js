import React, { lazy, Suspense , useState, useEffect} from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom"

import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Cart from "./components/Cart"

import UserContext from "./utils/UserContext"


import { Provider } from "react-redux"
import appStore from "./utils/appStore"

// chunking
// code splitting
// dynamic bundling
// lazy loading -> (on demand loading)
const Grocery = lazy( () => import("./components/Grocery")) ;

const AppLayout = () => {

    // authentication (let say)
    const [userName, setuserName] = useState() ;

    useEffect( ()=> {
        // make an api call, send username and password
        const data = {
            name: "|"
        }

        setuserName(data.name)

    }, [])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={ {loggedInUser: userName , setuserName } }>
        <div className="app">
            {/* <UserContext.Provider value={ {loggedInUser: "Harpreet"}}> */}
            <Header />
            {/* </UserContext.Provider> */}
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
};


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About /> ,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading hehe ....</h1>} ><Grocery /></Suspense>,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading hehe ....</h1>} ><Grocery /></Suspense>,
    },
    {
        path: '/cart',
        element: <Cart />,
    },
    {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
    },
]) ;


(ReactDOM.createRoot(document.querySelector('#root')))
.render(<RouterProvider router={appRouter} />) ;
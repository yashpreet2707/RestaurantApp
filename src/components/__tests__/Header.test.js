import Header from "../Header"
import { fireEvent , render , screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"


test("it should load header component with a login button", ()=> {

    render(
        <BrowserRouter>
            <Provider store={appStore} >
            <Header />
            </Provider>
        </BrowserRouter>
    )

    // const loginButton = screen.getByRole("button")
    const loginButton = screen.getByText("Login")

    // assertion
    expect(loginButton).toBeInTheDocument() ;

    
})

test("it should load header component with cart items 0", ()=> {

    render(
        <BrowserRouter>
            <Provider store={appStore} >
            <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/) //regex

    
})

test("should change login button to logout button on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore} >
            <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument() ;

})
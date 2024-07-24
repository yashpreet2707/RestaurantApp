import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA) ;
        }
    })
}) ;


it("should search res list for pizza input", async ()=> {

    await act( async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ))

    const searchBtn = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target: {value: "pizza"}})

    fireEvent.click(searchBtn)

    // screen should load 7 cards

    const count = screen.getAllByTestId("resCard")
    expect(count.length).toBe(2)

})
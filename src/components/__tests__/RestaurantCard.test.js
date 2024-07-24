import RestaurantCard from "../RestaurantCard"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

import MOCK_DATA from "../mocks/resCardMock.json"

it("should render restauratn card component with props data" , () => {

    render(<RestaurantCard resData={MOCK_DATA} />)

    const nameRes = screen.getByText("Kwality Walls Frozen Dessert and Ice Cream Shop")

    expect(nameRes).toBeInTheDocument() ;
})
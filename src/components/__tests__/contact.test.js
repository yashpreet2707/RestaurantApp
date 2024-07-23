import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us page Test Cases", ()=> {


    test("should load contact us component", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading") ;

        // assertion
        expect(heading).toBeInTheDocument() ;
    })

    it("should load button inside contact us component", ()=> {
        render(<Contact />)

        // const button = screen.getByRole("button")
        const button = screen.getByText("Submit")

        // assertion
        expect(button).toBeInTheDocument() ; 
    })

    it("should load input name inside contact us component", ()=> {
        render(<Contact />)

        const inputName = screen.getByPlaceholderText("name")

        // assertion
        expect(inputName).toBeInTheDocument() ; 
    })

    it("should load two input boxes on the contact us component", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox") ;

        // console.log(inputBoxes[0])
        expect(inputBoxes.length).toBe(2) ;
        // expect(inputBoxes.length).not.toBe(3) ;
    })

})


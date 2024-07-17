import {useState, useEffect} from "react" ;

const User = ({name, location}) => {

    const [count] = useState(0)
    const [count2] = useState(1)

    useEffect(()=>{
        // api calls

        const timer = setInterval( () =>{
            console.log("Namaste React OP")
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log("useEffect return ")
        }

    }, [])
    console.log("render")

    return (
        <div className="mt-4 p-4 border-red-700 border-2 rounded-lg text-center">
            <div>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact : yashpreet1686@gmail.com</h4>
            </div>
        </div>
    )
}

export default User ;
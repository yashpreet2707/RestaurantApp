import React from "react" ;
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"

class About extends React.Component {

    constructor(props) {
        super(props) ;

        // console.log("Parent constructor")
    }

    componentDidMount() {
        // console.log("Parent did mount.") 
    }


    render() {
        // console.log("Parent render") 
        return (
            <div className="flex justify-center items-center">
                <div className="p-6">
                    <h1 className="p-4 text-2xl font-semibold self-center text-center">About Us Page (Class Based component)</h1> 
                    <UserContext.Consumer>{({loggedInUser}) =>
                        <h2 className="text-center">userName is : {loggedInUser}</h2>
                    }
                    </UserContext.Consumer>

                    <UserClass /> 
                    {/* <UserClass name={"Yashpreet (CLASS BASED component)"} location={"Dehradun class"} />  */}

                    <User name="Yashpreet (functional)" location="ambala haryana" />
                </div>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1 className="about-us-h1">This is About Us page</h1>

//             {/* <User name={"Yashpreet (FUNCTIONAL component)"} location={"Ambala functional"} /> */}

//             <UserClass name={"Yashpreet (CLASS BASED component)"} location={"Dehradun class"} />

//         </div>
//     )
// }

export default About ; 
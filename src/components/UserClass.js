import React from "react" ;

class UserClass extends React.Component {

    constructor(props) {
        super(props) ;
        // console.log(props)


        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy Name",
                login: "Dummy username",
                bio: "Dummy BIO"
            }
        };

        // console.log("child constructor")
    }

    async componentDidMount() {

        // console.log("child component did mount.")

        // api calls....

        const data = await fetch("https://api.github.com/users/yashpreet2707")
        const json = await data.json() ;

        console.log(json)

        this.setState({
            userInfo: json,
        })
    }  

    render() {

        // const {name, location} = this.props ;
        // const {count} = this.state ;

        // console.log("child render")

        const {name, login, avatar_url, bio} = this.state.userInfo

        return (
            <div className="mt-4 p-4 rounded-lg border-2 border-black-400; hover:border-black cursor-pointer">
            <div>
                {/* <h1>Count =  {count}</h1>
                <button onClick={() => {
                    // never update state variables directly
                    this.setState({
                        count: this.state.count+1 ,
                    })
                }}>Increase count</button> */}
                <img className="rounded-lg" src={avatar_url} alt="hehe" />
                <h2 className="py-2 mt-2 text-xl font-semibold text-center">{name} </h2>
                {/* <h3>{login}</h3> */}
                <h4 className="text-center mb-2">{bio}</h4>
            </div>
        </div>
        )
    }

}

export default UserClass ;

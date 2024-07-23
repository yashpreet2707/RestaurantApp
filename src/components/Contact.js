import ShimmerHome from "./ShimmerHome"

const Contact = () => {

    return (
        <div>
            <h1 className="text-center text-2xl mt-4 font-bold">Contact Us Page</h1>
            {/* <ShimmerHome /> */}
            <div className="flex justify-center mt-5">
                <form className="">
                    <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="name" />
                    <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="message" />
                    <button className="py-2 px-4 m-2 border border-black rounded-lg hover:bg-black hover:text-white bg-gray-200">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact ;
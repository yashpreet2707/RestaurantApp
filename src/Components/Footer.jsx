import { Link } from "react-router-dom"
import { appStoreURL, pathD1, pathD2, playStoreURL } from "../utils/constants"

const Footer = () => {

    const myStyle = {backgroundColor: '#F0F0F6',}

    const imgStyle = {height: '64px', maxWidth: '208px'}

  return (
    <>
    <div className="h-96 flex gap-x-10 w-full" style={myStyle}>
        {/* logo */}
        <div className="w-1/2 ml-20 p-5 mt-5">
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="160" height="49" fill="none">
                <path fill="#FE5005" d={pathD1}></path>
                <path fill="#fff" d={pathD2} ></path>
            </svg>
            <p className="text-sm mt-2"><i className="ri-copyright-line"></i>2024 Swiggy Limited</p>
        </div>
        {/* rest right portion */}
        <div className="mt-10 flex justify-start gap-x-10 w-3/4 text-left">
            <div>
                <h5 className="text-lg font-semibold"><Link to='contact'>Company</Link></h5>
                <ul className="mt-3 text-sm flex flex-col gap-y-2">
                    <li>About Us</li>
                    <li>Swiggy Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Dineout</li>
                    <li>Swiggy Genie</li>
                    <li>Minis</li>
                </ul>
            </div>
            <div>
                <h5 className="text-lg font-semibold"><Link to='contact'>Contact Us</Link></h5>
                <ul className="mt-3 text-sm flex flex-col gap-y-2">
                    <li>Help & Support</li>
                    <li>Partner With Us</li>
                    <li>Ride With Us</li>
                </ul>
                <h5 className="text-lg font-semibold mt-5"><Link to='contact'>Legal</Link></h5>
                <ul className="mt-3 text-sm flex flex-col gap-y-2">
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h5 className="text-lg font-semibold"><Link to='contact'>Life at Swiggy</Link></h5>
                <ul className="mt-3 text-sm flex flex-col gap-y-2">
                    <li>Explore With Swiggy</li>
                    <li>Swiggy News</li>
                    <li>Snackables</li>
                </ul>

                <h5 className="text-lg font-semibold mt-5">Social Links</h5>
                <ul className="mt-3 text-lg flex gap-x-2">
                    <li className="cursor-pointer"><i class="ri-linkedin-box-fill"></i></li>
                    <li className="cursor-pointer"><i class="ri-instagram-line"></i></li>
                    <li className="cursor-pointer"><i class="ri-facebook-fill"></i></li>
                    <li className="cursor-pointer"><i class="ri-pinterest-fill"></i></li>
                    <li className="cursor-pointer"><i class="ri-twitter-x-line"></i></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="border-slate-400 border-t-2 h-32 flex justify-center items-center" style={myStyle}>
        <p className="text-2xl font-light flex items-center gap-x-5 ">
            <span className="mr-5">For better experience, download the Swiggy app now</span>
            <img style={imgStyle} src={playStoreURL} alt="play-store" />
            <img style={imgStyle} src={appStoreURL} alt="app-store" />
        </p>
    </div>
    </>
  )
}

export default Footer
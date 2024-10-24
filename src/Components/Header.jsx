import { Link } from "react-router-dom"
import { pathD1, pathD2 } from "../utils/constants"
import { useOnlineStatus } from "../utils/useOnlineStatus"


const Header = () => {

  // custom hook
  const onlineStatus = useOnlineStatus() ;

  return (
    <div className='flex justify-between items-center border-b-2 h-20'>
      {/* logo  */}
      <div className="mx-auto w-5/12">
          <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="160" height="49" fill="none">
            <path fill="#FE5005" d={pathD1}></path>
            <path fill="#fff" d={pathD2} ></path>
          </svg>
      </div>
      {/* nav items  */}
      <div className="w-7/12">
        <ul className="flex justify-evenly text-lg">
          <li className="hover:text-[#FF5200] cursor-pointer">Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="hover:text-[#FF5200]"><Link to='/'>Home</Link></li>
          <li className="hover:text-[#FF5200]"><Link to='/about'>About</Link></li>
          <li className="hover:text-[#FF5200]"><Link to='/contact'>Contact us</Link></li>
          <li className="hover:text-[#FF5200]"><Link to='/cart'>Cart</Link></li>
          <li className="hover:text-[#FF5200]"><Link to=''><i class="ri-user-3-line"></i> Sign In</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
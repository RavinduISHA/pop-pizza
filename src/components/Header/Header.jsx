import { useEffect, useRef } from 'react'
import Logo from '../../assets/Images/Final.png'
import { NavLink, Link } from 'react-router-dom'
import { BiUser, BiCart  } from "react-icons/bi";

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/menu',
        display: 'Menu'
    },
    {
        path: '/deals',
        display: 'Deals & Offers'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]

const Header = () => {
  return (
    <header className='flex items-center bg-white header md:mb-4'>
        <div className="container">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className='md:mt-2'>
                    <img src={Logo} alt="Logo" className='md:w-36'/>
                </div>
                {/* menu */}
                <div className="navigation">
                    <ul className="menu flex items-center gap-[2.7rem]">
                        {
                            navLinks.map((link,index)=><li key={index}>
                                <NavLink to={link.path} className={navClass=> navClass.isActive ? 'border-b-2 border-primaryColor' : 'none'}>{link.display}</NavLink>
                            </li>)
                        }
                    </ul>
                </div>
                {/* nav-right */}
                <div className="flex items-center h-20 gap-4">
                    {/* search bar */}
                    <div className="">
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-10 p-2 text-black border border-gray-800 rounded-full"
                        />
                    </div>
                    <div className="flex items-center">
                    <Link to="" className="pr-4 text-gray-800 border-r-2 border-primaryColor">
                        <div>
                        <BiUser className='w-6 h-6'/>
                        </div>
                    </Link>

                    <Link to="" className="pl-4 text-gray-800">
                        <div>
                        <BiCart className='w-6 h-6'/>
                        </div>
                    </Link>
                </div>
                </div>
                
            </div>
        </div>
    </header>
  )
}

export default Header
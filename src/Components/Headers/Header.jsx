import React from 'react'
// Header top section icons
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


// Header wiht dropdown
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Dropdown, DropdownItem } from "flowbite-react";





const Header = () => {
    return (

        <div>

            {/* Simple Header Logo + Navlinks */}

            <div className=' w-full h-[65px] bg-blue-950 text-white'>
                <header className='w-[95%] mx-auto h-[65px] flex items-center px-1 justify-between'>
                    <h1 className='text-2xl font-semibold '>[Zubain]</h1>

                    <nav>
                        <ul className='flex gap-[35px] text-sm'>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Home</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Contact</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Service</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>About</a></li>
                        </ul>
                    </nav>
                </header>
            </div>


            {/* Simple Header Logo + Navlinks */}


            {/* Header with searchbar */}

            <div className='border border-black mt-7 w-full h-[65px] bg-blue-950'>
                <header className='w-[95%] h-[65px] mx-auto text-white flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold '>[Zubain]</h1>

                    <nav >
                        <ul className='flex gap-[35px] text-sm'>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Home</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Contact</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Service</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>About</a></li>
                        </ul>
                    </nav>

                    <div>
                        <input type="text" placeholder='Search here' className='border border-white p-2.5 outline-none rounded-lg' />
                    </div>
                </header>

            </div>


            {/* Header with searchbar */}

            {/* Header with CTA Button */}
            <div className='border border-black mt-7 w-full h-[65px] bg-blue-950'>
                <header className='w-[95%] h-[65px] mx-auto text-white flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold '>[Zubain]</h1>

                    <nav >
                        <ul className='flex gap-[35px] text-sm'>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Home</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Contact</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Service</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>About</a></li>
                        </ul>
                    </nav>

                    <div className='flex items-center gap-7'>
                        <button className='border-none cursor-pointer hover:bg-blue-500 transition duration-200 ease-in-out px-4 py-2 rounded-2xl text-normal bg-blue-600 outline-none'>Login</button>
                        <button className='border-none cursor-pointer hover:bg-blue-500 transition duration-200 ease-in-out px-4 py-2 rounded-2xl text-normal bg-blue-600 outline-none'>Sign Up</button>
                    </div>
                </header>

            </div>


            {/* Header with CTA Button */}

            {/* Header wiht Top Section */}

            <div className='border border-black mt-7 h-[125px] bg-blue-950 text-white flex flex-col justify-between'>
                <div className='border-b border-slate-400 w-[95%] mx-auto flex items-center justify-between h-[60px] py-4.5'>


                    <h1 className='text-3xl font-semibold '>[Zubain]</h1>


                    <div className=' h-[60px] flex gap-9  items-center justify-center'>
                        <FaFacebookF className='cursor-pointer   hover:bg-blue-600 w-[25px] h-[20px] transition duration-300 ease-in-out' />
                        <FaLinkedinIn className='cursor-pointer   hover:bg-blue-600 w-[25px] h-[20px] transition duration-300 ease-in-out' />
                        <FaXTwitter className='cursor-pointer   hover:bg-black w-[25px] h-[20px] transition duration-300 ease-in-out' />
                    </div>
                </div>


                <nav className=' w-[95%] mx-auto h-[60px] flex justify-center items-center'>
                    <ul className='flex gap-9'>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Home</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Contact</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Service</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>About</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Source</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Store</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Fashion</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Blog</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Team</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Feature</a></li>
                        <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Partner</a></li>
                    </ul>
                </nav>


            </div>
            {/* Header wiht Top Section */}

            {/* Navbar with Dropdown */}


            <div className='border border-black mt-7 w-full h-[65px] bg-blue-950'>
                <header className='w-[95%] h-[65px] mx-auto text-white flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold '>[Zubain]</h1>

                    <nav >
                        <ul className='flex gap-10 text-sm'>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Home</a></li>
                            <Dropdown label="Pages" dismissOnClick={false} className='cursor-pointer'>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Dashboard</DropdownItem>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Settings</DropdownItem>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Earnings</DropdownItem>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Sign out</DropdownItem>
                            </Dropdown>
                              <Dropdown label="Blog" dismissOnClick={false} className='cursor-pointer'>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Dashboard</DropdownItem>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Settings</DropdownItem>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Earnings</DropdownItem>
                                <DropdownItem className='hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer bg-blue-950'>Sign out</DropdownItem>
                            </Dropdown>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Contact</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>Service</a></li>
                            <li><a href="#" className='hover:text-blue-300 transition duration-300 ease-in-out'>About</a></li>
                        </ul>
                    </nav>

                    <div className=' flex items-center gap-6'>
                        <FaRegHeart className='text-xl' />
                        <BsCart className='text-xl' />

                        <input type="text" placeholder=' Search here' className='border border-white p-2.5 outline-none rounded-lg' />
                    </div>
                </header>

            </div>

            {/* Navbar with Dropdown */}

        </div>
    )
}

export default Header

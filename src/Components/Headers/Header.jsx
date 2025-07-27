import React from 'react'

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

        </div>
    )
}

export default Header

import React from 'react'

const Header = () => {
    return (
        <div>

            {/* Simple Header Logo + Navlinks */}

            <div className=' w-full h-[65px] bg-blue-950 text-white'>
                <header className='w-[95%] mx-auto h-[65px] flex items-center px-1 justify-between'>
                    <h1 className='text-2xl font-semibold '>Logo</h1>

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


            {/* Header with searchbar */}

        </div>
    )
}

export default Header

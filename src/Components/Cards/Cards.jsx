import React from 'react'
// Card image
import CardImage from "../../assets/images/Cards/image-1.jpg"
import { cardTheme } from 'flowbite-react'

const Cards = () => {
    return (
        <div>
            <h1 className='flex justify-center items-center font-bold text-4xl py-3'>Cards</h1>

            {/* Simple Card */}

            <div className='p-2 flex justify-center items-center'>
                <div className='w-1/4 h-[250px] p-5 rounded-lg shadow-black shadow-2xl flex flex-col justify-center items-start gap-2.5'>
                    <h2 className='text-xl font-semibold'>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur ad saepe consequuntur ut maxime iure rerum eos. Aliquid obcaecati quos dignissimos laborum voluptatibus soluta officia aut excepturi accusamus ab!</p>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-2xl cursor-pointer'>View</button>
                </div>
            </div>

            {/* Simple Card */}

            {/* Card with Image */}

            <div className='border border-black p-4 mt-8 flex justify-center items-center'>
                <div className='w-1/4 h-[500px] rounded-lg shadow-black shadow-2xl'>
                    <div>
                        <img src={CardImage} alt="Card image" className='bg-no-repeat bg-cover w-full rounded-lg' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2.5 p-4'>
                        <h2 className='text-xl font-semibold'>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur ad saepe consequuntur ut maxime iure rerum eos. Aliquid obcaecati quos dignissimos laborum voluptatibus soluta officia aut excepturi accusamus ab!</p>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded-2xl cursor-pointer'>View</button>
                    </div>
                </div>
            </div>
            {/* Card with Image */}
        </div>
    )
}

export default Cards

import React from 'react'

interface CardPlatListProps {
    title: string
    subtitle: string
    rate: string
}
const Card = ({ title, subtitle, rate }: CardPlatListProps) => {
    return (
        <div className="my-3">
            <div className="bg-[#F5F8FF] p-4 flex items-center justify-center my-2 rounded-xl py-10">
                {/* <PlayMusicIcon className='' /> */}
            </div>

            <p className='text-xl font-extrabold my-1'>{title}</p>
            <p className='text-[#666666] text-sm my-3'>{subtitle}</p>
            <span className='bg-[#EBFFF9] p-2 text-[#00C288] text-base rounded-full min-w-max'>{rate}</span>
        </div>
    )
}

export default Card

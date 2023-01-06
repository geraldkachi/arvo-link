import React from 'react'
import ProfileIcon from '../assets/svg/ProfileIcon'
import TotalAmountIcon from '../assets/svg/TotalAmountIcon'
import WalletBalIcon from '../assets/svg/WalletBalIcon'
import Card from '../components/card/Card'
import Header from '../components/header/Header'

const disbursement = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Header title='Bulk Disbursement' />

        <div className='bg-[#F5F3F9] pr-3 py-2 flex items-center rounded-lg px-2'>
          <span className='whitespace-nowrap'>
            Ayotunde Bally
            {/* && Top Lord Gerald */}
            </span> &nbsp; &nbsp; &nbsp;
          <ProfileIcon />
        </div>
      </div>

      <div className="my-20 max-w-4xl">
        <div className="grid md:grid-cols-5 gap-10">

          <div className="shadow-lg p-5 rounded-lg md:col-span-3">
            <div className="bg-[#FFFFFF] flex items-center justify-start py-5">
              <WalletBalIcon className='' />
            </div>
            <div className="text-black">
              <p className='text-base my-2'>Wallet Balance</p>
              <p className='text-2xl'>₦ 5,000,000</p>
            </div>
          </div>

          <div className="shadow-lg p-5 rounded-lg bg-[#A362F8] md:col-span-2">
            <div className="flex items-center justify-start py-5">
              <TotalAmountIcon className='' />
            </div>
            <div className="text-[#ffffff]">
              <p className='text-base my-2'>Wallet Balance</p>
              <p className='text-2xl'>₦ 5,000,000</p>
            </div>
          </div>

          {/* {Array(1).fill('').map((item) => (
            <Card title='Song Title' subtitle='Play Time — 2mins 45sec' rate='Good' />
          ))} */}
          {/* {Array(1).fill('').map((item) => (
            <Card title='Song Title' subtitle='Play Time — 2mins 45sec' rate='Good' />
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default disbursement

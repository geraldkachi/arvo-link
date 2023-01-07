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

        <div className='bg-[#F5F3F9] pr-3 py-2 flex items-center rounded-lg px-2 whitespace-nowrap '>
          <span className='text-sm'>
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

        <form >
          <div className='my-10 bg-white shadow-lg py-6 px-4 rounded-2xl'>
            <div className="mb-6 w-full">
              <label className="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
              <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:text-gray-700 focus:bg-white focus:outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="15,000" required />
            </div>

            <div className="">
              <div className="mb-3 w-full">
                <label className="form-label inline-block mb-2 text-gray-700"
                >Contacts</label>
                <textarea
                  className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                          "
                  placeholder="Type Here" style={{height: '150px'}}></textarea>
              </div>


              <div className="mb-3 block">
                <label className="form-label inline-block mb-2 text-gray-700"
                >Message</label>
                <textarea
                  className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                          "
                  placeholder="Type the bulk sms here"
                  style={{height: '150px'}}
                ></textarea>
              </div>

            </div>

          </div>
            <div className="flex items-center justify-between p-4 my-3 rounded-md bg-[#E8E9F2] text-black">
              <div>
                <p>Total amount sending</p>
              </div>
              <div>
                <p>₦ 490,000</p>
              </div>
          </div>

          <button className='bg-[#A362F8] rounded-md mt-5 px-10 py-4 text-white'>Disburse</button>
        </form>

      </div>
    </div>
  )
}

export default disbursement

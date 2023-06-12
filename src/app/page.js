'use client'

import {useEffect, useState} from "react"
import success from '../../public/icon-success.svg'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import mobile from "../../public/illustration-sign-up-mobile.svg"
import desktop from "../../public/illustration-sign-up-desktop.svg"

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 769
  )
  const [userEmail, setUserEmail] = useState('')
    
  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth)
          }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
          window.removeEventListener('resize', handleResize)
          }
      }, []
  )

  const handleSubmit = (event) => {
      event.preventDefault()   
      router.push('/subscribed')
  }

  const router = useRouter()

  return (
    <div className="flex items-center justify-center p-16 overflow-x-hidden">
    	<main className=" bg-white rounded-2xl md:flex md:flex-row-reverse md:p-6 pb-6 h-full">  
        <div>
          <Image src={windowWidth > 768 ? desktop : mobile} className="w-full rounded-t-xl h-full" alt="An orange image with a statistics icon and a monitor."/>
        </div>
        <div className="px-6 lg:pl-8 lg:pr-14">
          <h1 className="pt-12 pb-8 text-4xl font-bold lg:text-6xl">Stay updated!</h1>
          <p className="pb-6 lg:w-96">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="flex flex-row items-center">
            <div>
              <Image src={success} className="w-5 mr-6" alt="A rounded image with a success icon inside."/>
            </div>
            <p>Product discovery and building what matters</p>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <Image src={success} className="w-5 mr-6" alt="A rounded image with a success icon inside."/>
            </div>
            <p className="py-3">Measuring to ensure updates are a success</p>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <Image src={success} className="w-5 mr-6" alt="A rounded image with a success icon inside."/>
            </div>
            <p>And much more! You are going to be updated</p>
          </div>
          <form className="pt-12 flex flex-col" onSubmit={handleSubmit}>
            <label className="text-sm font-semibold">Email address</label>
            <input 
              className="px-6 py-4 rounded-xl border-black border-2 mt-4" 
              placeholder="email@company.com" 
              onChange={(event) => {
                setUserEmail(event.target.value)
              }}
              value={userEmail}
              type="email"
              required
            />
            <button className="bg-indigo-950 py-4 text-white rounded-lg mt-8 cursor-pointer font-medium" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
    	</main>
    </div>		  
  )
}

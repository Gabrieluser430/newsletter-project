'use client'

import { useEffect, useState } from "react"
import success from '../../../public/icon-success.svg'
import Image from 'next/image'
import mobile from "../../../public/illustration-sign-up-mobile.svg"
import desktop from "../../../public/illustration-sign-up-desktop.svg"
import { useForm } from "react-hook-form"
import  { useRouter } from "next/navigation"

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 769
  )
    
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


  function onSubmit(data) {
    setEmail(data.emailInput)
    router.push(`/subscribed?email=${data.emailInput}`)
  }


  return (
      <div className="flex flex-col items-center justify-center p-16 overflow-x-hidden ">
        
        <main className=" bg-white rounded-2xl md:flex md:flex-row-reverse md:p-6 pb-6 lg:h-full">  
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
            <form className="pt-12 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label className="text-sm font-semibold">Email address</label>
              <input 
                {...register("emailInput",
                  {
                    required: "Required",
                    pattern: {
                      value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Your email is incorrect"
                    },
                    maxLength: {
                      value: 30,
                      message: "The max length is 30"
                    }
                  }) 
                }
                className={`px-6 py-4 rounded-xl border-2 mt-4 focus:outline-none ${errors.emailInput ? "border-red-500" : "border-black"} `}
                placeholder="email@company.com" 
              />
              {errors.emailInput && <p className="text-red-500 ">{errors.emailInput.message}</p>}
              <button className="bg-indigo-950 py-4 text-white rounded-lg mt-8 cursor-pointer font-medium hover:bg-gradient-to-r from-red-500 to-orange-500 transition-colors" type="submit">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </main>
      </div>		  
  )
}

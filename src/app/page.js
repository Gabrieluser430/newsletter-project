import Image from 'next/image'
import mobile from "../../public/illustration-sign-up-mobile.svg"
import success from '../../public/icon-success.svg'

export default function Home() {
  return (
    <div className="flex items-center justify-center p-14">
    	<main className="h-screen w-screen bg-slate-200 rounded-2xl">  
        <div>
          <Image src={mobile} width={'100%'} height={'100%'} className="w-full rounded-t-xl"/>
        </div>
        <div className="px-6">
          <h1 className="pt-12 pb-8 text-4xl font-bold">Stay updated!</h1>
          <p className="pb-6">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="flex flex-row items-center">
            <div>
              <Image src={success} className="w-5 mr-6"/>
            </div>
            <p>Product discovery and building what matters</p>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <Image src={success} className="w-5 mr-6"/>
            </div>
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <Image src={success} className="w-5 mr-6"/>
            </div>
            <p>And much more! You are going to be updated</p>
          </div>
          <form className="pt-12 flex flex-col">
            <label className="text-sm">Email address</label>
            <input className="px-6 py-4 rounded-xl border-black border-2 mt-4" placeholder="email@company.com"/>
            <button className="bg-blue-900 py-4 text-white rounded-lg mt-8 cursor-pointer">Subscribe to monthly newsletter</button>
          </form>
        </div>
    	</main>
    </div>		  
  )
}

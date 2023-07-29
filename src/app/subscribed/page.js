'use client'

import Image from "next/image"
import success from "../../../public/icon-success.svg"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation";

export default function Subscribed() {
    const router = useRouter()
    const searchParams = useSearchParams();

    const email = searchParams.get("email");
    // const email = "";

    return (
        <div className="flex flex-row items-center justify-center h-screen">
            <div className=" w-96 h-[26rem] bg-white pt-10 pl-10 pr-10 rounded-3xl">
                <div className="w-10 lg:w-12">
                    <Image src={success} alt="Success icon"/>
                </div>
                <h1 className="font-bold text-3xl mt-8 md:text-4xl lg:text-5xl lg:mt-6">Thanks for subscribing!</h1>
                <p className="font-medium mt-4 text-sm">A confirmation message has been sent to { email }. Please open it and click the button inside to confirm your subscription.</p>
                <button className="mt-7 bg-buttonColor px-20 py-3 rounded-lg text-white font-medium text-sm" onClick={() => router.push("/")}>Dismiss message</button>
            </div>
        </div>
    )
}
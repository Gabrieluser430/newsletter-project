import Image from "next/image"
import success from "../../../public/icon-success.svg"

export default function about() {
    return (
        <div className="flex flex-row items-center justify-center h-screen">
            <div className=" w-96 h-96 bg-white p-10 rounded-3xl">
                <div className="w-10">
                    <Image src={success} />
                </div>
                <h1 className="font-bold text-3xl mt-8">Thanks for subscribing!</h1>
                <p className="font-medium mt-4 text-sm">A confirmation email has been sent to ash@loremcompany.com Plase open it and click the button inside to confirm your subscription.</p>
                <button className="mt-4 bg-buttonColor px-20 py-2 rounded-lg text-white font-medium text-sm">Dismiss message</button>
            </div>
        </div>
    )
}
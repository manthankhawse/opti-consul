import Image from "next/image"
import gif from "../assets/top_technologies-02.gif"
import { Button } from "./Button"

function Hero() {
  return (
    <>
        <div className="flex justify-around items-center py-24">
            {/* left */}
            <div className="w-4/12 flex flex-col h-full gap-8 justify-center items-center">
                <p className="text-5xl font-bold">Simplifying Compliance. Optimizing Performance.</p>
                <p className="text-gray-600">Your Energy Success is Our Top Priority: Trust New-Gen Solutions for Expert Guidance, Innovative Solutions, and Unparalleled Support.
                </p>
                <div className="flex w-full gap-4">
                    <Button>Learn More</Button>
                    <Button>Get Started</Button>
                </div>
            </div>
            {/* right */}
            <div className="w-4/12">
                <Image src={gif} alt="" className="h-full w-full"/>
            </div>
        </div>
    </>
  )
}

export default Hero

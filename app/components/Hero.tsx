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
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit, et eos, numquam facere hic quaerat sed totam amet illo impedit voluptates deleniti. Corporis, ad! Nemo cum laudantium consequuntur, ipsum alias minus fuga voluptates sequi nesciunt soluta debitis iure. Amet temporibus, quaerat neque quidem quibusdam quis sunt voluptatum? Animi dolorem perferendis assumenda alias odio reiciendis voluptatibus, iure amet. Beatae nobis esse nesciunt quaerat dolores?
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
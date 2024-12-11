import {Button} from "./Button"
import { NavigationMenuDemo } from "./NavigationMenu"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-4 border-b-2">
        <div className="font-bold text-2xl">Logo</div>
        <NavigationMenuDemo/>
        <Button>Get a demo</Button>
    </div>
  )
}

export default Navbar
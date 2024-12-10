import { Button } from "./Button"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-4 border-b-2">
        <div className="font-bold text-2xl">Logo</div>
        <div className="flex gap-12 justify-between items-center  font-semibold text-xl">
            <p>About us</p>
            <p>Services</p>
            <p>Resources</p>
            <p>Contact</p>
        </div>
        <Button >Get a demo</Button>
    </div>
  )
}

export default Navbar
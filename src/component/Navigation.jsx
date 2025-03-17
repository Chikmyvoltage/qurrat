import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {

  return (
    <nav className="flex relative w-full flex-row items-center lg:justify-center mt-12 px-8">
      <ul className="flex max-md:hidden flex-row gap-12">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#members">Members</a>
        <a href="#career">Career</a>
      </ul>
      
      <RxHamburgerMenu className="text-4xl md:hidden"/>

      <button className="absolute right-8 px-4 py-1 font-medium rounded-full text-black bg-linear-to-r from-primary to-[#213742]">
        Contact Us
      </button>
    </nav>
  )
}

export default Navigation;

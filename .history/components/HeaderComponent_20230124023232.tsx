import Image from "next/image";
import ShoppingCar from "../icons/shopping-car.svg";
import LogoComponent from "./LogoComponent";
import SidebarCar from "./SidebarCar";

export default function HeaderComponent() {
  return (
    <div className='z-0 bg-[#0F52BA] '>
      <SidebarCar />
      <div className='w-full max-w-8xl mx-auto h-[101px] justify-between items-center flex px-16'>
        <LogoComponent />
      </div>
    </div>
  );
}
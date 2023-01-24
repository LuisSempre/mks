import Image from "next/image";
import ShoppingCar from "../icons/shopping-car.svg";
import LogoComponent from "./LogoComponent";

export default function HeaderComponent() {
  return (
    <div className='bg-[#0F52BA] w-full max-w-8xl mx-auto h-[101px] justify-between items-center flex px-16'>
      <LogoComponent />
      <div className='flex px-4 py-2 bg-white rounded-md'>
        <Image src={ShoppingCar} alt='' className='w-4 h-4' unoptimized />
        <p>0</p>
      </div>
    </div>
  );
}

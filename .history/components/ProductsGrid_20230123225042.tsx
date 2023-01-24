import Watch from "../images/apple-watch.png";
import IconShoppingBag from "../icons/shopping-bag.svg";
import Image from "next/image";

const people = [
  {
    name: "Apple Watch Series 4 GPS",
    price: "R$399",
    role: "Redesigned from scratch and completely revised.",
    button: "Comprar",
    icon: IconShoppingBag,
    img: Watch,
  },
];

export default function ProductGrid() {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    >
      {people.map((person) => (
        <li
          key={person.button}
          className='flex flex-col col-span-1 text-center bg-white rounded-lg shadow w-[218px] h-[285px]'
        >
          <div className='flex flex-col p-3 space-y-2'>
            <Image
              src={person.img}
              alt=''
              className='w-full h-[138px] px-4'
              unoptimized
            />
            <div className='flex space-x-4'>
              <p className='text-left text-[#2C2C2C] text-md'>{person.name}</p>
              <p className='font-bold text-sm text-white bg-[#373737] rounded-md items-center justify-center flex'>
                {person.price}
              </p>
            </div>

            <small className='text-xs text-left text-[#2C2C2C] font-thin'>
              {person.role}
            </small>
          </div>
          <div className='py-2 flex items-center justify-center h-[32px] space-x-4 bg-[#0F52BA] rounded-b-md'>
            <Image src={person.icon} alt='' className='w-4 h-4' unoptimized />
            <a className='font-semibold text-white uppercase'>
              {person.button}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

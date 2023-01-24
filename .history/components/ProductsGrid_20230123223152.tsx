import Watch from "../images/apple-watch.png";
import IconShoppingBag from "../icons/shopping-bag.svg";
import Image from "next/image";
const people = [
  {
    name: "Apple Watch Series 4 GPS",
    title: "R$399",
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
          <div className='flex flex-col flex-1 p-8'>
            <Image
              src={person.img}
              alt=''
              className='w-full h-[138px]'
              unoptimized
            />
            <div className='flex'>
              <p className='text-sm font-medium text-left text-gray-900 '>
                {person.name}
              </p>
              <p className='text-sm text-white bg-[#373737] rounded-md'>
                {person.title}
              </p>
            </div>

            <small className='text-xs text-left text-[#2C2C2C] font-thin'>
              {person.role}
            </small>
          </div>
          <div>
            <div className='flex items-center justify-center h-[32px] space-x-4 bg-[#0F52BA] rounded-b-md'>
              <Image src={person.icon} alt='' className='w-4 h-4' unoptimized />
              <a className='text-white'>{person.button}</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

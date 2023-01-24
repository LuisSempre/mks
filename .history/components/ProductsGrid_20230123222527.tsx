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
          className='flex flex-col col-span-1 text-center bg-white rounded-lg shadow'
        >
          <div className='flex flex-col flex-1 p-8'>
            <Image src={person.img} alt='' className='w-8 h-8' unoptimized />
            <div className='flex'>
              <p className='mt-6 text-sm font-medium text-left text-gray-900 '>
                {person.name}
              </p>
              <p className='text-sm text-white bg-gray-900 rounded-md'>
                {person.title}
              </p>
            </div>

            <span className='px-2 py-1 text-xs font-medium text-left '>
              {person.role}
            </span>
          </div>
          <div>
            <div className='flex items-center justify-center h-[31px] space-x-4 bg-blue-500 rounded-b-md'>
              <Image src={person.icon} alt='' className='w-4 h-4' unoptimized />
              <a className='text-white'>{person.button}</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

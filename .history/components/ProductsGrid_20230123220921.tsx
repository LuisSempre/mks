import Watch from "../images/apple-watch.png";
import Image from "next/image";
const people = [
  {
    name: "Apple Watch Series 4 GPS",
    title: "R$399",
    role: "Redesigned from scratch and completely revised.",
    email: "Comprar",
    img: [{ Watch }],
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
          key={person.email}
          className='flex flex-col col-span-1 text-center bg-white rounded-lg shadow'
        >
          <div className='flex flex-col flex-1 p-8'>
            <Image
              src='../images/apple-watch.png'
              alt='Picture of the author'
              width={500}
              height={500}
            />
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
            <div className='flex -mt-px bg-blue-500 rounded-b-md'>
              <div className='flex flex-1 w-0 '>
                <a className='relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-white text-gray-700 uppercase border border-transparent rounded-bl-lg hover:text-gray-500'>
                  {person.email}
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

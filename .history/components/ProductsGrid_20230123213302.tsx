const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icon: "<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.737212" fill-rule="evenodd" clip-rule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.737212" d="M1 4.375H13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
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
          className='flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow'
        >
          <div className='flex flex-col flex-1 p-8'>
            <img
              className='flex-shrink-0 w-32 h-32 mx-auto'
              src={person.imageUrl}
              alt=''
            />
            <h3 className='mt-6 text-sm font-medium text-gray-900'>
              {person.name}
            </h3>
            <dl className='flex flex-col justify-between flex-grow mt-1'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-sm text-gray-500'>{person.title}</dd>
              <dt className='sr-only'>Role</dt>
              <dd className='mt-3'>
                <span className='px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full'>
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className='flex -mt-px divide-x divide-gray-200'>
              <div className='flex flex-1 w-0 bg-blue-500'>
                <a
                  href={`mailto:${person.email}`}
                  className='relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500'
                >
                  <span className='ml-3 text-white'>Email</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

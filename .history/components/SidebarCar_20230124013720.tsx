import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomRightIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarCar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className='fixed inset-y-0 flex flex-col w-64 md:hidden'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pt-5 overflow-y-auto bg-indigo-700'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <img
                className='w-auto h-8'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300'
                alt='Your Company'
              />
            </div>
            <div className='flex flex-col flex-1 mt-5'>
              <nav className='flex-1 px-2 pb-4 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-100 hover:bg-indigo-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    )}
                  >
                    <item.icon
                      className='flex-shrink-0 w-6 h-6 mr-3 text-indigo-300'
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 md:pl-64'>
          <div className='sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow'>
            <button
              type='button'
              className='px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3BottomRightIcon className='w-6 h-6' aria-hidden='true' />
            </button>
            <div className='flex justify-between flex-1 px-4'>
              <div className='flex flex-1'>
                <form className='flex w-full md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <MagnifyingGlassIcon
                        className='w-5 h-5'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search-field'
                      className='block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form>
              </div>
              <div className='flex items-center ml-4 md:ml-6'>
                <button
                  type='button'
                  className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='w-6 h-6' aria-hidden='true' />
                </button>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                  <Dialog
                    as='div'
                    className='relative z-40'
                    onClose={setSidebarOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter='transition-opacity ease-linear duration-300'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='transition-opacity ease-linear duration-300'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
                    </Transition.Child>

                    <div className='fixed inset-0 z-40 flex'>
                      <Transition.Child
                        as={Fragment}
                        enter='transition ease-in-out duration-300 transform'
                        enterFrom='-translate-x-full'
                        enterTo='translate-x-0'
                        leave='transition ease-in-out duration-300 transform'
                        leaveFrom='translate-x-0'
                        leaveTo='-translate-x-full'
                      >
                        <Dialog.Panel className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-indigo-700'>
                          <Transition.Child
                            as={Fragment}
                            enter='ease-in-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in-out duration-300'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <div className='absolute top-0 right-0 pt-2 -mr-12'>
                              <button
                                type='button'
                                className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={() => setSidebarOpen(false)}
                              >
                                <span className='sr-only'>Close sidebar</span>
                                <XMarkIcon
                                  className='w-6 h-6 text-white'
                                  aria-hidden='true'
                                />
                              </button>
                            </div>
                          </Transition.Child>
                          <div className='flex items-center flex-shrink-0 px-4'>
                            <img
                              className='w-auto h-8'
                              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300'
                              alt='Your Company'
                            />
                          </div>
                          <div className='flex-1 h-0 mt-5 overflow-y-auto'>
                            <nav className='px-2 space-y-1'>
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-indigo-800 text-white"
                                      : "text-indigo-100 hover:bg-indigo-600",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                                  )}
                                >
                                  <item.icon
                                    className='flex-shrink-0 w-6 h-6 mr-4 text-indigo-300'
                                    aria-hidden='true'
                                  />
                                  {item.name}
                                </a>
                              ))}
                            </nav>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                      <div className='flex-shrink-0 w-14' aria-hidden='true'>
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <main>
            <div className='py-6'>
              <div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  Dashboard
                </h1>
              </div>
              <div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>
                  <div className='border-4 border-gray-200 border-dashed rounded-lg h-96' />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

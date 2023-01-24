import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCar from "../icons/shopping-car.svg";
import Image from "next/image";

const navigation = [{ name: "Carrinho de compras", href: "#", current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarCar() {
  return (
    <Disclosure as='nav' className='bg-[#0F52BA]'>
      {({ open }) => (
        <>
          <div className='z-10 flex items-center justify-between h-16'>
            {/* Mobile menu button*/}
            <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md'>
              {open ? (
                <XMarkIcon
                  className='block w-6 h-6 justify-left'
                  aria-hidden='true'
                />
              ) : (
                <div className='flex items-center justify-center px-4 py-2 space-x-4 bg-white rounded-md'>
                  <Image
                    src={ShoppingCar}
                    alt=''
                    className='w-4 h-4'
                    unoptimized
                  />
                  <p className='font-bold'>0</p>
                </div>
              )}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className='bg-[#0F52BA] h-screen'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className='block px-3 py-2 text-base font-medium text-white rounded-md'
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

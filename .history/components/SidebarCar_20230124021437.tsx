import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Carrinho de compras", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-[#0F52BA]'>
      {({ open }) => (
        <>
          <div className='relative flex items-center justify-between h-16'>
            <div className='inset-y-0 left-0 items-center sm:flex sm:absolute'>
              {/* Mobile menu button*/}
              <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md'>
                {open ? (
                  <XMarkIcon
                    className='items-end block w-6 h-6'
                    aria-hidden='true'
                  />
                ) : (
                  <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className='bg-[#0F52BA] h-screen'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current ? "text-white"",
                    "block px-3 py-2 rounded-md text-base font-medium",
                  )}
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

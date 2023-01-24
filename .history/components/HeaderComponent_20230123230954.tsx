import LogoComponent from "./LogoComponent";

export default function HeaderComponent() {
  return (
    <div className='bg-[#0F52BA] w-full max-w-8xl mx-auto h-[101px] justify-between items-center flex px-8'>
      <LogoComponent />
    </div>
  );
}

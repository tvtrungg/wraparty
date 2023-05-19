import Image from "next/image";

function Header() {
  return (
    <div className="fixed w-full p-5 px-36 flex items-center justify-between z-10">
      <div className="logo flex">
        <Image
          src="/assets/images/owl.png"
          alt="Wraparty Logo"
          width={80}
          height={5}
          className="w-[17%] own-logo"
        />
        <Image
          src="/assets/images/wraparty.png"
          alt="Wraparty Logo"
          width={200}
          height={5}
          className="w-[45%] h-[45%]"
        />
      </div>
    </div>
  );
}

export default Header;

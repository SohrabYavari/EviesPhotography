import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="w-screen py-20 bg-[#222] text-white">
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-4xl text-center">
            Everywhere else to find me!!
          </h2>

          <div className="flex gap-10 justify-center itmes-center">
            <a href="" className="flex gap-2 text-xl">
              <Instagram />
              <p>Insta </p>
            </a>

            <a href="" className="flex gap-2 text-xl">
              <Mail />
              <p>email</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

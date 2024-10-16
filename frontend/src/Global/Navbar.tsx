import { Link } from "react-scroll";
import SlideComp from "./framerMotionComponents/SlideComp";

const Navbar = () => {
  return (
    <>
      <SlideComp className="fixed top-0 z-30 bg-[#222] opacity-85 text-white w-full flex justify-center items-center rounded-b-full">
        <nav className="p-5">
          <ul className="flex gap-10">
            <LinkComponent link="home" name="Home" />
            <LinkComponent link="about-me" name="About Me" />
            <LinkComponent link="why" name="Why" />
            <LinkComponent link="contact" name="Contact" />
          </ul>
        </nav>
      </SlideComp>
    </>
  );
};

interface Props {
  link: string;
  name: string;
}

const LinkComponent = ({ link, name }: Props) => {
  return (
    <>
      <Link
        className="cursor-pointer hover:tracking-wider duration-200 ease-in-out font-bold text-lg "
        to={link}
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        {name}
      </Link>
    </>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import SlideComp from "./framerMotionComponents/SlideComp";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SlideComp className="fixed top-0 z-30 bg-[#222] text-white w-full flex justify-center items-center">
        <nav className="p-5 w-full">
          {/* Toggle Button for Small Screens */}
          <button
            className="md:hidden flex items-center justify-end w-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className="block h-1 w-6 bg-white"></span>
              <span className="block h-1 w-6 bg-white"></span>
              <span className="block h-1 w-6 bg-white"></span>
            </div>
          </button>

          {/* Full Menu for Larger Screens */}
          <ul className="hidden md:flex gap-10 justify-center">
            <LinkComponent link="home" name="Home" onClick={handleClose} />
            <LinkComponent link="about-me" name="Me" onClick={handleClose} />
            <LinkComponent link="why" name="Why" onClick={handleClose} />
            <LinkComponent
              link="portfolio"
              name="Portfolio"
              onClick={handleClose}
            />
            <LinkComponent
              link="contact"
              name="Contact"
              onClick={handleClose}
            />
          </ul>

          {/* Collapsible Menu for Small Screens with Animation */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="flex flex-col items-end  gap-5 mt-5 md:hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <LinkComponent link="home" name="Home" onClick={handleClose} />
                <LinkComponent
                  link="about-me"
                  name="Me"
                  onClick={handleClose}
                />
                <LinkComponent link="why" name="Why" onClick={handleClose} />
                <LinkComponent
                  link="portfolio"
                  name="Portfolio"
                  onClick={handleClose}
                />
                <LinkComponent
                  link="contact"
                  name="Contact"
                  onClick={handleClose}
                />
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </SlideComp>
    </>
  );
};

interface Props {
  link: string;
  name: string;
  onClick: () => void; // Function to handle click event
}

const LinkComponent = ({ link, name, onClick }: Props) => {
  return (
    <Link
      className="cursor-pointer hover:tracking-wider duration-200 ease-in-out font-bold text-lg"
      to={link}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      onClick={onClick} // Close the navbar when clicked
    >
      {name}
    </Link>
  );
};

export default Navbar;

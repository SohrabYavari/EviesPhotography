import SlideInDiv2 from "./framerMotionComponents/SlideInDiv2"

interface Props {
    header: string;
}

const Header = ({header}: Props) => {
  return (
    <SlideInDiv2 className="md:text-9xl text-7xl text-center my-5">
      <h1>{header}</h1>
    </SlideInDiv2>
  )
}

export default Header
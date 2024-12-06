import SlideInDiv from "./framerMotionComponents/SlideInDiv";

interface Props {
  img: string;
  width: string;
  length: string;
  flexBasis: string;
}

const Image = ({ width, length, flexBasis, img }: Props) => {
  return (
    <>
      <SlideInDiv className={`flex w-${width} h-${length} basis-${flexBasis}`}>
        <img
          src={img}
          alt=""
          className={`flex w-full bg-slate-300 hover:scale-105 ease-in-out duration-300`}
          loading="lazy"
        />
      </SlideInDiv>
    </>
  );
};

export default Image;

import BentoBox from "@/Global/BentoBox";
import FadeComp from "@/Global/framerMotionComponents/FadeComp";
import SlideInDiv2 from "@/Global/framerMotionComponents/SlideInDiv2";

const Hero = () => {
  return (
    <>
      <div id="home" className="w-full min-h-screen">
        <div className="w-full relative flex justify-center items-center translate-y-2/3">
              <FadeComp className="">
                <BentoBox />
              </FadeComp>
              <SlideInDiv2 className="text-9xl text-center absolute">
                <h1> Evie's photography </h1>
              </SlideInDiv2>
          </div>
      </div>
    </>
  );
};

export default Hero;

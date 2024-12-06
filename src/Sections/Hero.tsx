import BentoBox from "@/Global/BentoBox";
import FadeComp from "@/Global/framerMotionComponents/FadeComp";
import SlideInDiv2 from "@/Global/framerMotionComponents/SlideInDiv2";

const Hero = () => {
  return (
    <>
      <div id="home" className="w-full min-h-screen">
        <div className="w-full h-screen flex justify-center items-center absolute inset-0">
          <FadeComp>
            <BentoBox
              bentoWidth="screen"
              rows={[
                [
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "1/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "1/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "2/3",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "2/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "2/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "1/3",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "1/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "2/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "40",
                    flexBasis: "1/3",
                  },
                ],
              ]}
            />
          </FadeComp>

          <SlideInDiv2 className="md:text-9xl text-6xl text-center absolute">
            <h1> Evie's photography </h1>
          </SlideInDiv2>
        </div>
      </div>
    </>
  );
};

export default Hero;

import CardComp2 from "@/Global/CardComp2";
import SlideInDiv from "@/Global/framerMotionComponents/SlideInDiv";

const About = () => {
  return (
    <>
      <div id="about-me" className="w-full flex flex-col justify-center">
        <SlideInDiv className="text-center py-10">
          <h1 className="text-9xl">About Me </h1>
        </SlideInDiv>

        <SlideInDiv className="">
          <CardComp2
            image=""
            header="Hi my name is Evie"
            description={
              <>
              <div className="flex flex-col gap-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum maxime, dolorum nisi harum a sed debitis fuga eos
                  saepe, iste nihil ea quos adipisci, unde inventore! Beatae
                  odit a repellendus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum maxime, dolorum nisi harum a sed debitis fuga eos
                  saepe, iste nihil ea quos adipisci, unde inventore! Beatae
                  odit a repellendus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum maxime, dolorum nisi harum a sed debitis fuga eos
                  saepe, iste nihil ea quos adipisci, unde inventore! Beatae
                  odit a repellendus.
                </p>
              </div>
              </>
            }
          />
        </SlideInDiv>
      </div>
    </>
  );
};

export default About;

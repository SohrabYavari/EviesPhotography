import CardComp2 from "@/Global/CardComp";
import SlideInDiv from "@/Global/framerMotionComponents/SlideInDiv";
import Header from "@/Global/Header";

const About = () => {
  return (
    <>
      <div id="about-me" className="w-full container flex flex-col justify-center">
        <Header header='About Me' />

        <SlideInDiv className="">
          <CardComp2
            image=""
            length="96"
            imageBasis="2/3"
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

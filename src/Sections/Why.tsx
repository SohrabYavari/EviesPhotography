import CardComp from "@/Global/CardComp";
import FadeComp from "@/Global/framerMotionComponents/FadeComp";
import SlideInDiv from "@/Global/framerMotionComponents/SlideInDiv";
import Header from "@/Global/Header";

const Why = () => {
  return (
    <>
      <div id="why" className="flex flex-col w-full min-h-screen justify-center">
        <Header header="Why" />

        <div className="flex md:flex-row-reverse flex-col">
          <FadeComp className="p-2 basis-2/3">
            <figure>
              <img src="" alt="" className="w-full h-96 bg-slate-500" />
            </figure>
          </FadeComp>

          <div className="flex flex-col px-2 my-auto">
            <SlideInDiv className="w-full flex justify-center">
              <CardComp
                header="Reason 1"
                description={
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptate deleniti iure beatae aut! Eaque quam eius nisi,
                    rerum itaque et iure rem omnis ut inventore! Illum error
                    maiores voluptas blanditiis!
                  </p>
                }
              />
            </SlideInDiv>

            <SlideInDiv className="w-full flex justify-end ">
              <CardComp
                header="Reason 2"
                description={
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptate deleniti iure beatae aut! Eaque quam eius nisi,
                    rerum itaque et iure rem omnis ut inventore! Illum error
                    maiores voluptas blanditiis!
                  </p>
                }
              />
            </SlideInDiv>

            <SlideInDiv className="w-full flex justify-start">
              <CardComp
                header="Reason 3"
                description={
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptate deleniti iure beatae aut! Eaque quam eius nisi,
                    rerum itaque et iure rem omnis ut inventore! Illum error
                    maiores voluptas blanditiis!
                  </p>
                }
              />
            </SlideInDiv>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;

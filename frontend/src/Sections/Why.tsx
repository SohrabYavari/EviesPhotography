import CardComp from "@/Global/CardComp";
import SlideInDiv from "@/Global/framerMotionComponents/SlideInDiv";

const Why = () => {
  return (
    <>
      <div id="why" className="flex flex-col w-full">
        <SlideInDiv className="text-center py-10">
          <h1 className="text-9xl">Why? </h1>
        </SlideInDiv>
        <SlideInDiv className="w-full flex justify-center">
          <div className="w-2/3">
            <CardComp
              header="Reason 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et quam culpa optio numquam facilis rem fugiat accusantium, impedit iure, nihil quia repellat laborum. Veritatis eius sed ipsam odio earum."
            />
          </div>
        </SlideInDiv>

        <SlideInDiv className="w-full flex justify-end ">
          <div className="w-2/3">
            <CardComp
              header="Reason 2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et quam culpa optio numquam facilis rem fugiat accusantium, impedit iure, nihil quia repellat laborum. Veritatis eius sed ipsam odio earum."
            />
          </div>
        </SlideInDiv>
        
        <SlideInDiv className="w-full flex justify-start">
          <div className="w-2/3 ml-10">
            <CardComp
              header="Reason 3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et quam culpa optio numquam facilis rem fugiat accusantium, impedit iure, nihil quia repellat laborum. Veritatis eius sed ipsam odio earum."
            />
          </div>
        </SlideInDiv>

      </div>
    </>
  );
};

export default Why;

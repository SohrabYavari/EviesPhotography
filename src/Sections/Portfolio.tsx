import BentoBox from "@/Global/BentoBox";
import Header from "@/Global/Header";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="w-full min-h-screen flex flex-col">
        <Header header="Portfolio" />

          <BentoBox
            bentoWidth="full"
            rows={[
              [
                {
                  img: "",
                  width: "full",
                  length: "96",
                  flexBasis: "2/3",
                },
                {
                  img: "",
                  width: "full",
                  length: "96",
                  flexBasis: "1/3",
                },
              ],
              [
                {
                  img: "",
                  width: "full",
                  length: "96",
                  flexBasis: "2/3",
                },
                {
                  img: "",
                  width: "full",
                  length: "96",
                  flexBasis: "2/3",
                },
                {
                  img: "",
                  width: "full",
                  length: "96",
                  flexBasis: "1/3",
                },
              ],
              [
                {
                  img: "",
                  width: "full",
                  length: "96",
                  flexBasis: "1/3",
                },
                {
                  img: "",
                  width: "full",
                  length: "96",
                  flexBasis: "2/3",
                },
              ],
            ]}
          />
      </div>
    </>
  );
};

export default Portfolio;

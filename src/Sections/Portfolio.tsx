import BentoBox from "@/Global/BentoBox";
import Header from "@/Global/Header";

const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="w-full min-h-screen flex flex-col relative"
      >
        <Header header="Portfolio" />

        <div  className="px-2 py-16">
          <div className="">
            <h2 className="text-2xl font-bold px-8">Documentary</h2>
          </div>

          <div>
            <BentoBox
              bentoWidth="full"
              rows={[
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "2/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "1/3",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "1/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "2/3",
                  },
                ],
              ]}
            />
          </div>
        </div>

        <div  className="px-2 py-16">
          <h2 className="text-2xl font-bold text-right px-8">Patagonia x Story mfg</h2>

          <div>
            <BentoBox
              bentoWidth="full"
              rows={[
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "2/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "1/3",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "1/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "2/3",
                  },
                ],
              ]}
            />
          </div>
        </div>

        <div className="px-2 py-16">
          <h2 className="text-2xl font-bold px-8">Devine Feminine</h2>

          <div>
            <BentoBox
              bentoWidth="full"
              rows={[
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "2/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "1/3",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "",
                  },
                ],
                [
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "1/3",
                  },
                  {
                    img: "",
                    width: "full",
                    length: "52",
                    flexBasis: "2/3",
                  },
                ],
              ]}
            />
          </div>
        </div>
        <div className="px-2 py-16">
        <h2 className="text-2xl font-bold capitalize text-right px-8">Womxn</h2>

          <div>
          <BentoBox
            bentoWidth="full"
            rows={[
              [
                {
                  img: "",
                  width: "full",
                  length: "52",
                  flexBasis: "2/3",
                },
                {
                  img: "",
                  width: "full",
                  length: "52",
                  flexBasis: "1/3",
                },
              ],
              [
                {
                  img: "",
                  width: "full",
                  length: "52",
                  flexBasis: "",
                },
                
              ],
              [
                {
                  img: "",
                  width: "full",
                  length: "52",
                  flexBasis: "1/3",
                },
                {
                  img: "",
                  width: "full",
                  length: "52",
                  flexBasis: "2/3",
                },
              ],
            ]}
          />
          </div>
      </div>
      </div>
    </>
  );
};

export default Portfolio;

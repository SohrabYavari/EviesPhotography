import { Separator } from "@/components/ui/separator";

interface Props {
  header?: string;
  description?: JSX.Element;
  image?: string;
  imageBasis?: string;
  length?: string
}

const CardComp = ({ header, description, image, imageBasis, length }: Props) => {
  return (
    <>
      <div className="w-full justify-center">
        <div className="flex-1">
          <h2 className="text-3xl">{header}</h2>
          <Separator />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className={`p-2 basis-${imageBasis}`}>
            <figure>
              <img
                src={image}
                alt=""
                className={`w-full h-${length} bg-slate-500`}
              />
            </figure>
          </div>

          <div className="my-auto">
            <p className="md:px-8 md:py-2 px-2 py-2">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComp;
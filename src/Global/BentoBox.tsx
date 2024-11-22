import Image from "./Image";

interface ImageProps {
  img: string;
  width: string;
  length: string;
  flexBasis: string;
}

interface Props {
  rows: ImageProps[][];
  bentoWidth: string;
}

const BentoBox = ({ rows, bentoWidth }: Props) => {
  return (
    <div className={`w-${bentoWidth} flex flex-col gap-2`}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="md:w-3/4 w-full flex justify-center mx-auto px-2 gap-2"
        >
          {row.map((imageProps, colIndex) => (
            <Image
              key={colIndex}
              img={imageProps.img}
              width={imageProps.width}
              length={imageProps.length}
              flexBasis={imageProps.flexBasis}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BentoBox;

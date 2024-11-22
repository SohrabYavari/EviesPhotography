interface Props {
  img: string;
  width: string;
  length: string;
  flexBasis: string;
}

const Image = ({ width, length, flexBasis, img }: Props) => {
  return (
    <>
      <>
        <img
          src={img}
          alt=""
          className={`flex w-${width} h-${length} basis-${flexBasis} bg-slate-500 hover:scale-105 ease-in-out duration-300`}
          loading="lazy"
        />
      </>
    </>
  );
};

export default Image;

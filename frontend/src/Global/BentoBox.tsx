const BentoBox = () => {
  // const classes = [
  //   {one: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {two: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {three: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {four: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {five: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {six: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {seven: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {eight: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  //   {nine: 'w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500'},
  // ]
  return (
    <>
      <div className="w-screen flex flex-col gap-2 bg-[#222] h-1/3 z-0">
          <div className="md:w-3/4 flex justify-center mx-auto px-2 gap-2 ">
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500"
            />
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-3/3 hover:scale-105 ease-in-out duration-500"
            />
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500"
            />
          </div>
          <div className="md:w-3/4 flex justify-center mx-auto px-2 gap-2">
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-3/3 hover:scale-105 ease-in-out duration-500"
            />
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500"
            />
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500"
            />
          </div>
          <div className="md:w-3/4 flex justify-center mx-auto px-2 gap-2">
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-1/3 hover:scale-105 ease-in-out duration-500"
            />
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-2/3 hover:scale-105 ease-in-out duration-500"
            />
            <img
              src=""
              alt=""
              className="w-full h-40 bg-slate-300 basis-3/3 hover:scale-105 ease-in-out duration-500"
            />
          </div>
        </div>
    </>
  );
};

// interface ImageProps {
//   className: string;
//   image: string;
// }

// const Image = ({className, image}: ImageProps) => {
//   return (
//     <img src={image} alt="photo" className={className} />
//   )
// }

export default BentoBox;

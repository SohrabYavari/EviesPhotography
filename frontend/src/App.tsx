function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="bg-slate-500 pb-3 shadow-2xl my-5 mr-96 cursor-pointer">
          <h1 className="flex mx-auto text-center justify-center uppercase font-bold tracking-widest text-8xl">
            Authors
          </h1>
        </div>
        <div className="bg-slate-500 shadow-2xl pb-3 my-5 cursor-pointer">
          <h1 className="flex mx-auto text-center justify-center uppercase font-bold tracking-widest text-8xl">
            Poems
          </h1>
        </div>
        <div className="bg-slate-500 shadow-2xl pb-3 my-5 ml-96 cursor-pointer">
          <h1 className="flex mx-auto text-center justify-center uppercase font-bold tracking-widest text-8xl">
            Music
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;

interface Props {
    header: string
}

const Emphasis = () => {
  return (
    <>
      <div>
        <div>
            <h2>{header}</h2>
        </div>
      </div>
    </>
  );
};

export default Emphasis;

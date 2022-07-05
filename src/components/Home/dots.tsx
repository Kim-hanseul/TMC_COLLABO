const Dot = ({ num, scrollIndex }) => {
  return (
    <div
      style={{
        width: 25,
        height: 25,
        border: "4px solid white",
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? "white" : "transparent",
        transitionDuration: 1000,
        transition: "background-color 0.7s",
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }) => {
  return (
    <div style={{ position: "fixed", top: "80%", right: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 130,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;
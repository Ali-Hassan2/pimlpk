interface boxType {
  image: string;
  Logo: any;
  text: string;
}

interface boxprops {
  boxinfo: boxType;
}

const Boxes = ({ boxinfo }: boxprops) => {
  return (
    <div style={{ width: "100%" }}>
      <img
        src={boxinfo.image}
        alt="service"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          height: "80px",
          padding: "0 20px",
          gap: "0px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <div>{boxinfo.Logo}</div>
        <p
          style={{
            fontSize: "1rem",
            fontFamily: "Mulish",
            margin: 0,
            color: "#333",
            marginLeft: "15px",
          }}
        >
          {boxinfo.text}
        </p>
      </div>
    </div>
  );
};

export default Boxes;

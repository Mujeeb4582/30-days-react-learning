const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const hexaStyles = {
    lineHeight: "60px",
    textAlign: "center",
    marginTop: "20px",
  };
  return (
    <>
      <div style={hexaStyles}>
        <div
          style={{
            backgroundColor: hexaColor(),
            marginTop: "3px",
            borderRadius: "3px",
          }}
        >
          {hexaColor()}
        </div>
        <div
          style={{
            backgroundColor: hexaColor(),
            marginTop: "3px",
            borderRadius: "3px",
          }}
        >
          {hexaColor()}
        </div>
        <div
          style={{
            backgroundColor: hexaColor(),
            marginTop: "3px",
            borderRadius: "3px",
          }}
        >
          {hexaColor()}
        </div>
        <div
          style={{
            backgroundColor: hexaColor(),
            marginTop: "3px",
            borderRadius: "3px",
          }}
        >
          {hexaColor()}
        </div>
        <div
          style={{
            backgroundColor: hexaColor(),
            marginTop: "3px",
            borderRadius: "3px",
          }}
        >
          {hexaColor()}
        </div>
        <div
          style={{
            backgroundColor: hexaColor(),
            marginTop: "3px",
            borderRadius: "3px",
          }}
        >
          {hexaColor()}
        </div>
      </div>
    </>
  );
};
export default HexaColor;

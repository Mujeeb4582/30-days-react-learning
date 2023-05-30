const HexaColor = ({hexaColor}) => {
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

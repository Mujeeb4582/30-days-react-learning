const HexaColor = ({ hexaColor }) => {
  const hexaStyles = {
    lineHeight: '60px',
    textAlign: 'center',
    marginTop: '20px',
  };

  const renderColors = () => {
    const colorElements = [];
    for (let i = 0; i < 6; i++) {
      const color = hexaColor();
      colorElements.push(
        <div key={i}
        style={{
          backgroundColor: color,
            marginTop: '3px',
            borderRadius: '3px',
        }}>
          {color}
        </div>
      )
    }
    return colorElements;
  }
  return <div style={hexaStyles}>{renderColors()}</div>
};

export default HexaColor;
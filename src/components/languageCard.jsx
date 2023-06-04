const cardStyles = {
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  gap: "2rem",
};

const imageWrapper = {
  margin: "20px",
};

const imageStyle = {
  width: "100%",
};

const LanguageCard = ({ logohtml, logocss, logojs, logoreact }) => {
  return (
    <>
      <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
        Front End Technologies
      </h3>
      <div style={cardStyles}>
        <div style={imageWrapper}>
          <img style={{ width: "66.5%" }} src={logohtml} alt="Html" />
        </div>
        <div style={imageWrapper}>
          <img style={{ width: "80%" }} src={logocss} alt="CSS" />
        </div>
        <div style={imageWrapper}>
          <img style={imageStyle} src={logojs} alt="JavaScript" />
        </div>
        <div style={imageWrapper}>
          <img style={imageStyle} src={logoreact} alt="React" />
        </div>
      </div>
    </>
  );
};

export default LanguageCard;

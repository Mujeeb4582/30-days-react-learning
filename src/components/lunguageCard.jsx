import logohtml from "../images/html_logo.png";
import logocss from "../images/css_logo.png";
import logojs from "../images/js_logo.png";
import logoreact from "../images/react_logo.png";

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

const LanguageCard = () => {
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

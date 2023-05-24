const SubscribeForm = () => {
  const inputStyles = {
    padding: "10px 10px",
    borderRadius: "5px",
    marginRight: "10px",
    border: "none",
  };

  const buttonStyles = {
    padding: "10px 120px",
    background: "rgb(250, 100, 100)",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
  };

  return (
    <div>
      <div className="form-wrapper">
        <h2>SUBCRIBE</h2>
        <p>Sign up with your email address to receive news and updates.</p>
        <form action="">
          <div>
            <input
              style={inputStyles}
              type="text"
              placeholder="First Name"
              required
            />
            <input
              style={inputStyles}
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              style={inputStyles}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <button style={buttonStyles} type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;

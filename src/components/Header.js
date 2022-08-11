function Header(props) {
  const headerStyle = {
    background: props.bgColor,
    color: props.textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedBack UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;

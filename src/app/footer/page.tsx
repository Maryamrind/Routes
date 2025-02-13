export default function Footer() {
    return (
      <div>
        <h1>Footer</h1>
        <a href="/" style={linkStyle}>Home Page</a>
      </div>
    );
  }
  const linkStyle = {
    margin: "10px",
    border: "2px black solid",
    borderRadius: "10px",
    padding: "10px",
    display: "inline-block",
    textDecoration: "none",
    color: "black",
  };
  
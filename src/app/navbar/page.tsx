import Link from "next/link";

export default function Navbar() {
    return (
      <div>
        <h1>Navbar</h1>
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
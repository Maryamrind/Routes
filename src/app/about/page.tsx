export default function About() {
    return (
      <div>
        <h1>About</h1>
        <a href="/" style={linkStyle}>Home Page</a>
        <a href="/profile" style={linkStyle}>Profile</a>
       
  
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
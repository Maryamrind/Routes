import Link from "next/link";
export default function About() {
    return (
      <div>
        <h1>About</h1>
        <Link href="/" style={linkStyle}>Home Page</Link>
       <Link href="/profile" style={linkStyle}>Profile</Link>
  
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
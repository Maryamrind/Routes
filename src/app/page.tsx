
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <u><h1>Home Page</h1></u>  

      <u><h2>Linking by Anchor Tag</h2></u>
      <a href="/about" style={linkStyle}>About</a>
      <a href="/contact" style={linkStyle}>Contact</a>
      <a href="/navbar" style={linkStyle}>Navbar</a>
      <a href="/footer" style={linkStyle}>Footer</a>

      <u><h2>Link by Link Components</h2></u>
      <Link href="/about" style={linkStyle}>About</Link>
      <Link href="/contact" style={linkStyle}>Contact</Link>
      <Link href="/navbar" style={linkStyle}>Navbar</Link>
      <Link href="/footer"style={linkStyle}>Footer</Link>
    </div>
  );
}

// Define a reusable style object
const linkStyle = {
  margin: "10px",
  border: "2px black solid",
  borderRadius: "10px",
  padding: "10px",
  display: "inline-block",
  textDecoration: "none",
  color: "black",
};
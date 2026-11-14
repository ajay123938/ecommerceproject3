import Link from "next/link";
import type { CSSProperties } from "react";

const header: CSSProperties = {
  background: "#ffffff",
  borderBottom: "1px solid #e3e6ee",
};

const nav: CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  padding: "16px 20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
};

const logo: CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "#000000",
  textDecoration: "none",
};

const links: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "28px",
  margin: 0,
  padding: 0,
  listStyle: "none",
};

const linkItem: CSSProperties = {
  color: "#000000",
  textDecoration: "none",
  fontWeight: 500,
};

export default function Navbar() {
  return (
    <header style={header}>
      <nav style={nav} aria-label="Main">
        <Link href="/" style={logo}>
          Ecommerce Platform
        </Link>

        <ul style={links}>
          <li>
            <Link href="/" style={linkItem}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/product" style={linkItem}>
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
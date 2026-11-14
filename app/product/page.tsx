import Link from "next/link";
import type { CSSProperties } from "react";
import { products } from "../data/products";

const wrapper: CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  padding: "32px 20px 64px",
  fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  color: "#1d2145",
};

const heading: CSSProperties = {
  fontSize: "2rem",
  margin: "0 0 8px",
};

const subheading: CSSProperties = {
  margin: "0 0 32px",
  color: "#5b6080",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "24px",
};

const card: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  background: "#ffffff",
  border: "1px solid #e3e6ee",
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 4px 14px rgba(29, 33, 69, 0.08)",
  textDecoration: "none",
  color: "inherit",
};

const info: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  padding: "16px",
  flexGrow: 1,
};

export default function ProductsPage() {
  return (
    <main style={wrapper}>
      <h1 style={heading}>Our products</h1>
      <p style={subheading}>
        {products.length} items for every day. Click a card to see details.
      </p>

      <div style={grid}>
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} style={card}>
            {/* Image area */}
            <div
              style={{
                position: "relative",
                height: "190px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
                background: p.color,
              }}
            >
              {p.icon}
              {p.tag && (
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#1d2145",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  {p.tag}
                </span>
              )}
            </div>

            {/* Details */}
            <div style={info}>
              <span style={{ fontSize: "0.8rem", color: "#5b6080" }}>
                {p.category}
              </span>
              <h2 style={{ fontSize: "1.1rem", margin: 0 }}>{p.name}</h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  color: "#5b6080",
                  flexGrow: 1,
                }}
              >
                {p.description}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "12px",
                }}
              >
                <strong style={{ fontSize: "1.3rem" }}>${p.price}</strong>
                <span style={{ fontSize: "0.9rem" }}>★ {p.rating}</span>
              </div>

              <div
                style={{
                  marginTop: "12px",
                  textAlign: "center",
                  padding: "10px 0",
                  borderRadius: "999px",
                  background: "#ffb627",
                  color: "#1d2145",
                  fontWeight: 600,
                }}
              >
                View details
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
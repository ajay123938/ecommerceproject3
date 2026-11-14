import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { products } from "../../data/products";

// 1. Equivalent to getStaticPaths / static generation for App Router
export async function generateStaticParams() {
  return products.map((product) => ({
    diffProduct: String(product.id),
  }));
}

const wrapper: CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  padding: "28px 20px 64px",
  fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  color: "#1d2145",
};

const backLink: CSSProperties = {
  display: "inline-block",
  marginBottom: "20px",
  color: "#1d2145",
  fontWeight: 500,
  textDecoration: "none",
};

const layout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px",
  alignItems: "start",
};

const imagePanel: CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "420px",
  fontSize: "10rem",
  borderRadius: "24px",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ diffProduct: string }>;
}) {
  const { diffProduct } = await params;
  const product = products.find((p) => p.id === Number(diffProduct));

  // 2. Equivalent to returning { notFound: true } in getStaticProps
  if (!product) {
    notFound();
  }

  return (
    <main style={wrapper}>
      <Link href="/product" style={backLink}>
        Back to products
      </Link>

      <div style={layout}>
        {/* Left: image */}
        <div style={imagePanel}>
          {product.icon}
          {product.tag && (
            <span
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "#1d2145",
                color: "#ffffff",
                fontSize: "0.8rem",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: "999px",
              }}
            >
              {product.tag}
            </span>
          )}
        </div>

        {/* Right: details */}
        <div>
          <span style={{ fontSize: "0.9rem", color: "#5b6080" }}>
            {product.category}
          </span>
          <h1 style={{ fontSize: "2.2rem", margin: "4px 0 10px" }}>
            {product.name}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontWeight: 600 }}>★ {product.rating}</span>
            <span style={{ color: "#5b6080", fontSize: "0.9rem" }}>
              128 reviews
            </span>
            <span style={{ color: "#2e7d4f", fontSize: "0.9rem", fontWeight: 600 }}>
              In stock
            </span>
          </div>

          <p style={{ fontSize: "2rem", fontWeight: 700, margin: "16px 0 8px" }}>
            ${product.price}
          </p>

          <p style={{ margin: 0, lineHeight: 1.7, color: "#4a4f70", maxWidth: "52ch" }}>
            A soft, everyday cotton tee that works with jeans, shorts, or a
            jacket on top. The fabric is breathable and gets softer with every
            wash, so it stays comfortable all day.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
        <button
          style={{
            flex: 1,
            minWidth: "160px",
            padding: "14px 24px",
            border: "none",
            borderRadius: "999px",
            background: "#ffb627",
            color: "#1d2145",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Add to cart
        </button>
        <button
          style={{
            flex: 1,
            minWidth: "160px",
            padding: "14px 24px",
            border: "2px solid #1d2145",
            borderRadius: "999px",
            background: "transparent",
            color: "#1d2145",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Buy now
        </button>
      </div>
    </main>
  );
}
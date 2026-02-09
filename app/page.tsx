import React from "react";

export default async function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* اسم الدومين */}
        <h1 style={styles.domainName}>imagenfly.com</h1>
        
        {/* شارة الحالة */}
        <div style={styles.badge}>هذا الدومين معروض للبيع</div>
        
        <h2 style={styles.subHeading}>
          هل تبحث عن اسم مميز لمشروعك القادم؟
        </h2>
        
        <p style={styles.description}>
          نطاق <strong>Haramfly</strong> متاح الآن للاستحواذ. يمكنك التواصل معنا مباشرة عبر إنستجرام لتقديم عرضك.
        </p>

        {/* زر التواصل */}
        <a 
          href="https://instagram.com/mu7amm.ad" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.instagramBtn}
        >
          <span>تواصل معنا عبر Instagram</span>
        </a>

        <div style={styles.footer}>
          © 2026 جميع الحقوق محفوظة
        </div>
      </div>
    </div>
  );
}

// التنسيقات (Styles)
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    color: "#ffffff",
    fontFamily: "sans-serif",
    direction: "rtl",
  },
  container: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "24px",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    maxWidth: "500px",
    width: "90%",
  },
  domainName: {
    fontSize: "3.5rem",
    fontWeight: "800",
    margin: "0 0 10px 0",
    background: "linear-gradient(to right, #4ade80, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "20px",
    backgroundColor: "#ef4444",
    fontSize: "0.85rem",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  subHeading: {
    fontSize: "1.5rem",
    fontWeight: "400",
    marginBottom: "20px",
    color: "#e2e8f0",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#94a3b8",
    marginBottom: "40px",
  },
  instagramBtn: {
    display: "block",
    padding: "15px 25px",
    borderRadius: "12px",
    background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    transition: "transform 0.2s",
  },
  footer: {
    marginTop: "30px",
    fontSize: "0.75rem",
    color: "#475569",
  }
};
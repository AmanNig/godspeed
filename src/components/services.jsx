import React from "react";

export const Services = (props) => {
  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#f7f9fc",
      fontFamily: "Segoe UI, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    },
    title: {
      fontSize: "3.6rem",
      color: "#222",
      fontWeight: "700",
      marginBottom: "40px",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      padding: "30px 20px",
      maxWidth: "320px",
      flex: "1 1 280px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    icon: {
      fontSize: "4.8rem",
      color: "white",
      marginBottom: "16px",
    },
    name: {
      fontSize: "1.8rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "10px",
    },
    text: {
      fontSize: "1.8rem",
      color: "#555",
      lineHeight: "1.6",
    },
  };

  return (
    <div id="services" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Products</h2>
        <div style={styles.grid}>
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                }}
              >
                <i className={d.icon} style={styles.icon}></i>
                <div className="service-desc">
                  <h3 style={styles.name}>{d.name}</h3>
                  <p style={styles.text}>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

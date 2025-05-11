import React, { useEffect, useRef } from "react";

export const Pricing = (props) => {
  const pricingRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pricingRef.current.style.opacity = 1;
          pricingRef.current.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    if (pricingRef.current) observer.observe(pricingRef.current);
  }, []);

  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: "#fff",
      fontFamily: "sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
      transition: "all 0.6s ease",
      opacity: 0,
      transform: "translateY(50px)",
    },
    title: {
      marginBottom: "60px",
    },
    heading: {
      fontSize: "4.2rem", // increased from 3.4rem
      fontWeight: "800",
      color: "#222",
    },
    subheading: {
      fontSize: "2.4rem", // increased from 2rem
      color: "#444",
      marginTop: "15px",
    },
    cardsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "center",
      marginTop: "50px",
    },
    card: {
      flex: "1 1 320px",
      backgroundColor: "#f9f9f9",
      borderRadius: "20px",
      boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
      padding: "40px 25px",
      transition: "transform 0.3s ease",
    },
    planName: {
      fontSize: "2.8rem", // increased
      fontWeight: "600",
      color: "#333",
      marginBottom: "15px",
    },
    planPrice: {
      fontSize: "2.2rem", // increased
      color: "#1a73e8",
      marginBottom: "25px",
    },
    featureList: {
      listStyleType: "none",
      padding: 0,
      margin: "25px 0",
    },
    featureItem: {
      fontSize: "1.8rem", // increased
      marginBottom: "12px",
      color: "#444",
    },
    button: {
      marginTop: "25px",
      padding: "14px 30px",
      fontSize: "1.6rem",
      backgroundColor: "#1a73e8",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };

  return (
    <div id="pricing" style={styles.section}>
      <div ref={pricingRef} style={styles.container}>
        <div style={styles.title}>
          <h2 style={styles.heading}>Pricing Plans</h2>
          <p style={styles.subheading}>
            Choose a plan that fits your team’s needs and scale as you grow.
          </p>
        </div>
        <div style={styles.cardsWrapper}>
          {props.data ? (
            props.data.map((plan, i) => (
              <div
                key={`${plan.name}-${i}`}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <h3 style={styles.planName}>{plan.name}</h3>
                <h4 style={styles.planPrice}>{plan.price}</h4>
                <ul style={styles.featureList}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={styles.button}>Select Plan</button>
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

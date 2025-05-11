import React, { useEffect, useRef } from "react";

export const About = (props) => {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.style.opacity = 1;
          aboutRef.current.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
  }, []);

  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#f2f2f2",
      fontFamily: "sans-serif",
    },
    card: {
      maxWidth: "1500px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      padding: "40px",
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      alignItems: "center",
      transition: "all 0.6s ease",
      opacity: 0,
      transform: "translateY(50px)",
    },
    imageWrapper: {
      flex: "1 1 400px",
      textAlign: "center",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "12px",
      boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
    },
    textWrapper: {
      flex: "1 1 400px",
    },
    heading: {
      fontSize: "3.2rem",
      fontWeight: 700,
      marginBottom: "20px",
      color: "#333",
    },
    paragraph: {
      fontSize: "1.6rem",
      lineHeight: "1.8",
      color: "#555",
      marginBottom: "30px",
    },
    subheading: {
      fontSize: "2rem",
      fontWeight: 600,
      marginBottom: "20px",
      color: "#444",
    },
    listWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    },
    listColumn: {
      flex: "1 1 200px",
    },
    list: {
      paddingLeft: "20px",
      listStyleType: "disc",
    },
    listItem: {
      fontSize: "1.4rem",
      color: "#555",
      marginBottom: "10px",
    },
  };

  return (
    <div id="about" style={styles.section}>
      <div ref={aboutRef} style={styles.card}>
        <div style={styles.imageWrapper}>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1743795024265/0d7f2d86-e782-4ef3-8c0a-70fcdef40a46.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            alt="About"
            style={styles.image}
          />
        </div>
        <div style={styles.textWrapper}>
          <h2 style={styles.heading}>About Us</h2>
          <p style={styles.paragraph}>
            {props.data ? props.data.paragraph : "loading..."}
          </p>
          <h3 style={styles.subheading}>Why Choose Us?</h3>
          <div style={styles.listWrapper}>
            <div style={styles.listColumn}>
              <ul style={styles.list}>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`} style={styles.listItem}>
                        {d}
                      </li>
                    ))
                  : "loading"}
              </ul>
            </div>
            <div style={styles.listColumn}>
              <ul style={styles.list}>
                {props.data
                  ? props.data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`} style={styles.listItem}>
                        {d}
                      </li>
                    ))
                  : "loading"}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

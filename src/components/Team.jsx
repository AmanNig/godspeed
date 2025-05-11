import React from "react";

export const Team = (props) => {
  const styles = {
    teamSection: {
      textAlign: "center",
      background: "#f7f7f7",
      padding: "60px 0",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "40px",
    },
    container: {
      maxWidth: "1140px",
      margin: "0 auto",
      padding: "0 15px",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "50px",
    },
    teamCardWrapper: {
      flex: "1 1 220px",
      maxWidth: "250px",
      display: "flex",
      justifyContent: "center",
    },
    card: {
      width: "100%",
      height: "250px",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "transform 0.3s ease",
    },
    image: {
      width: "150px",
      height: "150px",
      objectFit: "cover",
      borderRadius: "50%",
      marginBottom: "10px",
      border: "4px solid #fff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    captionName: {
      fontSize: "1.8rem",
      fontWeight: 600,
      marginBottom: "5px",
    },
    captionJob: {
      color: "#777",
      fontSize: "1.4rem",
      margin: 0,
    },
  };

  return (
    <div id="team" style={styles.teamSection}>
      <div style={styles.container}>
        <div style={styles.sectionTitle}>
          <h2>Meet the Team</h2>
        </div>
        <div style={styles.row}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} style={styles.teamCardWrapper}>
                  <div
                    style={styles.card}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "none")
                    }
                  >
                    <img src={d.img} alt={d.name} style={styles.image} />
                    <div className="caption">
                      <h4 style={styles.captionName}>{d.name}</h4>
                      <p style={styles.captionJob}>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

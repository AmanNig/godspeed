import React from "react";

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "9999",
        background: "linear-gradient(to right, #abb4bc 0%, #5ca9fb 100%)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Shaded box effect
        borderRadius: "10px", // Curvy navbar
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{
              border: "none",
              backgroundColor: "transparent",
              padding: "10px",
              transition: "all 0.3s ease",
            }}
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              className="icon-bar"
              style={{
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            ></span>
            <span
              className="icon-bar"
              style={{
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            ></span>
            <span
              className="icon-bar"
              style={{
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            ></span>
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              textDecoration: "none",
              fontSize: "2rem",
              fontWeight: "bold",
              transition: "color 0.3s ease",
            }}
          >
            <img
              src="https://godspeed.systems/docs/img/Gs-logo.png"
              alt="Logo"
              style={{
                height: "60px",
                borderRadius:"50%",
                marginRight: "10px",
                transition: "transform 0.3s ease",
              }}
            />
            GodSpeed
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              listStyleType: "none",
              display: "flex",
              gap: "20px",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a
                href="#about"
                className="page-scroll"
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "black")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "black")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="page-scroll"
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "black")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "black")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "black")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

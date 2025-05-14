import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
    console.log( name, email, message )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      style={{
        padding: "80px 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#eef2f7",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "space-between",
          }}
        >
          {/* Contact Info Card */}
          <div
            style={{
              flex: "1 1 40%",
              backgroundColor: "#ffffff",
              padding: "32px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={"https://cdn.hashnode.com/res/hashnode/image/upload/v1733232951760/3ee1f6fa-405f-4aab-a0f9-38ed57f505f4.jpeg?w=400&h=210&fit=crop&crop=entropy&auto=compress,format&format=webp"}
              alt="Contact"
              style={{
                width: "100%",
                maxHeight: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "24px"
              }}
            />
            <h3 style={{ fontSize: "2.4rem", marginBottom: "24px", color: "#333" }}>Contact Info</h3>
            <p style={{ fontSize: "1.6rem", marginBottom: "16px", color: "black" }}>
              <i className="fa fa-map-marker" style={{ marginRight: "12px", color: "#555" }}></i>
              {props.data ? props.data.address : "Loading..."}
            </p>
            <p style={{ fontSize: "1.6rem", marginBottom: "16px", color: "black" }}>
              <i className="fa fa-phone" style={{ marginRight: "12px", color: "#555" }}></i>
              {props.data ? props.data.phone : "Loading..."}
            </p>
            <p style={{ fontSize: "1.6rem", marginBottom: "16px", color: "black" }}>
              <i className="fa fa-envelope-o" style={{ marginRight: "12px", color: "#555" }}></i>
              {props.data ? props.data.email : "Loading..."}
            </p>
          </div>

          {/* Contact Form Card */}
          <div
            style={{
              flex: "1 1 55%",
              backgroundColor: "#ffffff",
              padding: "32px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: "3rem", marginBottom: "16px", color: "#1a1a1a" }}>Get In Touch</h2>
            <p style={{ fontSize: "1.6rem", color: "#666", marginBottom: "32px" }}>
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  style={{
                    flex: 1,
                    padding: "14px",
                    fontSize: "1.6rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                  style={{
                    flex: 1,
                    padding: "14px",
                    fontSize: "1.6rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "1.6rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    resize: "vertical",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  padding: "14px 28px",
                  fontSize: "1.6rem",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              <a href={props.data?.github || "#"} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" style={{ fontSize: "2.6rem", color: "#333" }}></i>
              </a>
            </li>
            <li>
              <a href={props.data?.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" style={{ fontSize: "2.6rem", color: "#0077b5" }}></i>
              </a>
            </li>
            <li>
              <a href={props.data?.twitter || "#"} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" style={{ fontSize: "2.6rem", color: "#1da1f2" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

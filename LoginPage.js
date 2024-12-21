import React from "react";

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/login"; // Redirect to backend login endpoint
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Google Integration Portal</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;

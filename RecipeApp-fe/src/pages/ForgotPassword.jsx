import { useState } from "react";
import { forgotPassword } from "../api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    try {
      const res = await forgotPassword(email);
      setMsg(res.data.message || "Reset link sent to your email");
    } catch (err) {
      setError(err.response?.data?.message || "User not found");
    }
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3 className="text-center">Forgot Password</h3>

      {msg && <div className="alert alert-success">{msg}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={submitHandler}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn btn-primary w-100">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
import { useState } from "react";
import api from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/forgot-password", { email });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "User not found");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>
      <p>{msg}</p>

      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Email"
          onChange={e => setEmail(e.target.value)} />

        <button className="btn btn-warning">Send Reset Link</button>
      </form>
    </div>
  );
}

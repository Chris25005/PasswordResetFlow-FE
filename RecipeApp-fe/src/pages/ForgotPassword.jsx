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
    } catch {
      setMsg("User not found");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Forgot Password</h2>
      <p>{msg}</p>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button>Send Reset Link</button>
    </form>
  );
}

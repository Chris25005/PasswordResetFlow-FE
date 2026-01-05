import { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/login", form);
      setMsg("Login successful");
    } catch {
      setMsg("Login failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <p>{msg}</p>

      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})} />

      <button>Login</button>
      <Link to="/forgot-password">Forgot Password?</Link>
    </form>
  );
}

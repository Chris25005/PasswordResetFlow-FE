import { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      setMsg(res.data.message);
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <p className="text-danger">{msg}</p>

      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <input className="form-control mb-2" type="password" placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })} />

        <button className="btn btn-success">Login</button>
      </form>

      <div className="mt-3">
        <Link to="/forgot-password">Forgot Password?</Link><br />
        <Link to="/register">Create Account</Link>
      </div>
    </div>
  );
}

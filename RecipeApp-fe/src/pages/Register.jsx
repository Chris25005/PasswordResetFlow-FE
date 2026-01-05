import { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <p className="text-success">{msg}</p>

      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <input className="form-control mb-2" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <input className="form-control mb-2" type="password" placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })} />

        <button className="btn btn-primary">Register</button>
      </form>

      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

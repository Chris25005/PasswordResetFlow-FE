import { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      setMsg("Registered successfully. Please login.");
    } catch {
      setMsg("Register failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <p>{msg}</p>

      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})} />

      <button>Register</button>
      <Link to="/login">Already have an account?</Link>
    </form>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/auth/reset-password/${token}`, { password });
      setMsg(res.data.message);
      setTimeout(() => navigate("/success"), 1000);
    } catch {
      setMsg("Invalid or expired link");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <p>{msg}</p>

      <form onSubmit={submit}>
        <input className="form-control mb-2" type="password"
          placeholder="New Password"
          onChange={e => setPassword(e.target.value)} />

        <button className="btn btn-primary">Reset Password</button>
      </form>
    </div>
  );
}

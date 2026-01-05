import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/auth/reset-password/${token}`, { password });
      setMsg(res.data.message);
    } catch {
      setMsg("Invalid or expired link");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Reset Password</h2>
      <p>{msg}</p>

      <input type="password" placeholder="New password" onChange={e => setPassword(e.target.value)} />
      <button>Reset</button>
    </form>
  );
}

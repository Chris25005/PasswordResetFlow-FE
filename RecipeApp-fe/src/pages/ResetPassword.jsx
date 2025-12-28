import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../api";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await resetPassword(token, password);
      navigate("/success");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired link");
    }
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3 className="text-center">Reset Password</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={submitHandler}>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-success w-100">
          Update Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;

function Login() {
  return (
    <div className="page">
      <h1>Login</h1>

      <div className="login-box">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
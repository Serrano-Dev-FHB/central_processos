import { useEffect, useState } from "react"
import { getCookie, setCookie } from "../utils/cookies";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(() => {
    const token = getCookie("TOKEN_AUTH");
    if(token) window.location.href = '/home';
  })

  const loginSubmit = async (e) => {
    e.preventDefault();
    const autenticacao = { "email": email, "password": password };
    const response     = await fetch("/api/login",{ method: "POST", body: JSON.stringify(autenticacao) });
    const person       = await response.json();

    setCookie("TOKEN_AUTH","Bearer " + person.token, process.env.expired);
    window.location.href = "/home";
  }

  return (
    <form onSubmit={loginSubmit}>
      <label>Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>Senha
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Login" />
    </form>
  )
}

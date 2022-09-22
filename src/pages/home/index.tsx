import { useEffect } from "react"
import { getCookie } from "../../utils/cookies";

export default function Home({ children, ...pageProps }) {
    useEffect(() => {
        const fetchData = async () => {
            const token = getCookie("TOKEN_AUTH");
            if(!token) { window.location.href = '/';  return false; };
            const response = await fetch("/api/login/status",{ method: "POST", headers: {"Authorization": token}});
            const person = await response.json();
            if(!person.status) { window.location.href = '/';  return false; };
        }; fetchData();
    }, [])

    return (
        <>{children}</>
    )
}

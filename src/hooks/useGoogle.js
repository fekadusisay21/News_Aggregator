import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export function useGoogle() {
  const { setLogged, setUser,registerUser } = useAuth();

  function handleCallbackResponse(response) {
    const userInfo = jwtDecode(response.credential);
    jwtDecode(response.credential);
    localStorage.setItem("accessToken", response.credential);
    localStorage.setItem("refreshToken", response.credential);
    localStorage.setItem("user", userInfo.name);
    setLogged(true);
    setUser(userInfo.name);
    registerUser({
        username: userInfo.given_name ?? userInfo.name,
        firstname: userInfo.given_name ?? userInfo.name,
        lastname: userInfo.family_name ?? '',
        password: userInfo.sub,
        email: userInfo.email,
      });
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "467113535498-lv29ik7707602cm0gm3lhft09pdbt6q6.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
}

import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export function useGoogleLogin() {
  const { logUser } = useAuth();

  function handleCallbackResponse(response) {
    const userInfo = jwtDecode(response.credential);
    jwtDecode(response.credential);
    logUser({
        username: userInfo.given_name,
        password: userInfo.sub
    });
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "467113535498-lv29ik7707602cm0gm3lhft09pdbt6q6.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("LogInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

}

import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";



export function useGoogle(){
    const {setLogged,setUser} = useAuth();

    function handleCallbackResponse(response) {
        const userInfo = (jwtDecode(response.credential))  
        console.log(userInfo)
        jwtDecode(response.credential);
        localStorage.setItem("accessToken", response.credential);
        localStorage.setItem("refreshToken", response.credential);
        localStorage.setItem("user", userInfo.name); 
        setLogged(true);
        setUser(userInfo.name);
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

//   {
//     iss: 'https://accounts.google.com',
//     azp: '467113535498-lv29ik7707602cm0gm3lhft09pdbt6q6.apps.googleusercontent.com',
//     aud: '467113535498-lv29ik7707602cm0gm3lhft09pdbt6q6.apps.googleusercontent.com',
//     sub: '107478636876135514556',
//     email: 'fekadusisay07@gmail.com',
//     email_verified: true,
//     nbf: 1709557227,
//     name: 'Fekadu',
//     picture: 
//       'https://lh3.googleusercontent.com/a/ACg8ocLJDNC5qAoWXUPWncL19e2DDot5XUtUZBUw3DNBqHrK=s96-c',
//     given_name: 'Fekadu',
//     locale: 'en',
//     iat: 1709557527,
//     exp: 1709561127,
//     jti: 'e3c8b3a21d9baf4f422d6a36b239e7c896a8e543'
//   }
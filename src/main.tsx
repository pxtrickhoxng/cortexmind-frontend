import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-ihmvg5prywwmdade.us.auth0.com"
    clientId="NseJkEvMy7OEOktfLgqdXO2wdZsRBYjg"
    authorizationParams={{
      redirect_uri: "http://localhost:5173",
    }}
  >
    <App />
  </Auth0Provider>
);

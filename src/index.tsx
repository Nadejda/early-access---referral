import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Referral } from "./screens/Referral";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Referral />
  </StrictMode>,
);

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Encuc } from "./pages/Encuc";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="encuc" element={<Encuc />} />
    </Routes>
  );
}

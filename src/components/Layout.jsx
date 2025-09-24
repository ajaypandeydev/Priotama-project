import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="page-container">
        <Outlet /> {/* renders the child page */}
      </main>
      <Footer/>
    </div>
  );
}

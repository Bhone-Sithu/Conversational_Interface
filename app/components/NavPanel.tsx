import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import Button from "@mui/material/Button";

function NavPanel() {
  return (
    <div className="flex flex-col gap-10 bg-primary text-white h-screen p-5">
      <h1 className="text-3xl">SalesMind AI</h1>
      <section id="app-section">
        <h2>Apps</h2>
        <Button
          startIcon={<TuneIcon fontSize="medium" className="text-white" />}
        >
          <p className="text-white">Dashboard</p>
        </Button>
      </section>
    </div>
  );
}

export default NavPanel;

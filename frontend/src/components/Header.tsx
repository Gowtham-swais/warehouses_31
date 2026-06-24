"use client";

type HeaderProps = {
  setIsOpen: (open: boolean) => void;
};

export default function Header({ setIsOpen }: HeaderProps) {
  return (
    <header className="header">
      <button className="menu-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      <div>
        <h1 className="header-title">
          Digital Twin Simulation Dashboard
        </h1>

        <p className="header-caption">
          Real-time warehouse monitoring, predictive analytics,
          operational simulations, and KPI performance tracking.
        </p>
      </div>
    </header>
  );
}

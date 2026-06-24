"use client";

type SidebarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const menuItems = [
  { key: "dashboard", label: "Dashboard" },
  { key: "challenges", label: "Challenges" },
  { key: "dataSources", label: "Data Sources" },
  { key: "predictions", label: "AI Predictions" },
  { key: "simulations", label: "Simulations" },
  { key: "kpi", label: "KPI Metrics" },
];

export default function Sidebar({
  activePage,
  setActivePage,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      <div className="sidebar-header">
        <h1 className="sidebar-main-title">
          SWAIS-VANIJYA
        </h1>

        <h2 className="sidebar-sub-title">
          SWAIS DEMO Warehouse
        </h2>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setActivePage(item.key);

              // Auto-close sidebar on mobile
              if (window.innerWidth <= 768) {
                setIsOpen(false);
              }
            }}
            className={`sidebar-button ${
              activePage === item.key ? "active" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

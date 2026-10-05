import { useState } from "react";

type MenuLeaf = {
  label: string;
  target: string;
};

type ModuleItem = {
  label: string;
  icon: string;
  target: string;
  submenu?: MenuLeaf[];
};

const moduleRows: ModuleItem[] = [
  { label: "Administration", icon: "▣", target: "about", submenu: [{ label: "About Me", target: "about" }] },
  { label: "Financials", icon: "◫", target: "capabilities", submenu: [{ label: "Experience", target: "capabilities" }] },
  { label: "CRM", icon: "◬", target: "contact", submenu: [{ label: "Clients / Testimonials", target: "contact" }] },
  { label: "Opportunities", icon: "◭", target: "work", submenu: [{ label: "Case Studies", target: "work" }] },
  { label: "Sales - A/R", icon: "▤", target: "work", submenu: [{ label: "Projects (Order-to-Cash)", target: "work" }] },
  { label: "Purchasing - A/P", icon: "▥", target: "work", submenu: [{ label: "Projects (Procure-to-Pay)", target: "work" }] },
  { label: "Business Partners", icon: "◫", target: "contact", submenu: [{ label: "Clients", target: "contact" }] },
  { label: "Banking", icon: "◍", target: "contact", submenu: [{ label: "Certifications", target: "contact" }] },
  { label: "Inventory", icon: "▦", target: "capabilities", submenu: [{ label: "Skills (MM/WM)", target: "capabilities" }] },
  { label: "Resources", icon: "◨", target: "contact", submenu: [{ label: "Tools & Tech", target: "contact" }] },
  { label: "Production", icon: "▧", target: "work", submenu: [{ label: "Implementations", target: "work" }] },
  { label: "MRP", icon: "◴", target: "capabilities", submenu: [{ label: "Methodologies", target: "capabilities" }] },
  { label: "Service", icon: "▩", target: "contact", submenu: [{ label: "Support Experience", target: "contact" }] },
  { label: "Human Resources", icon: "◰", target: "contact", submenu: [{ label: "Contact", target: "contact" }] },
  { label: "Reports", icon: "▭", target: "contact", submenu: [{ label: "Resume / Downloads", target: "contact" }] },
];

export function ModulesMenu({ onSelect }: { onSelect: (target: string) => void }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {moduleRows.map((row, index) => (
        <div key={row.label} style={{ position: "relative" }}>
          <button
            type="button"
            className="sap-menu-item"
            role="menuitem"
            data-active={activeIndex === index}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => {
              if (row.submenu && row.submenu.length > 0) {
                setActiveIndex((current) => (current === index ? null : index));
              } else {
                onSelect(row.target);
              }
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
              <span aria-hidden="true" style={{ width: 16, display: "inline-block", textAlign: "center" }}>{row.icon}</span>
              <span>
                <u>{row.label[0]}</u>
                {row.label.slice(1)}
              </span>
            </span>
            {row.submenu && row.submenu.length > 0 ? <span aria-hidden="true">▸</span> : null}
          </button>

          {row.submenu && row.submenu.length > 0 ? (
            <div className="sap-submenu" hidden={activeIndex !== index} role="menu" aria-label={`${row.label} submenu`}>
              {row.submenu.map((sub) => (
                <button
                  key={sub.label}
                  type="button"
                  className="sap-menu-item"
                  role="menuitem"
                  onClick={() => onSelect(sub.target)}
                >
                  <span>
                    <u>{sub.label[0]}</u>
                    {sub.label.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

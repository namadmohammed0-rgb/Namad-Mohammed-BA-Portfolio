import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MenuDefinition = {
  label: string;
  access: string;
  items: { label: string; target: string; submenu?: { label: string; target: string }[] }[];
};

const menuDefinitions: MenuDefinition[] = [
  {
    label: "File",
    access: "f",
    items: [
      { label: "New", target: "about" },
      { label: "Open", target: "work" },
      { label: "Save", target: "contact" },
    ],
  },
  {
    label: "Edit",
    access: "e",
    items: [
      { label: "Copy", target: "about" },
      { label: "Paste", target: "work" },
      { label: "Find", target: "contact" },
    ],
  },
  {
    label: "View",
    access: "v",
    items: [
      { label: "Overview", target: "about" },
      { label: "Projects", target: "work" },
      { label: "Contact", target: "contact" },
    ],
  },
  {
    label: "Data",
    access: "d",
    items: [
      { label: "Reports", target: "contact" },
      { label: "Experience", target: "capabilities" },
    ],
  },
  {
    label: "Go To",
    access: "g",
    items: [
      { label: "About Me", target: "about" },
      { label: "Projects", target: "work" },
      { label: "Contact", target: "contact" },
    ],
  },
  {
    label: "Modules",
    access: "m",
    items: [],
  },
  {
    label: "Tools",
    access: "t",
    items: [
      { label: "Print", target: "work" },
      { label: "Download Resume", target: "contact" },
    ],
  },
  {
    label: "Window",
    access: "w",
    items: [
      { label: "Arrange", target: "about" },
      { label: "Cascade", target: "work" },
    ],
  },
  {
    label: "Help",
    access: "h",
    items: [
      { label: "About", target: "about" },
      { label: "Support", target: "contact" },
    ],
  },
];

export function MenuBar() {
  const [openMenu, setOpenMenu] = useState<string | null>("Modules");
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const letter = event.key.toLowerCase();
      const matchingMenu = menuDefinitions.find((menu) => menu.access === letter);

      if (event.altKey && matchingMenu) {
        event.preventDefault();
        setOpenMenu(matchingMenu.label);
        const target = menuRefs.current[matchingMenu.label]?.querySelector<HTMLElement>("[role='menuitem']");
        target?.focus();
        return;
      }

      if (!openMenu) return;

      const panel = menuRefs.current[openMenu];
      if (!panel) return;

      const items = Array.from(panel.querySelectorAll<HTMLElement>("[role='menuitem']"));
      if (items.length === 0) return;

      const currentIndex = items.indexOf(document.activeElement as HTMLElement);

      if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % items.length : 0;
        items[nextIndex]?.focus();
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        const nextIndex = currentIndex >= 0 ? (currentIndex - 1 + items.length) % items.length : items.length - 1;
        items[nextIndex]?.focus();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        setOpenMenu(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  const handleSelect = (target: string) => {
    setOpenMenu(null);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const hash = target.startsWith("#") ? target : `#${target}`;
    window.location.hash = hash;
  };

  return (
    <div className="sap-menubar" role="menubar" aria-label="Application menu">
      {menuDefinitions.map((menu) => (
        <div
          key={menu.label}
          className="sap-menu-wrap"
          onMouseEnter={() => setOpenMenu(menu.label)}
          onMouseLeave={() => setOpenMenu((current) => (current === menu.label ? null : current))}
        >
          <button
            type="button"
            className="sap-menu-button"
            aria-haspopup="menu"
            aria-expanded={openMenu === menu.label}
            onClick={() => setOpenMenu((current) => (current === menu.label ? null : menu.label))}
          >
            <span>
              <u>{menu.access}</u>
              {menu.label.slice(1)}
            </span>
            {menu.items.length > 0 ? <ChevronDown size={12} /> : null}
          </button>

          {menu.label === "Modules" ? (
            <div className="sap-menu-panel" role="menu" hidden={openMenu !== menu.label} ref={(node) => { menuRefs.current[menu.label] = node; }}>
              <ModulesMenu onSelect={handleSelect} />
            </div>
          ) : (
            <div className="sap-menu-panel" role="menu" hidden={openMenu !== menu.label} ref={(node) => { menuRefs.current[menu.label] = node; }}>
              {menu.items.map((item) => (
                <button
                  key={`${menu.label}-${item.label}`}
                  type="button"
                  role="menuitem"
                  className="sap-menu-item"
                  onClick={() => handleSelect(item.target)}
                >
                  <span>
                    <u>{item.label[0]}</u>
                    {item.label.slice(1)}
                  </span>
                  <span aria-hidden="true">»</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

type ModuleRow = {
  label: string;
  target: string;
  icon: string;
  submenu?: { label: string; target: string }[];
};

const moduleRows: ModuleRow[] = [
  { label: "Administration", target: "about", icon: "▣" },
  { label: "Financials", target: "experience", icon: "◫" },
  { label: "CRM", target: "contact", icon: "◬" },
  { label: "Opportunities", target: "work", icon: "◭" },
  { label: "Sales - A/R", target: "work", icon: "▤" },
  { label: "Purchasing - A/P", target: "work", icon: "▥" },
  { label: "Business Partners", target: "contact", icon: "◫" },
  { label: "Banking", target: "contact", icon: "◍" },
  { label: "Inventory", target: "capabilities", icon: "▦" },
  { label: "Resources", target: "contact", icon: "◨" },
  { label: "Production", target: "work", icon: "▧" },
  { label: "MRP", target: "capabilities", icon: "◴" },
  { label: "Service", target: "contact", icon: "▩" },
  { label: "Human Resources", target: "contact", icon: "◰" },
  { label: "Reports", target: "contact", icon: "▭" },
];

function ModulesMenu({ onSelect }: { onSelect: (target: string) => void }) {
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
            onClick={() => onSelect(row.target)}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
              <span aria-hidden="true" style={{ width: 16, display: "inline-block", textAlign: "center" }}>{row.icon}</span>
              <span>
                <u>{row.label[0]}</u>
                {row.label.slice(1)}
              </span>
            </span>
            <span aria-hidden="true">▸</span>
          </button>

          {row.submenu?.length ? (
            <div className="sap-submenu" hidden={activeIndex !== index} role="menu">
              {row.submenu.map((sub) => (
                <button key={sub.label} type="button" className="sap-menu-item" role="menuitem" onClick={() => onSelect(sub.target)}>
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

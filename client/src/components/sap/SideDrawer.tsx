import { BriefcaseBusiness, Contact, FileText, FolderOpen, Grid2x2, Mail, User } from "lucide-react";

const drawerItems = [
  { label: "Portfolio", icon: FolderOpen },
  { label: "Experience", icon: BriefcaseBusiness },
  { label: "Projects", icon: FileText },
  { label: "Skills", icon: Grid2x2 },
  { label: "Contact", icon: Mail },
  { label: "Profile", icon: User },
];

export function SideDrawer({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <aside className="sap-side-drawer" hidden={!open} aria-label="Sidebar navigation">
      <div className="sap-drawer-header">
        <strong>Navigation</strong>
        <button type="button" aria-label="Close navigation" onClick={onToggle}>
          <Contact size={14} />
        </button>
      </div>
      <div className="sap-drawer-list">
        {drawerItems.map(({ label, icon: Icon }) => (
          <button key={label} type="button" className="sap-drawer-item">
            <Icon size={14} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

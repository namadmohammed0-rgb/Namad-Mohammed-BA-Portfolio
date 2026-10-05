import type { ReactNode } from "react";
import { MenuBar } from "./MenuBar";
import { SideDrawer } from "./SideDrawer";
import { StatusBar } from "./StatusBar";
import { TitleBar } from "./TitleBar";
import { Toolbar } from "./Toolbar";

export function SapShell({ children, drawerOpen, onToggleDrawer }: { children: ReactNode; drawerOpen: boolean; onToggleDrawer: () => void }) {
  return (
    <div className="sap-shell">
      <div className="sap-app-window">
        <MenuBar />
        <TitleBar />
        <Toolbar />
        <div className="sap-content-area">
          <SideDrawer open={drawerOpen} onToggle={onToggleDrawer} />
          <div className="sap-main-pane">
            <div className="sap-desktop-actions">
              <button type="button" className="sap-hamburger" aria-label="Open navigation" onClick={onToggleDrawer}>
                ☰
              </button>
            </div>
            {children}
          </div>
        </div>
        <StatusBar />
      </div>
    </div>
  );
}

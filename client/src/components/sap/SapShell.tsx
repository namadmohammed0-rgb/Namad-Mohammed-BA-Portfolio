import type { ReactNode } from "react";

export function SapShell({ children }: { children: ReactNode }) {
  return (
    <div className="sap-shell">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 28px",
          borderBottom: "1px solid #d9e1ea",
          background: "#f8fafc",
          color: "#18212d",
        }}
      >
        <div>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4d6478", marginBottom: 4 }}>
            Portfolio
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.04em" }}>Namad Mohammed</div>
        </div>

        <div style={{ textAlign: "right", fontSize: 12, lineHeight: 1.4, color: "#52657a" }}>
          <div style={{ fontWeight: 700, color: "#18212d" }}>ERP Integration &amp; Business Analyst</div>
          <div>SAP ERP • API Integration • SQL • Automation • Business Analysis</div>
        </div>
      </header>

      <div className="sap-main-pane" style={{ background: "#edf2f7" }}>
        {children}
      </div>
    </div>
  );
}

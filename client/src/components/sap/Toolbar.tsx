import { ArrowLeft, ArrowRight, Download, Filter, Printer, Share2, SortAsc } from "lucide-react";

const items = [
  { icon: ArrowLeft, disabled: true },
  { icon: ArrowRight, disabled: true },
  { icon: Filter },
  { icon: SortAsc },
  { icon: Printer },
  { icon: Download },
  { icon: Share2 },
];

export function Toolbar() {
  return (
    <div className="sap-toolbar" aria-label="Toolbar">
      {items.map(({ icon: Icon, disabled }, index) => (
        <button
          key={index}
          type="button"
          className={`sap-tool-button ${disabled ? "is-disabled" : ""}`}
          disabled={disabled}
          aria-label={disabled ? "Disabled action" : `Toolbar action ${index + 1}`}
        >
          <Icon size={15} />
        </button>
      ))}
    </div>
  );
}

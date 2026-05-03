import type { PortfolioSection } from "../../types/portfolio";

type StatusBarProps = {
  currentSection: PortfolioSection;
};

export function StatusBar({ currentSection }: StatusBarProps) {
  return (
    <div className="statusbar">
      <div className="statusbar-left">
        <span>
          <strong>NORMAL</strong>
        </span>
        <span>{currentSection.file}</span>
      </div>
      <div className="statusbar-right">
        <span>Ln 1, Col 1</span>
        <span>
          <strong>UTF-8</strong>
        </span>
        <span>portfolio.sh</span>
      </div>
    </div>
  );
}

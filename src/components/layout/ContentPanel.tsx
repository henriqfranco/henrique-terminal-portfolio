import type { RefObject } from "react";

import type { PortfolioSection, SectionKey } from "../../types/portfolio";
import { ActiveSection } from "../sections/ActiveSection";

type ContentPanelProps = {
  activeSection: SectionKey;
  contentBodyRef: RefObject<HTMLDivElement | null>;
  currentSection: PortfolioSection;
};

export function ContentPanel({
  activeSection,
  contentBodyRef,
  currentSection,
}: ContentPanelProps) {
  return (
    <main className="content-panel">
      <div className="content-topbar">
        <div className="breadcrumb">
          ~/portfolio
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">{activeSection}</span>
        </div>
        <div className="content-meta">{currentSection.meta}</div>
      </div>

      <div className="content-body" ref={contentBodyRef}>
        <ActiveSection activeSection={activeSection} />
      </div>
    </main>
  );
}

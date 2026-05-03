import { useRef, useState } from "react";

import {
  portfolioMeta,
  profile,
  sectionByKey,
  sections,
} from "../../data/portfolio";
import type { SectionKey } from "../../types/portfolio";
import { ContentPanel } from "./ContentPanel";
import { ShellLabel } from "./ShellLabel";
import { Sidebar } from "./Sidebar";
import { StatusBar } from "./StatusBar";
import { TitleBar } from "./TitleBar";

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState<SectionKey>("about");
  const contentBodyRef = useRef<HTMLDivElement>(null);
  const currentSection = sectionByKey[activeSection];

  function selectSection(sectionKey: SectionKey) {
    setActiveSection(sectionKey);
    contentBodyRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <ShellLabel />

      <div className="portfolio">
        <TitleBar />

        <div className="inner">
          <Sidebar
            activeSection={activeSection}
            lastUpdated={portfolioMeta.lastUpdated}
            onSectionSelect={selectSection}
            profile={profile}
            sections={sections}
          />

          <ContentPanel
            activeSection={activeSection}
            contentBodyRef={contentBodyRef}
            currentSection={currentSection}
          />
        </div>
      </div>

      <StatusBar currentSection={currentSection} />
    </>
  );
}

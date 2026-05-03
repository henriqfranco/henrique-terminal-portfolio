import type { ReactNode } from "react";

import type { PortfolioSection } from "../../types/portfolio";
import { CommandPrompt } from "./CommandPrompt";

type SectionFrameProps = {
  section: PortfolioSection;
  children: ReactNode;
};

export function SectionFrame({ section, children }: SectionFrameProps) {
  return (
    <section
      className="section active"
      aria-labelledby={`${section.key}-heading`}
    >
      <div className="sec-heading" id={`${section.key}-heading`}>
        {section.heading}
      </div>
      <CommandPrompt command={section.command} />
      {children}
    </section>
  );
}

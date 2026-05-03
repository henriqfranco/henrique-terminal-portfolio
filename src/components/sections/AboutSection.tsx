import { aboutInfo, aboutIntro, sectionByKey } from "../../data/portfolio";
import { SectionFrame } from "../ui/SectionFrame";

export function AboutSection() {
  return (
    <SectionFrame section={sectionByKey.about}>
      <p className="about-intro">
        {aboutIntro.map((segment, index) =>
          segment.emphasis ? (
            <em key={`${segment.text}-${index}`}>{segment.text}</em>
          ) : (
            <span key={`${segment.text}-${index}`}>{segment.text}</span>
          ),
        )}
      </p>

      <div className="info-grid">
        {aboutInfo.map((item) => (
          <div className="info-cell" key={item.label}>
            <div className="info-label">{item.label}</div>
            <div
              className={
                item.isSuccess ? "info-value info-value-success" : "info-value"
              }
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}

import { sectionByKey, skills } from "../../data/portfolio";
import { SectionFrame } from "../ui/SectionFrame";

export function SkillsSection() {
  return (
    <SectionFrame section={sectionByKey.skills}>
      {skills.map((group) => (
        <div className="skills-group" key={group.label}>
          <div className="skills-group-label">{group.label}</div>
          <div className="skills-row">
            {group.primary.map((skill) => (
              <span className="skill-chip primary" key={skill}>
                {skill}
              </span>
            ))}
            {group.secondary.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </SectionFrame>
  );
}

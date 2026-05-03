import { projects, sectionByKey } from "../../data/portfolio";
import { SectionFrame } from "../ui/SectionFrame";

export function ProjectsSection() {
  return (
    <SectionFrame section={sectionByKey.projects}>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-name">
              {project.name}
              {project.badge ? (
                <span className="project-badge">{project.badge}</span>
              ) : null}
            </div>
            {project.date || project.organization ? (
              <div className="project-meta">
                {project.date ? <span>{project.date}</span> : null}
                {project.date && project.organization ? <span>/</span> : null}
                {project.organization ? (
                  <span>{project.organization}</span>
                ) : null}
              </div>
            ) : null}
            <div className="project-desc">{project.description}</div>
            <div className="project-stack">
              {project.stack.map((tag, index) => (
                <span
                  className={index === 0 ? "tag tag-purple" : "tag"}
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}

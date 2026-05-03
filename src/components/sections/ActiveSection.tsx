import type { SectionKey } from '../../types/portfolio'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { ProjectsSection } from './ProjectsSection'
import { SkillsSection } from './SkillsSection'

type ActiveSectionProps = {
  activeSection: SectionKey
}

export function ActiveSection({ activeSection }: ActiveSectionProps) {
  switch (activeSection) {
    case 'experience':
      return <ExperienceSection />
    case 'education':
      return <EducationSection />
    case 'projects':
      return <ProjectsSection />
    case 'skills':
      return <SkillsSection />
    case 'contact':
      return <ContactSection />
    case 'about':
    default:
      return <AboutSection />
  }
}

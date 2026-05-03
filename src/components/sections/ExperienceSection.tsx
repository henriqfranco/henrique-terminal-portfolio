import { experience, sectionByKey } from '../../data/portfolio'
import { EntryList } from '../ui/EntryList'
import { SectionFrame } from '../ui/SectionFrame'

export function ExperienceSection() {
  return (
    <SectionFrame section={sectionByKey.experience}>
      <EntryList entries={experience} />
    </SectionFrame>
  )
}

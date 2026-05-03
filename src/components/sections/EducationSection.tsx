import { education, sectionByKey } from "../../data/portfolio";
import { EntryList } from "../ui/EntryList";
import { SectionFrame } from "../ui/SectionFrame";

export function EducationSection() {
  return (
    <SectionFrame section={sectionByKey.education}>
      <EntryList entries={education} />
    </SectionFrame>
  );
}

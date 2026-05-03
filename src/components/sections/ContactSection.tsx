import { contactLinks, sectionByKey } from "../../data/portfolio";
import { SectionFrame } from "../ui/SectionFrame";

export function ContactSection() {
  return (
    <SectionFrame section={sectionByKey.contact}>
      <div className="contact-list">
        {contactLinks.map((contact) => (
          <a
            className="contact-item"
            href={contact.href}
            key={contact.label}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
          >
            <span className="contact-label">{contact.label}</span>
            <span className="contact-value">{contact.value}</span>
          </a>
        ))}
      </div>
    </SectionFrame>
  );
}

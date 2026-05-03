import type { PortfolioSection, Profile, SectionKey } from '../../types/portfolio'

type SidebarProps = {
  activeSection: SectionKey
  lastUpdated: string
  onSectionSelect: (sectionKey: SectionKey) => void
  profile: Profile
  sections: PortfolioSection[]
}

export function Sidebar({
  activeSection,
  lastUpdated,
  onSectionSelect,
  profile,
  sections,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="photo-area">
        <div className="photo-frame">
          {profile.photoUrl ? (
            <img src={profile.photoUrl} alt={profile.name} />
          ) : (
            <div className="photo-placeholder">
              <div className="photo-placeholder-icon">▣</div>
              <div className="photo-placeholder-text">PHOTO</div>
            </div>
          )}
        </div>

        <div className="dev-name">{profile.name}</div>
        <div className="dev-title">{profile.title}</div>

        <div className="status-line">
          <div className="status-dot" />
          {profile.availability}
        </div>
      </div>

      <nav className="nav" aria-label="Portfolio sections">
        <div className="nav-section-label">NAVIGATE</div>

        {sections.map((section, index) => {
          const isActive = section.key === activeSection

          return (
            <button
              aria-current={isActive ? 'page' : undefined}
              className={isActive ? 'nav-item active' : 'nav-item'}
              key={section.key}
              onClick={() => onSectionSelect(section.key)}
              type="button"
            >
              <span className="nav-prefix">{String(index + 1).padStart(2, '0')}</span>
              {section.label}
              <span className="nav-arrow" aria-hidden="true">
                ›
              </span>
            </button>
          )
        })}
      </nav>

      <div className="sidebar-footer">LAST UPDATED: {lastUpdated}</div>
    </aside>
  )
}

import type { Entry } from '../../types/portfolio'

type EntryListProps = {
  entries: Entry[]
}

export function EntryList({ entries }: EntryListProps) {
  return (
    <>
      {entries.map((entry) => (
        <article className="entry" key={`${entry.title}-${entry.organization}`}>
          <div className="entry-header">
            <div className="entry-title">{entry.title}</div>
            <div className="entry-date">{entry.date}</div>
          </div>
          <div className="entry-org">{entry.organization}</div>
          <ul className="entry-desc">
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  )
}

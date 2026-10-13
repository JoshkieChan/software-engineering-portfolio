import { useState } from 'react'
import type { ProjectScreenshot } from '../content'
import { Arrow } from './Icons'

export function ProjectGallery({
  name,
  id,
  screenshots,
}: {
  name: string
  id: string
  screenshots: ProjectScreenshot[]
}) {
  const [selected, setSelected] = useState(0)
  const screenshot = screenshots[selected]
  return (
    <div className={`project-gallery ${id}-gallery`}>
      <p className="gallery-eyebrow">
        APPLICATION SCREENS{' '}
        <span>
          {String(selected + 1).padStart(2, '0')} /{' '}
          {String(screenshots.length).padStart(2, '0')}
        </span>
      </p>
      <figure className="gallery-figure" id={`${id}-screen`}>
        <a
          href={screenshot.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${name} ${screenshot.label} screenshot at full size`}
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            loading="lazy"
            decoding="async"
          />
        </a>
        <figcaption aria-live="polite">
          {screenshot.label}{' '}
          <span>
            View full size <Arrow diagonal />
          </span>
        </figcaption>
      </figure>
      <div
        className="gallery-controls"
        role="group"
        aria-label={`${name} screenshots`}
      >
        {screenshots.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={selected === index}
            aria-controls={`${id}-screen`}
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="gallery-caption">
        {id === 'signal'
          ? 'Real application screens · synthetic booking data'
          : id === 'founder'
            ? 'Web application screens · synthetic test data'
            : 'Application demo · fictional fixture data'}
      </p>
    </div>
  )
}

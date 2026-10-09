import type { Project } from '../content'
import { Arrow } from './Icons'
import { Architecture } from './Architecture'

export function ProjectCard({ project }: { project: Project }) {
  const url = `https://github.com/JoshkieChan/${project.repository}`
  return (
    <article
      className={`project-card ${project.id === 'signal' ? 'flagship' : ''}`}
      aria-labelledby={`${project.id}-title`}
    >
      <Architecture kind={project.id} />
      <div className="project-body">
        <div className="project-eyebrow">
          <span>
            {project.number} / {project.category}
          </span>
          {project.id === 'signal' && (
            <span className="featured-tag">Featured project</span>
          )}
        </div>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <span aria-hidden="true">↳</span>
              {highlight}
            </li>
          ))}
        </ul>
        <ul className="tags" aria-label={`${project.name} technology stack`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <details className="engineering-notes">
          <summary>
            Engineering notes{' '}
            <span className="details-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="notes-content">
            <h4>The challenge</h4>
            <p>{project.challenge}</p>
            <h4>The implementation</h4>
            <p>{project.solution}</p>
            <p className="project-status">
              <strong>Project scope.</strong> {project.status}
            </p>
            <a
              className="text-link"
              href={`${url}/blob/main/${project.sourcePath}`}
              target="_blank"
              rel="noreferrer"
            >
              Explore the implementation <Arrow diagonal />
            </a>
          </div>
        </details>
        <a
          className="repo-link"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.name} on GitHub`}
        >
          View repository <Arrow diagonal />
        </a>
      </div>
    </article>
  )
}

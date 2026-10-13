import Image from "next/image";
import { Icon } from "@/components/Icon";
import type { Project } from "@/lib/site";

export function ProjectPreview({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (!project.image) {
    // This is an editorial presentation, never a fabricated platform screenshot.
    // Replace it with an actual capture once the original asset becomes available.
    return (
      <div className={`project-editorial accent-${project.accent}`}>
        <span className="eyebrow">{project.country} / Plataforma digital</span>
        <strong>
          Uma ponte entre
          <br />
          quem precisa
          <br />
          <span>e quem faz.</span>
        </strong>
        <div className="editorial-project">
          <span>{project.title}</span>
          <Icon name="external" />
        </div>
        <span className="editorial-domain">{project.domain}</span>
      </div>
    );
  }
  return (
    <div className={`project-device accent-${project.accent}`}>
      <div className="device-toolbar">
        <span className="device-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{project.domain}</span>
        <Icon name="external" width={12} height={12} />
      </div>
      <div className="device-screen">
        <Image
          src={project.image}
          alt={`Captura real da página pública do ${project.title}`}
          fill
          priority={priority}
          sizes="(max-width: 767px) 90vw, (max-width: 1099px) 75vw, 45vw"
          className="project-screenshot"
        />
      </div>
    </div>
  );
}

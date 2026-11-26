import { translator } from "@/lib/i18n/copy";
import type { Locale } from "@/lib/i18n/routes";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import type { Project } from "@/lib/site";

export function ProjectPreview({ locale,
  project,
  priority = false,
}: { locale: Locale;
  project: Project;
  priority?: boolean;
}) {
  const t = translator(locale);
  if (!project.image) {
    // This is an editorial presentation, never a fabricated platform screenshot.
    // Replace it with an actual capture once the original asset becomes available.
    return (
      <div className={`project-editorial accent-${project.accent}`}>
        <span className="eyebrow">{t(project.country)} {t("/ Plataforma digital")}</span>
        <strong>{t("Uma ponte entre")}<br />{t("quem precisa")}<br />
          <span>{t("e quem faz.")}</span>
        </strong>
        <div className="editorial-project">
          <span>{t(project.title)}</span>
          <Icon name="external" />
        </div>
        <span className="editorial-domain">{t(project.domain)}</span>
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
        <span>{t(project.domain)}</span>
        <Icon name="external" width={12} height={12} />
      </div>
      <div className="device-screen">
        <Image
          src={project.image}
          alt={t("Captura real da página pública do {0}", [project.title])}
          fill
          priority={priority}
          sizes="(max-width: 767px) 90vw, (max-width: 1099px) 75vw, 45vw"
          className="project-screenshot"
        />
      </div>
    </div>
  );
}

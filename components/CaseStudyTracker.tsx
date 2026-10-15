"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/analytics";

export function CaseStudyTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackConversion("case_study_view", { project: slug });
  }, [slug]);
  return null;
}
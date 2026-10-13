import type { SVGProps } from "react";

const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  external: "M8 5H5v14h14v-3M12 5h7v7M19 5 9 15",
  globe:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18Z",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
  system: "M4 4h16v12H4V4Zm4 16h8m-4-4v4M8 8h3m-3 4h8",
  workflow:
    "M3 3h6v6H3V3Zm12 12h6v6h-6v-6ZM9 6h6a3 3 0 0 1 3 3v6M6 9v6a3 3 0 0 0 3 3h6",
  compass: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15 9l-2 4-4 2 2-4 4-2Z",
  pencil: "m14 5 5 5M4 20l4-1L20 7l-4-4L4 15v5Z",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18",
  grow: "M4 20V10m8 10V4m8 16v-6M3 7l6-4 5 4 7-5",
  check: "m5 12 4 4L19 6",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M18 6 6 18",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  back: "M19 12H5m6-6-6 6 6 6",
};
export type IconName = keyof typeof paths;

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}

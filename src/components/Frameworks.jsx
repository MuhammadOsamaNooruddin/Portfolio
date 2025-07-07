import { IconCloud } from "./OrbitingCircles";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "redux",
  "tailwindcss",
  "sass",
  "jest",
  "git",
  "webpack",
  "graphql",
  "npm",
  "jira",
  "github",
  "vscode",
  "figma",
  "mui",
];

export function Frameworks() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

import {
  SiAutodesk,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const CareerData = [
  {
    time: "2011/04 - 2013/04",
    company: "地元の設計会社",
    summary: "社内にて設計業務に従事。",
  },
  {
    time: "2013/04 - 2022/12",
    company: "某大手重工業",
    summary:
      "某大手重工業に出向。3D-CADを駆使し、油圧ショベルの燃料タンク周りを設計。その後、原子力プラントの電気計装関連の設計に従事。",
  },
  {
    time: "2033/02 - ",
    company: "PPFパートナーズ",
    summary:
      "IT業界に転向。現在はSharePointをよく触っています。",
  },
];

export const SkillData = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "tailwindcss", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vercel", icon: SiVercel },
  { name: "Github", icon: SiGithub },
  { name: "AutoCad", icon: SiAutodesk },
];

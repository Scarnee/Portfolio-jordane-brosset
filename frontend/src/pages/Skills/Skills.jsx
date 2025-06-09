import "./Skills.scss";
import {
  pageTransition,
  pageVariants,
  pageStyle,
} from "../../utils/transition_variants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const frontendSkills = [
    { icon: "fa-solid fa-code", label: "HTML, CSS" },
    { icon: "fa-brands fa-sass", label: "SASS" },
    { icon: "fa-brands fa-react", label: "ReactJS" },
    {
      icon: "fa-solid fa-down-left-and-up-right-to-center",
      label: "Responsive Design",
    },
  ];

  const backendSkills = [
    { icon: "fa-brands fa-node", label: "NodeJS" },
    { icon: "fa-solid fa-database", label: "MongoDB" },
    { icon: "fa-solid fa-network-wired", label: "REST APIs" },
  ];

  const devOpsSkills = [
    { icon: "fa-brands fa-docker", label: "Docker" },
    { icon: "fa-brands fa-aws", label: "AWS" },
    { icon: "fa-brands fa-microsoft", label: "Microsoft Azure" },
    { icon: "fa-solid fa-cloud-arrow-up", label: "Terraform" },
    { icon: "fa-solid fa-gears", label: "Kubernetes" },
    { icon: "fa-solid fa-magnifying-glass-chart", label: "Dynatrace" },
  ];

  const ciCdSkills = [
    { icon: "fa-brands fa-github", label: "GitHub Actions" },
    { icon: "fa-brands fa-gitlab", label: "GitLab CI" },
    { icon: "fa-solid fa-wand-magic-sparkles", label: "Ansible" },
    { icon: "fa-brands fa-python", label: "Python Scripting" },
    { icon: "fa-solid fa-terminal", label: "PowerShell Scripting" },
  ];

  const softSkills = [
    { icon: "fa-solid fa-lightbulb", label: t("problemSolving") },
    { icon: "fa-solid fa-clock", label: t("productivity") },
    { icon: "fa-solid fa-shuffle", label: t("adaptability") },
    { icon: "fa-solid fa-language", label: t("trilingual") },
    { icon: "fa-solid fa-people-group", label: t("teamwork") },
    { icon: "fa-solid fa-book-open", label: t("continuousLearning") },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div className="skill" key={index}>
        <i className={skill.icon}></i>
        <p>{skill.label}</p>
      </div>
    ));

  return (
    <motion.div
      className="mainSkills"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="topSkills">
        <div className="section">
          <h2>Frontend</h2>
          <div className="iconList">{renderSkills(frontendSkills)}</div>
        </div>

        <div className="section">
          <h2>Backend</h2>
          <div className="iconList">{renderSkills(backendSkills)}</div>
        </div>

        <div className="section">
          <h2>DevOps & Cloud</h2>
          <div className="iconList">{renderSkills(devOpsSkills)}</div>
        </div>

        <div className="section">
          <h2>CI/CD & Automation</h2>
          <div className="iconList">{renderSkills(ciCdSkills)}</div>
        </div>

        <div className="section">
          <h2>{t("softSkills")}</h2>
          <ul className="softSkillsList">
            {softSkills.map((skill, index) => (
              <li key={index}>
                <i className={skill.icon}></i> {skill.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section bottomSkills">
        <p>{t("downloadCV")}</p>
        <a target="_blank" href="static/CV_Jordane_BROSSET.pdf">
          <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </motion.div>
  );
}

import "./Projects.scss";
import { pageTransition } from "../../utils/transition_variants.js";
import { pageVariants } from "../../utils/transition_variants.js";
import { pageStyle } from "../../utils/transition_variants.js";
import { motion } from "framer-motion";
import ProjectCard from "../../components/projectCard/ProjectCard.jsx";
import { GetData } from "../../utils/GetData.jsx";

export default function Projects() {
  const { data } = GetData("/projects.json");
  return (
    <motion.div
      className="mainProjects"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {data.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          imageURL={project.imageURL}
          URL={project.URL}
          key={project.id}
          tags={project.tags}
          description={project.description}
        />
      ))}
    </motion.div>
  );
}

import "./Skills.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();
    return (
        <motion.div className="mainSkills" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="topSkills">
                <div className="codingSkills">
                    <h1>Coding Skills</h1>
                    <div className="iconList">
                        <div className="skill">
                            <i className="fa-brands fa-html5 "></i>
                            <p>HTML</p>
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-sass"></i>
                            <p>SASS</p>
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-js"></i>
                            <p>Javascript</p>
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-node"></i>
                            <p>Node</p>
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-react"></i>
                            <p>React</p>
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-github"></i>
                            <p>GitHub</p>
                        </div>

                        <div className="skill">
                            <i className="fa-solid fa-database"></i>
                            <p>MongoDB</p>
                        </div>
                        <div className="skill">
                            <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
                            <p>Responsive design</p>
                        </div>
                    </div>
                </div>

                <div className="softSkills">
                    <h1>{t("softSkills")}</h1>
                    <h2>{t("problemSolving")}</h2>
                    <h2>{t("productivity")}</h2>
                    <h2>{t("adaptability")}</h2>
                    <h2>{t("trilingual")}</h2>
                </div>
            </div>
            <div className="bottomSkills">
                <p>{t("downloadCV")}</p>
                <a target="_blank" href={"static/CV_Jordane_BROSSET.pdf"}>
                    <i className="fa-solid fa-download"></i>
                </a>
            </div>
        </motion.div>
    );
}

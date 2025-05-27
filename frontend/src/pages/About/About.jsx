import "./About.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <motion.div className="mainAbout" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <img src={"/static/img/coding_character.webp"} alt="otherPic"></img>
            <div className="textAbout">
                <h1>{t("firstAbout")}</h1>
                <h1 className="aboutName">Jordane Brosset</h1>
                <h2>{t("secondAbout")}</h2>
                {/*<h2>{t("thirdAbout")}</h2>*/}
                <h2>{t("fourthAbout")}</h2>
                <h2>{t("fifthAbout")}</h2>
            </div>
        </motion.div>
    );
}

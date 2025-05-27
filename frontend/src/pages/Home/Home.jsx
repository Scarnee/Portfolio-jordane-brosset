import "./Home.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function Home() {
    const {t} = useTranslation()
    return (
        <motion.div className="mainHome" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="homeContent">
                <div className="homeDescription">
                    <h1>Jordane Brosset</h1>
                    <h2>{t("title")}</h2>
                </div>
                <img src={"static/img/profilePicture.webp"} alt="Profile Picture" className="profilePicture"></img>
            </div>
        </motion.div>
    );
}

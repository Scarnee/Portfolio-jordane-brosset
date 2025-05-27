import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function NavBar() {
    const { t } = useTranslation();
    return (
        <nav>
            <NavLink to="/about" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                {t("about")}
            </NavLink>
            <NavLink to="/skills" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                {t("skills")}
            </NavLink>
            <NavLink to="/projects" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                {t("projects")}
            </NavLink>
            <NavLink to="/contact" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                {t("contact")}
            </NavLink>
        </nav>
    );
}

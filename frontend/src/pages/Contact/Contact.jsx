import "./Contact.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser'


export default function Contact() {
    const { t } = useTranslation();
    const sendEmail =(e) => {
        e.preventDefault()
        emailjs.sendForm('service_bnsb7yj' ,'template_md14ud8', e.target, 'PxrPg-OEI5V4KHmfE')
        .then ((res) => {
            alert('Message Sent !')
            console.log(res.text)
        }),(error) => {
            console.log(error.text)
        }
    }
    return (
        <motion.div className="mainContact" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <img src={"/static/img/contact.webp"} alt="imageContact"></img>

            <div className="contactRight">
                <h1>{t("contactMe")}</h1>
                <form className="contactForm" id="contactForm" method="post" onSubmit={sendEmail}>
                    <label htmlFor="name">{t("yourname")}</label>
                    <input type="text" id="name" name="name_from" placeholder="" className="" required/>
                    <label htmlFor="email">{t("youremail")}</label>
                    <input type="email" id="email" name="email_from" required/>
                    <label htmlFor="story">{t("yourmessage")}</label>
                    <textarea id="story" name="message" rows="5" cols="33" required></textarea>
                    <button type="submit" id="btnEnvoi" value='Submit'>
                        {t("contactMe")}
                    </button>
                </form>
                <div className="socials">
                    <a target="_blank" href="https://github.com/Scarnee">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/jordanebrosset">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

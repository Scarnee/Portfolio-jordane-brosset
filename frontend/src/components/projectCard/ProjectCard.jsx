import "./ProjectCard.scss";
import { Link } from "react-router-dom";


export default function ProjectCard({ id, title, URL, tags, imageURL, description }) {
    return (
        <div className="card">
            <img src={imageURL} alt={`${title}_${id}`}></img>
            <div className="cardContent">
                <h2 className="cardTitle">{title}</h2>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                <h3 className="cardDescription">{description}</h3>
                <Link to={URL} id={id} target="_blank" className="gitLink"><button className="btnGit">Source Code</button></Link>
            </div>
        </div>
    );
}

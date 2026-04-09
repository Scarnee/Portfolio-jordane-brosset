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
                <Link to={URL} id={id} target="_blank" rel="noopener noreferrer" className="gitLink">
                    <button className="btnGit">
                        Source Code
                        <svg className="externalIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
}

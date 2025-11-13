import { Link } from 'react-router-dom';


export const CTA = ({ content, className, pulse, droplets, link }) => {
  const pulseClass = pulse || "circle-layer";
  const dropClass = droplets || "";

  return (
    <section className={`cta-banner ${className || ""}`}>
      <div className="cta-content">
        <h2>{content.title}</h2>
        <p>{content.description}</p>

        <div className="cta-buttons">
         <Link to={link || "/"} className="primary-btn">
            {content.button}
          </Link>
        </div>
      </div>

      <div className="cta-graphic">
        <div className={`${pulseClass} ${dropClass} circle-1`}></div>
        <div className={`${pulseClass} ${dropClass} circle-2`}></div>
        <div className={`${pulseClass} ${dropClass} circle-3`}></div>
        <div className={`${pulseClass} ${dropClass} circle-4`}></div>
      </div>
    </section>
  );
};

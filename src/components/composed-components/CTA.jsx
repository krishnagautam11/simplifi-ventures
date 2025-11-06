export const CTA = ({ content, className, pulse, droplets }) => {
  const pulseClass = pulse || "circle-layer";
  const dropClass = droplets || "";

  return (
    <section className={`cta-banner ${className || ""}`}>
      <div className="cta-content">
        <h2>{content.title}</h2>
        <p>{content.description}</p>

        <div className="cta-buttons">
          <button className="primary-btn">{content.button}</button>
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

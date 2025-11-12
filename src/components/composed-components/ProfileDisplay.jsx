import React, { useEffect, useState } from 'react';

const ProfileDisplay = ({ member }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [displayedMember, setDisplayedMember] = useState(member);

  useEffect(() => {
    // Fade out current
    setIsVisible(false);

    // Wait for fade-out to finish (0.4s same as CSS), then swap the member
    const timeout = setTimeout(() => {
      setDisplayedMember(member);
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, [member]);

  if (!displayedMember) return null;

  return (
    <div className={`member-profile ${isVisible ? 'active' : ''}`}>
      <div className="member-info">
        <img src={displayedMember.image} alt={displayedMember.name} />
        <h3 className="small-p">{displayedMember.name}</h3>
        <p className="subtitle-p">{displayedMember.role}</p>
      </div>
      <p className="member-description">{displayedMember.description}</p>
    </div>
  );
};

export default ProfileDisplay;

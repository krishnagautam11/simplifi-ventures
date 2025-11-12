import React, { useEffect, useState } from 'react';

const TeamMember = ({ member, onSelect, isActive }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Small delay to trigger fade-in each time it re-renders
    const timeout = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timeout);
  }, [member]);

  return (
    <div
      onClick={() => onSelect(member)}
      className={`team-member ${isActive ? 'active-member' : ''} ${fadeIn ? 'fade-in' : ''}`}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{ transition: 'all 0.4s ease' }}
      />
      <p className='member-name small-p'>{member.name}</p>
      <p className='subtitle-p'>{member.role}</p>
    </div>
  );
};

export default TeamMember;

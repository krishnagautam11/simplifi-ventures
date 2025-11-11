// components/TeamMember.jsx
import React from 'react';

const TeamMember = ({ member, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(member)}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <img 
        src={member.image} 
        alt={member.name}
        
      />
      <p className='member-name small-p'>{member.name}</p>
      <p className='subtitle-p'>{member.role}</p>
     
    </div>
  );
};

export default TeamMember;

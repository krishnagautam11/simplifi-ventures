// components/ProfileDisplay.jsx
import React from 'react';

const ProfileDisplay = ({ member }) => {
    if (!member) return null;

    return (
        <div className='member-profile' >
            <div className="member-info">
                <img
                    src={member.image}
                    alt={member.name}
                 
                />
                <h3 className='small-p'>{member.name}</h3>
                <p className='subtitle-p' >{member.role}</p>
            </div>
            <p className='member-description'>{member.description}</p>
        </div>
    );
};

export default ProfileDisplay;

// components/Team.jsx
import React, { useState } from 'react';
import ProfileDisplay from './ProfileDisplay';
import TeamMember from './TeamMember';
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'
import avatar3 from '../../assets/images/avatar3.png'
import avatar4 from '../../assets/images/avatar4.png'
import avatar5 from '../../assets/images/avatar5.png'
import avatar6 from '../../assets/images/avatar6.png'

export const TeamShowing = () => {
  const members = [
    {
      name: 'Ori Sasson',
      role: 'Partner',
      image: avatar1,
      description: 'We love ideas. We spend our time thinking about problems and how we can solve them, so we’d love to hear from you. If you’re interested in fintech innovation and want to talk about it with us, get in touch!'
    },
    {
      name: 'Abrar Hussain',
      role: 'Partner',
      image: avatar2,
      description: 'Abrar focuses on building strong partnerships and driving innovation in fintech.'
    },
    {
      name: 'Sridhar Obilisetty',
      role: 'Partner',
      image: avatar3,
      description: 'Sridhar brings deep technical expertise and a passion for product strategy.'
    },
    {
      name: 'David Hahn',
      role: 'Advisor',
      image: avatar4,
      description: 'David advises on scaling and business development strategies.'
    },
    {
      name: 'Kuldip Thusu',
      role: 'Advisor',
      image: avatar5,
      description: 'Kuldip guides product innovation and strategic growth.'
    },
    {
      name: 'Keith Kan',
      role: 'Associate',
      image: avatar6,
      description: 'Keith supports research and operations, bringing creative solutions to every project.'
    }
  ];

  const [selectedMember, setSelectedMember] = useState(members[0]);

  return (
    <div className='team-cards'>
      {/* Top profile display */}
      <ProfileDisplay member={selectedMember} />

      {/* Filter out the selected member */}
      <div className='flex team-card'>
        {members
          .filter((m) => m.name !== selectedMember.name)
          .map((m) => (
            <TeamMember
              key={m.name}
              member={m}
              onSelect={setSelectedMember}
              isActive={m.name === selectedMember.name}
            />
          ))}
      </div>

    </div>
  );
};

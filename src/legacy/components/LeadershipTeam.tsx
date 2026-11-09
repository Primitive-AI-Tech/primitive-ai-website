
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedIn?: string;
  twitter?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  photoUrl,
  linkedIn,
  twitter
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 relative w-48 h-48 overflow-hidden rounded-full shadow-lg">
        <img 
          src={photoUrl} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-purple-600 font-medium mb-2">{role}</p>
      <p className="text-gray-600 mb-4">{bio}</p>
      
      {(linkedIn || twitter) && (
        <div className="flex space-x-4">
          {linkedIn && (
            <a 
              href={linkedIn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

interface LeadershipTeamProps {
  className?: string;
}

const LeadershipTeam: React.FC<LeadershipTeamProps> = ({ className }) => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Dr. Chen has over 15 years of experience in AI research and application in enterprise environments.",
      photoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Michael leads our technical strategy and innovation, with a background in machine learning and cloud architecture.",
      photoUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop",
      twitter: "https://twitter.com",
    },
    {
      name: "Jennifer Park",
      role: "VP of Product",
      bio: "Jennifer oversees our product roadmap and ensures our solutions meet the evolving needs of our clients.",
      photoUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=2670&auto=format&fit=crop",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "David Okafor",
      role: "VP of Client Success",
      bio: "David ensures our clients achieve their business goals through effective implementation of our AI solutions.",
      photoUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2670&auto=format&fit=crop",
      linkedIn: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  ];

  return (
    <div className={cn("py-12", className)}>
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  specializations: string[];
  description: string;
  image: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

// Team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Anjali Verma",
    role: "Executive Director",
    specializations: ["Rural Development", "Women Empowerment"],
    description: "Anjali has 15+ years in nonprofit leadership focused on rural development and women empowerment.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "anjali@prashraya.org"
    }
  },
  {
    id: 2,
    name: "Ravi Mehra",
    role: "Program Manager",
    specializations: ["Program Management", "Impact Assessment"],
    description: "Ravi manages key programs and ensures alignment with local needs and impact goals.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "ravi@prashraya.org"
    }
  },
  {
    id: 3,
    name: "Sneha Iyer",
    role: "Community Outreach Lead",
    specializations: ["Community Engagement", "Strategic Partnerships"],
    description: "Sneha builds strong community ties and drives long-term engagement strategies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "sneha@prashraya.org"
    }
  },
  {
    id: 4,
    name: "Amit Joshi",
    role: "Education Coordinator",
    specializations: ["Education Programs", "Volunteer Training"],
    description: "Amit develops learning programs and trains volunteers to support underserved students.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "amit@prashraya.org"
    }
  },
  {
    id: 5,
    name: "Priya Nair",
    role: "Healthcare Program Officer",
    specializations: ["Healthcare Access", "Rural Health"],
    description: "Priya runs health campaigns and works with clinics to improve rural healthcare access.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "priya@prashraya.org"
    }
  },
  {
    id: 6,
    name: "Rohan Deshmukh",
    role: "Fundraising & Partnerships Lead",
    specializations: ["Donor Relations", "Partnership Development"],
    description: "Rohan leads donor relations and builds funding collaborations with private partners.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "rohan@prashraya.org"
    }
  },
  {
    id: 7,
    name: "Kritika Sharma",
    role: "Digital Media Manager",
    specializations: ["Social Media", "Digital Storytelling"],
    description: "Kritika drives social media campaigns and digital storytelling for awareness.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "kritika@prashraya.org"
    }
  },
  {
    id: 8,
    name: "Neha Kapoor",
    role: "Volunteer Coordinator",
    specializations: ["Volunteer Management", "Training Programs"],
    description: "Neha recruits, trains, and supports volunteers for smooth program delivery.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "neha@prashraya.org"
    }
  },
  {
    id: 9,
    name: "Arjun Rao",
    role: "Financial Officer",
    specializations: ["Budget Management", "Financial Transparency"],
    description: "Arjun manages budgets, ensures transparency, and handles donor reporting.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "arjun@prashraya.org"
    }
  },
  {
    id: 10,
    name: "Divya Menon",
    role: "Legal & Compliance Head",
    specializations: ["Legal Compliance", "Policy Advisory"],
    description: "Divya ensures legal compliance, reviews contracts, and advises on policies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "divya@prashraya.org"
    }
  },
  {
    id: 11,
    name: "Siddharth Jain",
    role: "Monitoring & Evaluation Lead",
    specializations: ["Data Analysis", "Impact Measurement"],
    description: "Siddharth analyzes data and tracks key metrics to improve program impact.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "siddharth@prashraya.org"
    }
  },
  {
    id: 12,
    name: "Ishita Gupta",
    role: "Sustainability Coordinator",
    specializations: ["Environmental Sustainability", "Green Practices"],
    description: "Ishita promotes green practices and integrates sustainability across projects.",
    image: "https://images.unsplash.com/photo-1594736797933-d0d30c3b9fcb?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "ishita@prashraya.org"
    }
  },
  {
    id: 13,
    name: "Kabir Shah",
    role: "Youth Engagement Officer",
    specializations: ["Youth Mentorship", "Skill Development"],
    description: "Kabir leads skill-building and mentorship initiatives for underprivileged youth.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "kabir@prashraya.org"
    }
  }
];

// Team Member Profile Component
interface TeamMemberProfileProps {
  member: TeamMember;
  onBack: () => void;
}

const TeamMemberProfile: React.FC<TeamMemberProfileProps> = ({ member, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Team</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh]">
          {/* Left side - Specializations and name */}
          <div className="bg-gray-100 p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-8">
                {member.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium text-gray-700 uppercase tracking-wider"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight mb-2">
                {member.name.split(' ')[0]}{' '}
                <span className="text-gray-800 font-normal">
                  {member.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                {member.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-light text-gray-900 mb-2">15+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-light text-gray-900 mb-2">4.9</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Impact Rating
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 pt-6">
                <a href={member.social.facebook} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={member.social.instagram} className="text-gray-600 hover:text-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} className="text-gray-600 hover:text-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Our Team Component
const OurTeamPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleBackToTeam = () => {
    setSelectedMember(null);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 30,
        opacity: 1
      };
    } else if (absIndex === 1) {
      const translateX = diff > 0 ? '320px' : '-320px';
      return {
        transform: `translateX(${translateX}) scale(0.85)`,
        zIndex: 20,
        opacity: 0.6
      };
    } else if (absIndex === 2) {
      const translateX = diff > 0 ? '480px' : '-480px';
      return {
        transform: `translateX(${translateX}) scale(0.7)`,
        zIndex: 10,
        opacity: 0.3
      };
    } else {
      return {
        transform: 'translateX(640px) scale(0.6)',
        zIndex: 0,
        opacity: 0
      };
    }
  };

  if (selectedMember) {
    return <TeamMemberProfile member={selectedMember} onBack={handleBackToTeam} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-screen items-center">
        {/* Left side - Title and description */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl lg:text-8xl font-light text-gray-900 leading-none mb-2">
              MEET
          </h1>
            <h2 className="text-6xl lg:text-8xl font-light text-gray-400 leading-none mb-2">
              OUR
            </h2>
            <h3 className="text-6xl lg:text-8xl font-light text-gray-900 leading-none">
              TEAM
            </h3>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            When you need dedicated and effective social impact services, you can trust our team at Prashraya NGO.
          </p>
        </div>

        {/* Right side - Team member cards */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-80 h-96">
            {teamMembers.map((member, index) => (
            <div
              key={member.id}
                className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => handleMemberClick(member)}
            >
                <div className="w-80 h-96 bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                      className="w-full h-full object-cover"
                />
              </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="flex justify-center gap-2 mb-2">
                      {member.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-teal-700 uppercase tracking-wider"
                        >
                          {spec}{idx < member.specializations.length - 1 && ' • '}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-40"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-40"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Dots indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeamPage; 
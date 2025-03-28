import React from 'react'
import TM1 from './pictures/team-member-1.png'
import TM2 from './pictures/team-member-2.png'
import TM3 from './pictures/team-member-3.png'

const TeamSection = () => {
    const teamMembers = [
        {
          id: 1,
          name: 'Michael Johnson',
          role: 'Cleaning Team Lead',
          image: TM1,
        },
        {
          id: 2,
          name: 'David Rodriguez',
          role: 'Senior Cleaning Specialist',
          image: TM2,
        },
        {
          id: 3,
          name: 'Sarah Williams',
          role: 'Residential Cleaning Expert',
          image: TM3,
        },
      ];
    return (
        <div className="py-16 bg-gradient-to-b from-pick-50 to-white">
                <div className="text-center mb-16">
                    <h2 className="font-[dmSans] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[48px] md:leading-[50px] tracking-normal text-center text-gray-800 mb-[10px] ">Meet Our Team</h2>
                    <p className="font-dmSans max-w-3xl mx-auto text-gray-600 px-4">
                        Our team of trained cleaning professionals is passionate about creating cleaner, healthier living environments.
                        We treat your home with respect and attention to detail, ensuring every clean meets our high standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center group">
                            <div className="w-full max-w-xs rounded-lg overflow-hidden shadow-md relative">
                                {/* Image container with hover effect */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />

                                    {/* Text overlay with gradient background */}
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-10 px-4 pb-4 text-white">
                                        <h3 className="text-xl font-bold font-dmSans">{member.name}</h3>
                                        <p className="text-gray-200 text-sm font-dmSans">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default TeamSection
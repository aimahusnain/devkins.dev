import React from 'react'
import Image from 'next/image'

interface LeadershipTeamProps {
  image: string;
  name: string;
  position: string;
}

const LeadershipTeam: React.FC<LeadershipTeamProps> = ({ image, name, position }) => {
  return (
    <div className="flex flex-col gap-3">
      <Image
        width={280}
        height={500}
        src={image}
        className="rounded-t-xl"
        alt={`${name}'s photo`}
      />
      <div>
        <h1 className="text-2xl">{name}</h1>
        <p className="text-zinc-500">{position}</p>
      </div>
    </div>
  )
}

export default LeadershipTeam

import { FC, useEffect } from 'react';
import TechCard from './TechCard';



const Skills = ({dark}) => {




  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3 md:w-[80%] m-auto overflow-hidden" id='about'>
      <div className={`text-xl font-medium mt-2  mb-5 ${dark?"text-white":"text-black"}`}>
        What I know 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechCard
          delay={10}
          right={false}
          title="Frontend"
          classaName="bg-[#4f91f2]"
          tech={[
            
            'HTML',
            'CSS',
            'Tailwind',
            'Javascript',
            'Typescript',
            'React Js',
            'Next Js 13',
            "React-Native"
          ]}
          dark={dark}
        />
        <TechCard
        right={false}
        delay={25}
          title="Backend"
          classaName="bg-[#f37c36]"
          tech={['Node Js', 'Express Js', 'Spring boot', 'Next Auth',"Firebase","Appwrite"]}
          dark={dark}
        />
        <TechCard
        delay={40}
          right ={ true}
          title="Database"
          classaName="bg-[#e0558a]"
          tech={['MySql','GraphQl', 'PostgreSQL', 'MongoDB', 'Elastic Search']}
          dark={dark}
        />
        <TechCard
        right={true}
          delay={55}
          title="Devops"
          classaName="bg-[#10c0a2]"
          tech={[
            'Docker',
            'Kubernetes',
            'GIT',
            'AWS',
          ]}
          dark={dark}
        />
      </div>
    </div>
  );
};

export default Skills;

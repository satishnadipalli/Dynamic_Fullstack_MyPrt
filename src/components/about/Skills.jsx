import React from 'react';
// import './stels.css';
const Skills = () => {
  const skills = [
    "Java", "Kotlin", "Dart", "Flutter", 
    "Android", "iOS", "Xamarin", 
    "Reactive Programming", "Jenkins", 
    "Photoshop", "JFrog Artifactory", "Code Magic"
  ];

  return (
    <section id="skills">
      <h3>What Skill I Have</h3>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;

import React from 'react';
import './Experience.css';

function Experience() {
  const timelineData = [
    {
      date: "Jul '22 - Nov '23",
      company: 'Workato India Pvt Ltd',
      position: 'Software Development Engineer',
      description: 'Developed Ruby scripts for automation of operations across various product development applications.'
    },
    {
      date: "Jun '21 - Aug '21",
      company: 'Optum Global (UHG)',
      position: 'Software Engineer Intern',
      description: 'Built a Kafka API program in Java with SpringBoot for real-time data streaming, incorporating file handling for data processing and database storage.'
    },
    {
      date: "Aug '18 - May '22",
      company: 'SSN College of Engineering',
      position: 'B. Tech Information Technology',
      description: 'Served as Class Representative for four consecutive years, enhancing communication between students and department management.'
    },
  ];

  return (
    <div className="container py-5">
      <div className="main-timeline">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="card">
              <div className="card-body p-4">
                <h3>{item.date}</h3>
                <h4>{item.company}</h4>
                <p className="mb-0 pos">{item.position}</p>
                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

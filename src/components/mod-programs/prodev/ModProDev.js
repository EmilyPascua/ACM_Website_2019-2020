import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import workshopImage1 from './images/Conference_and_getting_interviews.png';
import workshopImage2 from './images/Behavioral.png';
import workshopImage3 from './images/CS_Roadmap.png';
import workshopImage4 from './images/How_to_manage_Finances.png';
import workshopImage5 from './images/Resume_workshop_LinkedIn.png';

const ModProDev = () => {
  const borderStyle = {
    border: '2px solid rgba(0, 153, 255, 0.4)',
    borderRadius: '8px'
  };

  return (
    <Card className="h-100" style={borderStyle}>
      <Card.Body className="px-4 pb-2">
        <Card.Title className="text-center py-2" style={{ marginTop: '-20px' }}>
          Pro Dev Workshops
        </Card.Title>

        <div 
          style={{ 
            backgroundColor: '#ffffff', 
            padding: '15px', 
            margin: '0', 
            borderRadius: '8px',
            marginBottom: '15px',
            marginTop: '-25px',
          }}>
          <p style={{ textAlign: 'center', margin: '0', color: '#333' }}>
            Our Professional Development Workshops are designed to equip you with essential skills 
            for career growth, networking, and personal advancement in the tech industry.
          </p>
        </div>
        <div className="d-flex justify-content-between px-3" style={{ marginTop: '-5px' }}>
          <img
            src={workshopImage1}
            alt="Conference and Getting Interviews"
            style={{ width: '18%', height: 'auto', ...borderStyle }} />
          <img
            src={workshopImage2}
            alt="Behavioral Workshop"
            style={{ width: '18%', height: 'auto', ...borderStyle }} />
          <img
            src={workshopImage3}
            alt="CS Roadmap"
            style={{ width: '18%', height: 'auto', ...borderStyle }} />
          <img
            src={workshopImage4}
            alt="How to Manage Finances"
            style={{ width: '18%', height: 'auto', ...borderStyle }} />
          <img
            src={workshopImage5}
            alt="Resume Workshop LinkedIn"
            style={{ width: '18%', height: 'auto', ...borderStyle }} />
        </div>
        <div className="text-center mt-3">
          <Link to="/more-info" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
            Learn more about our workshops
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ModProDev;

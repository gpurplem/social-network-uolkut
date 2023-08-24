import React from 'react';
import star from '../profile/images/Star.svg';
import smiley from '../profile/images/Smiley.svg';
import thumbsUp from '../profile/images/ThumbsUp.svg';
import heart from '../profile/images/Heart.svg';
import './user-tags.css';

const UserTags: React.FC = () => {
  return (
    <div className="user-tags-wrapper">
      <ul className='user-tags-list'>
        <li>
          <span>Fãs</span>
          <div className="user-tags__tag">
            <img src={star} alt="Fãs" /><span>85</span>
          </div>
        </li>
        <li>
          <span>Confiável</span>
          <div className="user-tags__tag">
            <img src={smiley} alt="Confiável" />
            <img src={smiley} alt="Confiável" />
          </div>
        </li>
        <li>
          <span>Legal</span>
          <div className="user-tags__tag">
            <img src={thumbsUp} alt="Legal" />
            <img src={thumbsUp} alt="Legal" />
            <img src={thumbsUp} alt="Legal" />
          </div>
        </li>
        <li>
          <span>Sexy</span>
          <div className="user-tags__tag">
            <img src={heart} alt="Sexy" />
            <img src={heart} alt="Sexy" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserTags;

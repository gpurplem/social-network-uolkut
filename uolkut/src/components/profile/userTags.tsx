import React from 'react';
import star from '../profile/images/Star.svg';
import smiley from '../profile/images/Smiley.svg';
import thumbsUp from '../profile/images/ThumbsUp.svg';
import heart from '../profile/images/Heart.svg';
import './userTags.css';

const UserTags: React.FC = () => {
  return (
    <div className="user-tags">
      <ul className='user-tags-items'>
        <li>
          <span>Fãs</span>
          <div className="tag-content">
            <img src={star} alt="Fãs" /><span>85</span>
          </div>
        </li>
        <li>
          <span>Confiável</span>
          <div className="tag-content">
            <img src={smiley} alt="Confiável" />
            <img src={smiley} alt="Confiável" />
          </div>
        </li>
        <li>
          <span>Legal</span>
          <div className="tag-content">
            <img src={thumbsUp} alt="Legal" />
            <img src={thumbsUp} alt="Legal" />
            <img src={thumbsUp} alt="Legal" />
          </div>
        </li>
        <li>
          <span>Sexy</span>
          <div className="tag-content">
            <img src={heart} alt="Sexy" />
            <img src={heart} alt="Sexy" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserTags;

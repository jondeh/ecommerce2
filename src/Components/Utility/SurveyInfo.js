import React from 'react';
import '../../SCSS/SurveyInfo.scss';

const surveyInfoData = {
  who: (
    <p>Everything we use is kid and pet friendly, and is the same stuff we use on our own homes.  If you have crawling children or pets the instructions we send you will be different, so that your kids aren't crawling through it.</p>
  ),
  home: (
    <p>The amount of product you receive for every treatment is customized to your house, so you don't pay for anymore than you need to.  </p>
  ),
  bugs: (
    <p>We preselect pests that your neighbors commonly see. </p>
  ),
  sprayer: (
    <p>Select the sprayer option.</p>
  ),
}

const SurveyInfo = ({ type }) => {
  switch (type) {
    case "who":
      break;
    case "bugs":
      break;
    case "sprayer":
      break;
  }

    return (
      <div className="survey-info-container">
        {surveyInfoData[type]}
      </div>
    );
  };

  export default SurveyInfo;
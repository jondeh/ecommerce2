import React from 'react';
import '../../SCSS/SprayerQuestion.scss';

import SprayerOption from '../Utility/SprayerOption';

const SprayerQuestion = ({ sprayerAnswer, setSprayerAnswer }) => {
    return (
        <div className="sprayer-question-container">
            <SprayerOption {...{sprayerAnswer, setSprayerAnswer, option: 0, text: "Yes! I'll use what I already have."}} />
            <SprayerOption {...{sprayerAnswer, setSprayerAnswer, option: 1, text: "Send me a disposable sprayer."}} />
            <SprayerOption {...{sprayerAnswer, setSprayerAnswer, option: 2, text: "Send me a high quality sprayer."}} />
        </div>
    )
}

export default SprayerQuestion;
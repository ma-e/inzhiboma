import React from 'react';
import ImageTitle from './ImageTitle';
import guitar from './guitar.png';
import climbing from './climbing.png';
import Fencing from './Fencing.jpeg';
import Running from './Running.jpeg';
import Writing from './Writing.jpeg';
import Piano from './Piano.jpeg';

function SportAndMusic() { 
    const guitarContent = 'Take weekly lessons and practice regularly. Perform in community concerts.';
    const guitarTitle = 'Electric Guitar';
    const guitarSubTitle = '2024 - present';

    const climbingContent = 'I enjoy climbing.';
    const climbingTitle = 'Climbing';
    const climbingSubTitle = '2024 - persent';


    const FencingContent = 'Participated in weekly group fencing lessons and attended local tournaments.';
    const FencingTitle = 'Fencing';
    const FencingSubTitle = '2022 - persent';

    const RunningContent = 'Running frequency is 3-5 days per week.';
    const RunningTitle = 'Running';
    const RunningSubTitle = '2019 - persent';

    const WritingContent = 'Daily dairy writing. Publish books monthly.';
    const WritingTitle = 'Writing';
    const WritingSubTitle = '2024 - present';

    const PianoContent = 'Take weekly lessons and practice sometimes.';
    const PianoTitle = 'Piano';
    const PianoSubTitle = '2023 - persent';


    
    return (
        <div className="home">
          <ImageTitle image={guitar} title={guitarTitle} subTitle={guitarSubTitle} content={guitarContent} />             
          <ImageTitle image={Fencing} title={FencingTitle} subTitle={FencingSubTitle} content={FencingContent} />  
          <ImageTitle image={Running} title={RunningTitle} subTitle={RunningSubTitle} content={RunningContent} />    
          <ImageTitle image={Writing} title={WritingTitle} subTitle={WritingSubTitle} content={WritingContent} />
          <ImageTitle image={Piano} title={PianoTitle} subTitle={PianoSubTitle} content={PianoContent} />     
          <ImageTitle image={climbing} title={climbingTitle} subTitle={climbingSubTitle} content={climbingContent} />      
        </div>
    );
}

export default SportAndMusic;

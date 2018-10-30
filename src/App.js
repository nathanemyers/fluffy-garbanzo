import React, { Component } from 'react';
import './App.css';
import SplitHeader from './components/SplitHeader'

const zelda = "http://images.nintendolife.com/news/2017/03/feature_what_happens_when_you_play_breath_of_the_wild_as_a_multiplayer_game/attachment/0/original.jpg"
const lttp = "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_TheLegendOfZeldaALinkToThePast_image1600w.jpg"

const ff7 = "http://the-top10list.com/wp-content/uploads/2013/12/best-final-fantasy-weapon-cloud.jpg"
const ff8 = "http://img05.deviantart.net/6050/i/2015/006/8/5/final_fantasy_viii_title_screen_remake_by_darkwarriornyx-d8cxe8v.png"
class App extends Component {

  render() {
    return (
      <div className="App">
        <SplitHeader 
          leftImage={lttp}
          leftTitle="A Link to The Past"
          leftBody="The Legend of Zelda: A Link to the Past Review - Screenshot 1 of 2
          To put it simply, The Legend of Zelda: A Link to the Past is one of the finest RPGs in existence."
          rightImage={zelda}
          rightTitle="Breath of the Wild"
          rightBody="The Legend of Zelda: Breath of the Wild is a masterclass in open-world design and a watershed game that reinvents a 30-year-old franchise."
        />

        <SplitHeader 
          leftColor="white"
          leftImage={ff7}
          leftTitle="Final Fantasy VII"
          leftBody="Final Fantasy VII, the latest output from RPG king Square, the end result justifies the delays without question. FF7 is, without a doubt, the new benchmark for console titles."
          rightColor="white"
          rightImage={ff8}
          rightTitle="Final Fantasy VIII"
          rightBody="Between the story, the beautiful graphics, music score, and the insanely enthralling card game mini-game, Final Fantasy VIII does the series proud."
        />
      </div>
    );
  }
}

export default App;

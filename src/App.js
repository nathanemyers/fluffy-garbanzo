import React, { Component } from 'react';
import './App.css';
import SplitHeader from './components/SplitHeader'

const zelda = "http://images.nintendolife.com/news/2017/03/feature_what_happens_when_you_play_breath_of_the_wild_as_a_multiplayer_game/attachment/0/original.jpg"
const mgs = "https://www.technobuffalo.com/wp-content/uploads/2015/08/Yoji-Shinkawa-Metal-Gear-Solid-art-6.jpg"

class App extends Component {

  render() {
    return (
      <div className="App">
        <SplitHeader 
          rightImage={zelda}
          rightTitle="Breath of the Wild"
          rightBody="Can anyone make sense of the timeline??"
          leftImage={mgs}
          leftTitle="Metal Gear Solid"
          leftBody="Metal Gear Solid is basically an anime, and I'm okay with that. "
        />
      </div>
    );
  }
}

export default App;

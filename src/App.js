import Cradle from "./Cradle"
import React, {useState, useEffect} from "react";

function App() {
  const [text, setText] = useState("Nobody.. Lets make a New Spinner!");

  const randText = ()=>{
    const texts = [
      'Yeeting',
    'Please hold',
    'Tweaking the PRAM',
    'Checking for firmware updates (kidding!)',
    'Looking for squirrels',
    'Hashing peanuts',
    'Geocoding responses',
    'Tripping daisies',
    'Tabulating the databases',
    'Making everything zen',
    'Encoding transmissions',
    'Revving up the hamster wheels',
    'Hey Siri, play my party mix',
    'Putting the cover sheet on the TPS report',
    'Connecting the dots for your community',
    'Giving the baby turtles a bath',
    'Frolicking in the grass',
    'Starting a diet and sticking to it this time',
    'Lighting the beacons ',
    'Deciding between chocolate or vanilla pudding',
    'It\'s all in the hips',
    'A dream is a wish your heart makes',
    'Comparing brands of frozen pizza',
    'Planting magic beans',
    'You look nice today',
    'Hold the mayo',
    'Look at this stuff.  Isn\'t it neat?',
    'Salad with croutons is cheating',
    'Simon says touch your nose',
    'Searching for narwhals',
    'Seeking success solutions',
    'Mapping your future',
    'Breeding data ',
    'Changing our gloves and masks',
    'Erupting',
    'Smashing electrons',
    'Walking towards the light',
    'Unloading loading screens',
    'Baking bread for toasters',
    'They see me loading, they waiting',
    'Time\'s up - let\'s do this',
    'Start your engines',
    'Skipping cutscenes',
    'Shuffling the deck',
    'Recombobulating discombobulators',
    'Now with scratch and sniff',
    'Looking for the power button',
    'Look behind you',
    'Is this thing on?',
    'Initiating launch sequence',
    'If you are reading this, you can read',
    'I swear it\'s around here somewhere...',
    'Get ready for a surprise!',
    'Buckle up!',
    'Reticulating splines',
    'Putting out the snacks and drinks',
    'Harvesting the tomatoes',
    'Rye bread is the best bread',
    'You are muted...',
    'Looking for a unicorn',
    'Refilling the coffee pot',
    'Rewinding the VHS tape',
    'Looking behind the green curtain',
    'Counting ballots',
    'Desperately seeking Susan',
    'In your best cheerleader voice "Ready? OK!"',
    'Deep cleansing breaths',
    'Do you deskercise?',
    'Drumroll please...',
    'What\'s behind door number 3?',
    'If Peter Piper picked a peck of pickled peppers',
    'Concatenating conditions',
    'Pressing random buttons',
    'Looking busy',
    'Scaling bananas',
    'Re-ranking our MySpace Top 8',
    ]
    let out =  texts[Math.floor(Math.random()*texts.length)]
    return out;
  }
  
  useEffect(() => {
    setInterval(() => {
      setText(randText());
    }, 6250);
  }, []);
  
  return (
    <div>
       <Cradle text={text}></Cradle>
    </div>
  );
}

export default App;

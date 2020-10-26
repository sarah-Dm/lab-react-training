import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height="1.78m"
        birth="Tue Jul 15 1992"
      />
      <IdCard
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        firstName="Obrien"
        lastName="Dolored"
        gender="female"
        height="1.72m"
        birth="Tue May 12 1993"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min="1" max="6"></Random>
      <Random min="1" max="100"></Random>
      <BoxColor r="255" g="0" b="0" fontColor="red" />
      <CreditCard
        bgColor="yellow"
        color="pink"
        type="MasterCard"
        number="3304949494949"
        expirationMonth={4}
        expirationYear="2022"
        bank="N26"
        owner="Sarah D"
      />
      <Rating>0</Rating>
      <Rating>1</Rating>
      <Rating>2</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <Rating>3.8</Rating>
    </div>
  );
}

export default App;

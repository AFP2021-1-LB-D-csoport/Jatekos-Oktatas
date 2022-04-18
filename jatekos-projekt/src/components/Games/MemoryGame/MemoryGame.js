import React, { Component } from "react";
import Aux from "../../../hoc/ReactAux";
import fries from "./images/fries.png";
import cheeseburger from "./images/cheeseburger.png";
import hotdog from "./images/hotdog.png";
import icecream from "./images/ice-cream.png";
import milkshake from "./images/milkshake.png";
import pizza from "./images/pizza.png";
import blank from "./images/blank.png";
import white from "./images/white.png";

class MemoryGame extends Component {
  state = {
    cardArray: [
      { key: "1", name: "fries", src: fries },
      { key: "2", name: "cheeseburger", src: cheeseburger },
      { key: "3", name: "hotdog", src: hotdog },
      { key: "4", name: "ice-cream", src: icecream },
      { key: "5", name: "milkshake", src: milkshake },
      { key: "6", name: "pizza", src: pizza },
      { key: "7", name: "fries", src: fries },
      { key: "8", name: "cheeseburger", src: cheeseburger },
      { key: "9", name: "hotdog", src: hotdog },
      { key: "10", name: "ice-cream", src: icecream },
      { key: "11", name: "milkshake", src: milkshake },
      { key: "12", name: "pizza", src: pizza },
    ],

    cards: null,

    cardsChosen: [],

    chosenCardsIDs: [],

    score: 0,
  };

  componentDidMount() {
    let newCardArray = this.state.cardArray;
    newCardArray.sort(() => 0.5 - Math.random());
    /*
    for (let i = 0; i < newCardArray.length; i++) {
      newCardArray[i].key = i;
    }
    */
    this.setState({
      cardArray: newCardArray,
    });
    /*
    for (let i = 0; i < this.state.cardArray.length; i++) {
      let card = this.state.cardArray[i];
      console.log(card.key, card.name);
    }
    */
    let newCards = this.createBoard();
    this.setState({
      cards: newCards,
    });
  }

  cardStyle = {
    width: "400px",
    height: "300px",
    display: "flex",
    flexWrap: "wrap",
  };

  createBoard = () => {
    return this.state.cardArray.map((card) => {
      return (
        <img
          src={blank}
          key={card.key}
          onClick={() => this.flipCard(card.key)}
        />
      );
    });
  };

  flipCard = (key) => {
    /*
    for (let i = 0; i < this.state.cardArray.length; i++) {
      let card = this.state.cardArray[i];
      console.log(card.key, card.name);
    }
    for (let i = 0; i < this.state.cards.length; i++) {
      console.log(this.state.cards[i]);
    }
    console.log(this.state.cardArray[key].name);
    console.log(this.state.cards[key]);
    */
    let newCardsChosen = this.state.cardsChosen;
    let newChosenCardsIDs = this.state.chosenCardsIDs;
    let place;
    for (let i = 0; i < this.state.cardArray.length; i++) {
      if (this.state.cardArray[i].key == key) {
        newCardsChosen.push(this.state.cardArray[i].name);
        newChosenCardsIDs.push(i);
        place = i;
      }
    }
    this.setState({
      cardsChosen: newCardsChosen,
      chosenCardsIDs: newChosenCardsIDs,
    });

    let newCardsState = this.state.cards;
    newCardsState[place] = this.getRealImage(place);
    this.setState({
      cards: newCardsState,
    });

    if (this.state.cardsChosen.length === 2) {
      setTimeout(this.checkMatch, 500);
    }
  };

  getRealImage = (place) => {
    const card = this.state.cardArray[place];
    return (
      <img
        src={card.src}
        key={card.key}
        onClick={() => this.flipCard(card.key)}
      />
    );
  };

  checkMatch = () => {
    let newCardState = this.state.cards;
    if (this.state.chosenCardsIDs[0] == this.state.chosenCardsIDs[1]) {
      newCardState[this.state.chosenCardsIDs[0]] = this.setBlankImage(
        this.state.chosenCardsIDs[0]
      );
    } else if (this.state.cardsChosen[0] == this.state.cardsChosen[1]) {
      newCardState[this.state.chosenCardsIDs[0]] = this.setWhiteImage(
        this.state.chosenCardsIDs[0]
      );
      newCardState[this.state.chosenCardsIDs[1]] = this.setWhiteImage(
        this.state.chosenCardsIDs[1]
      );
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      newCardState[this.state.chosenCardsIDs[0]] = this.setBlankImage(
        this.state.chosenCardsIDs[0]
      );
      newCardState[this.state.chosenCardsIDs[1]] = this.setBlankImage(
        this.state.chosenCardsIDs[1]
      );
    }
    this.setState({
      cards: newCardState,
      cardsChosen: [],
      chosenCardsIDs: [],
    });
  };

  setWhiteImage = (place) => {
    const card = this.state.cardArray[place];
    return <img src={white} key={card.key} />;
  };

  setBlankImage = (place) => {
    const card = this.state.cardArray[place];
    return (
      <img src={blank} key={card.key} onClick={() => this.flipCard(card.key)} />
    );
  };

  render() {
    return (
      <Aux>
        <h3>
          Score: <span>{this.state.score}</span>
        </h3>
        <div style={this.cardStyle}>{this.state.cards}</div>
      </Aux>
    );
  }
}

export default MemoryGame;

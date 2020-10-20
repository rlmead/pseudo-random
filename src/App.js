import React from 'react';
import './App.css';
import MenuItem from './MenuItem.js'

class App extends React.Component {
  // store state with constructor
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      menuView: 'snacks',
    };
    this.menuSections = {
      'snacks': 15,
      'brunch': 8,
      'appetizers': 12,
      'dinner': 8,
      'dessert': 10,
    };
    // bind all the functions to this
  }

  // function getFood - axios call to https://entree-f18.herokuapp.com/v1/menu/25
  // to be run when this.state.food = [] (if it hasn't been updated from localStorage)
  // keep running until there are enough (53) items (use foreach to iterate through menuSections?)
  // food array items will be formatted like so:
  // {
  // 'name': 'Overturned ribeye',
  // 'sides': 'aggressive tomatoes, fragrant cabbage',
  // 'section': 'snacks',
  // 'price': '$44.29',
  // }

  // function setMenuView to be run by clicking menuSections buttons
  // takes button id as input
  // updates this.state.menuView

  // function calculatePrice
  // do some silly math according to the food array item's name and section
  // add up character codes for each character in the name
  // then divide by different numbers according to section


  // load savedState from localStorage if it's there
  componentDidMount() {
    let savedState = JSON.parse(window.localStorage.getItem('savedState'));
    if (savedState) {
      this.setState(savedState);
    } else {
      window.localStorage.setItem('savedState', JSON.stringify(this.state));
    }
  }

  // keep localStorage up to date with this.state
  componentDidUpdate() {
    window.localStorage.setItem('savedState', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="App">

        {/* static header with restaurant name */}
        {/* exciting food picture (semi-transparent?) as background */}
        <h1>pseudo random</h1>
        <p>three forty eight east main street lexington kentucky united states of america</p>

        {/* nav bar
          generated with Object.keys(menuSections).map ...
          with buttons that run setMenuView */}

        {/* menu items list
          generated with items in food.filter(item => (item.section === menuView))
          <MenuItem data={item} />
        */}

      </div>
    );
  }
}

export default App;

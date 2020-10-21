import React from 'react';
import './App.css';
import axios from 'axios';
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
    this.getFood = this.getFood.bind(this);
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
  async getFood() {
    let apiUrl = 'https://entree-f18.herokuapp.com/v1/menu/25';
    let newFood = this.state.food;
    return await axios.get(apiUrl)
      .then(function (response) {
        for (let item of response.data.menu_items) {
          if (newFood.length < 53) {
            let name = item.description.split('with')[0].trim();
            let sides = item.description.split('with')[1].trim();
            newFood.push({'name': name, 'sides': sides});
          };
        };
        return newFood;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // function setMenuView to be run by clicking menuSections buttons
  // takes button id as input
  // updates this.state.menuView

  // function calculatePrice
  // do some silly math according to the food array item's name and section
  // add up character codes for each character in the name
  // then divide by different numbers according to section


  // load savedState from localStorage if it's there
  async componentDidMount() {
    let savedState = JSON.parse(window.localStorage.getItem('savedState'));
    if (savedState) {
      this.setState(savedState);
    };
    while (this.state.food.length < 53) {
      this.setState({ food: await this.getFood() });
    };
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

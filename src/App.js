import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header.js';
// import MenuItem from './MenuItem.js'

class App extends React.Component {
  // store state with constructor
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      menuView: 'snacks',
    };
    this.menuSections = [
      { 'name': 'snacks', 'count': 15 },
      { 'name': 'brunch', 'count': 8 },
      { 'name': 'appetizers', 'count': 12 },
      { 'name': 'dinner', 'count': 8 },
      { 'name': 'dessert', 'count': 10 },
    ];
    // bind all the functions to this
    this.getFood = this.getFood.bind(this);
    this.setView = this.setView.bind(this);
  }

  // function to be run when there are no saved menu items
  // to get collect and format data from silly menu API
  async getFood() {
    let apiUrl = 'https://entree-f18.herokuapp.com/v1/menu/25';
    let newFood = this.state.food;
    let menuSections = this.menuSections;
    return await axios.get(apiUrl)
      .then(function (response) {
        for (let item of response.data.menu_items) {
          let main = item.description.split('with')[0].trim().toLowerCase();
          let extras = item.description.split('with')[1].trim().toLowerCase();
          // get exactly 53 items
          // and make sure that main & extras are unique in all cases
          if (newFood.length < 53
            && newFood.map(item => item.main).indexOf(main) === -1
            && newFood.map(item => item.extras).indexOf(extras) === -1) {
            // add math to determine which section this item will be in
            let sectionIndex =
              menuSections.map((section, index) => menuSections.slice(0, index)
                .reduce((acc, curr) => acc + curr.count, 0))
                .map(count => count > newFood.length)
                .lastIndexOf(false);
            // add silly price calculation
            let price =
              '$' + (main.split('')
                .map(char => char.charCodeAt(0))
                .reduce((acc, cur) => acc + cur)
                / (menuSections[sectionIndex].count * 15))
                .toFixed(2)
                .toString();
            newFood.push({
              'main': main,
              'extras': extras,
              'section': menuSections[sectionIndex].name,
              'price': price
            });
          };
        };
        return newFood;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // function setView to be run by clicking menuSections buttons
  // updates this.state.menuView according to event.target.id
  setView(viewName) {
    this.setState({ menuView: viewName })
  }

  // load savedState from localStorage if it's there
  async componentDidMount() {
    let savedState = JSON.parse(window.localStorage.getItem('savedState'));
    if (savedState) {
      this.setState(savedState);
    } else {
      while (this.state.food.length < 53) {
        this.setState({ food: await this.getFood() });
      };
    }
  }

  // keep localStorage up to date with this.state
  componentDidUpdate() {
    window.localStorage.setItem('savedState', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="App">
        <Header
          menuSections={this.menuSections}
          setView={this.setView}
          menuView={this.state.menuView}
        />
        {/* menu items list
          generated with items in food.filter(item => (item.section === menuView))
          <MenuItem data={item} />
        */}

      </div>
    );
  }
}

export default App;

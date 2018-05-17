import React, { Component } from 'react'; //import is a webpack, not a react thing


class App extends Component {
  constructor(props) {
    super(props); //we'll talk about props later

    this.state = {
      userList: [
        {name: 'Emily',
         city: 'Overland Park',
         zip: '66213'}
      ],
      newUser: {
        name: '',
        city: '',
        zip: ''
      }
    }
  };


  // // handleNameChange = (event)=> { would go with the this.handleChange = this.handleChange.bind(this); above
  // handleNameChange = (event)=> {
  //   console.log('input says: ', event.target.value);

  //   //below changes the state without mutating or changing it 
  //   //this.state.user = event.target.value; //on the change, an event is fired off, target refers to what was changed, in this case the input, value refers to what was changed, in this case what was typed in 

  //   //this is the final step to create a similar reaction to 2-way binding
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       name: event.target.value
  //     }
  //   });
  // }


  // below could also be written  handleChangeFor = (propertyName) => {
  //return (event) => {
  //the below (on a single line) can only be used when you're returning the function (event) in another function (propertyName)
  //You can only remove the () around propertyName and event when it's one parameter being passed in 
  handleChangeFor = (propertyName) => (event) => {
    console.log('input says: ', event.target.value);
    this.setState({
      newUser: {
        ...this.state.newUser,
        [propertyName]: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      userList: [...this.state.userList, this.state.newUser],
      newUser: {
        name: '',
        city: '',
        zip: ''
      }
    });
  }

  render() {
    return (
      <div>
        <br />
        <form onSubmit= {this.handleSubmit}>
          <input value={this.state.userList.name} onChange={this.handleChangeFor('name')} placeholder="Proper Noun" />
          <input value={this.state.userList.city} onChange={this.handleChangeFor('city')} placeholder="Place" />
          <input value={this.state.userList.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip Code" />
          <input type="submit" value="Submission Button" />
          {/* notice the single crackets here and above, also handleCityChange() will run right away when the page is loaded*/}
          {/*{JSON.stringify(this.state.user)} works the same as {{vm}} */}
        </form>
        {JSON.stringify(this.state.userList)}
        <ul>
          {this.state.userList.map((user) => <li key={user.name}>The current user is {user.name} and she lives in {user.city}, {user.zip}</li>)}
        </ul>
      </div>

    );
  }
}

export default App;


//this is jvx but it recognizes what's inside the single crackets as javascript hence why the comment in jvx looks like what's above

/*add the below line if you get 'Cannot read property 'state' of undefined' and it indicates this.
  this makes the 'this' in handleChange the same as the this in the constructor
  this.handleChange = this.handleChange.bind(this); */

/*Currying is a function that returns a function*/

/* Dot notation: this.state 
  Bracket notation: this['state'] (good for variable notation)*/
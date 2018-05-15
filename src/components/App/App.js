import React, { Component } from 'react'; //import is a webpack, not a react thing


class App extends Component {
  constructor(props){
    super(props); //we'll talk about props later

    this.state = {user: 'Emily', city: 'Seattle'};
    //add the below line if you get 'Cannot read property 'state' of undefined' and it indicates this.
    //this makes the 'this' in handleChange the same as the this in the constructor
    //this.handleChange = this.handleChange.bind(this); 
  }

  // handleChange(event){ would go with the this.handleChange = this.handleChange.bind(this); above
  handleChange = (event)=> {
    console.log('input says: ', event.target.value);
    
    //below changes the state without mutating or changing it 
    //this.state.user = event.target.value; //on the change, an event is fired off, target refers to what was changed, in this case the input, value refers to what was changed, in this case what was typed in 
    
    //this is the final step to create a similar reaction to 2-way binding
    this.setState({user: event.target.value});
  }
  handledChange = (event)=> {
    console.log('input says: ', event.target.value);
    this.setState({city: event.target.value});
  }
  button = ()=> {
    console.log(this.state);
    
  }

  render() {
    return (
      <div>
          The current user is {this.state.user} and she lives in {this.state.city}
          <br/>
          <input onChange={this.handleChange} placeholder="Proper Noun"/>
          <input onChange={this.handledChange} placeholder="Place"/>
          <button onClick={this.button} >Submission Button</button>
      </div>
      // notice the single crackets
      // {JSON.stringify(this.state.user)} works the same as {{vm}}
    );
  }
}

export default App;

import React from 'react';
import { TextInput } from './components/TextInput';
import { Form } from './components/Form';
import { Button } from './components/Button';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      step: 2,
      email: ''
    }


  }

  prev = (e) => {
    e.preventDefault();
console.log(e,'eeee');
   
    console.log('test');
    console.log(e);
    this.setState( prevState => {
      console.log(prevState);
      const step =  prevState.step - 1;
      return{
      step: step
      };
    },() => {
      console.log('callback');
    })      
  }

  next = (e) => {
    console.log(e);
e.preventDefualt();
    console.log('test');

  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  renderForm = () => {

    switch (this.state.step) {
      case 1:
        return (
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        )
      case 2:
        return (
          <>
            <TextInput label="Email address: " value={ this.state.email } onChange={() => this.handleChange} placeholder="enter email" info="info test" />
            <Button title="prev" onClick={() => this.prev}/>
            {/* <Button title="next" onClick={() => this.next} /> */}


          </>
        )
      default:
        console.log('xxxx');
    }

  }
  render() {
    return (
      <Form>
        {this.renderForm()}
      </Form>
    )
  }
}



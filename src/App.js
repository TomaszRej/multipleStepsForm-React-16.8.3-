import React from 'react';
import { TextInput } from './components/TextInput';
import { Form } from './components/Form';
import { Button } from './components/Button';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      step: 1,
      email: '',
      name: ""
    }


  }

  prev = (e) => {
    e.preventDefault();
    this.setState( prevState => {
      console.log(prevState);
      const step =  prevState.step - 1;
      return{
      step: step
      };
    })      
  }

  next = (e) => {
    e.preventDefault();
    this.setState( prevState => {
      console.log(prevState);
      const step =  prevState.step + 1;
      return{
      step: step
      };
    })   

  }

  handleChange = (e)=> {
  console.log(e.target);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
   const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  renderForm = () => {

    switch (this.state.step) {
      case 1:
        return (
          <>
          <TextInput name="email" label="Email address: " value={ this.state.email } onChange={() => this.handleChange} placeholder="enter email" info="We'll never share your email with anyone else." />
          <Button title="prev" onClick={() => this.prev}/>
           <Button title="next" onClick={() => this.next} /> 
        </>
        )
      case 2:
        return (
          <>
            <TextInput name="name" label="name: " value={ this.state.name } onChange={() => this.handleChange} placeholder="name" info="info test" />
            <Button title="prev" onClick={() => this.prev}/>
             <Button title="next" onClick={() => this.next} /> 


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



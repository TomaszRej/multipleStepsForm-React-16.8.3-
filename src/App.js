import React from 'react';
import { TextInput } from './components/TextInput';
import { Form } from './components/Form';
import { Button } from './components/Button';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      data: {
        email: {
          value: ''
        },
        name: {
          value: ''
        },
        city: {
          value: ''
        }
      }

    }


  }

  prev = (e) => {
    e.preventDefault();
    if (this.state.step === 1) {
      return;
    }
    this.setState(prevState => {
      console.log(prevState);
      const step = prevState.step - 1;
      return {
        step: step
      };
    })
  }

  next = (e) => {
    e.preventDefault();
    if (this.state.step === 4) {
      return;
    }
    this.setState(prevState => {
      console.log(prevState);
      const step = prevState.step + 1;
      return {
        step: step
      };
    }, () => {
      console.log(this.state.step);
    })

  }

  goTo = (e) => {
    // e.target.getAttribute('data-id');
    // e.target.dataset.id;
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);


    this.setState({
      step: id
    }, () => {
      console.log(this.state.step);
    })
  }

  handleChange = (e) => {
    console.log(e.target);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    this.setState(state => {
      return {
        ...state,
        data: {
          ...state.data,
          [name]: {
            value: value
          }

        }
      }

    });
  }

  renderForm = () => {
    if (!this.state.step) {
      return;
    }
    switch (this.state.step) {
      case 1:
        return (
          <>
            <TextInput name="email" label="Email address: " value={this.state.data.email.value} onChange={() => this.handleChange} placeholder="enter email" info="We'll never share your email with anyone else." />
            <div className="d-flex">
              <div className=" d-flex flex-fill pr-2" >
                <Button title="prev" onClick={() => this.prev} />
              </div>
              <div className="d-flex flex-fill pl-2">
                <Button title="next" onClick={() => this.next} />
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <TextInput name="name" label="name: " value={this.state.data.name.value} onChange={() => this.handleChange} placeholder="name" />
            <div className="d-flex">
              <div className=" d-flex flex-fill pr-2" >
                <Button title="prev" onClick={() => this.prev} />
              </div>
              <div className="d-flex flex-fill pl-2">
                <Button title="next" onClick={() => this.next} />
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <TextInput name="city" label="city: " value={this.state.data.city.value} onChange={() => this.handleChange} placeholder="city" />
            <div className="d-flex">
              <div className=" d-flex flex-fill pr-2" >
                <Button title="prev" onClick={() => this.prev} />
              </div>
              <div className="d-flex flex-fill pl-2">
                <Button title="Submit" onClick={() => this.next} />
              </div>
            </div>
          </>
        )
      case 4:
        return (
          <h3>Thank You for filling out the form.</h3>
        )
      default:
        console.log('xxxx');
    }

  }
  renderPagination = (goTo) => {
    const pagination = this.state.step !== 4 ? (
      <nav aria-label="Page navigation example" className="pt-3 d-flex justify-content-center" >
        <ul className="pagination">

          <li className={this.state.step === 1 ? "page-item active" : "page-item"}><a className="page-link" onClick={(e) => goTo(e)} data-id="1">1</a></li>
          <li className={this.state.step === 2 ? "page-item active" : "page-item"}><a className="page-link" onClick={(e) => goTo(e)} data-id="2">2</a></li>
          <li className={this.state.step === 3 ? "page-item active" : "page-item"}><a className="page-link" onClick={(e) => goTo(e)} data-id="3">3</a></li>
        </ul>
      </nav>
    ) : null;

    return pagination;
  }
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header" >Form</div>
          <Form>
            {this.renderForm()}
            {this.renderPagination(this.goTo)}
          </Form>

        </div>
      </div>
    )
  }
}



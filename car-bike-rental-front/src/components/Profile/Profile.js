import React, { Component} from 'react';
import { Redirect } from "react-router";

class Profile extends Component {

    user = this.props.user;
    
    

  state = {
    books: []
  }

  loadBooks = () => {
    fetch('http://127.0.0.1:8000/api/books/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.props.token}`
      },
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.setState({books: data})
      }
    )
    .catch( error => console.error(error))
  }

  render() {
    if (this.user.id == 0) {
        return <Redirect push to="/login" />
      }
    return (
      <div>
        <h1>Пользователь </h1>
        {/* { this.state.books.map( book => {
          return <h3 key={book.id}>{book.title}</h3>
        })} */}
        <button onClick={this.loadBooks}>Load Books</button>
      </div>
    );
  }
}

export default Profile;
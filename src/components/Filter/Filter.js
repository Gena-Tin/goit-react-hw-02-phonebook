import React, { Component } from 'react';

class Filter extends Component {
  state = {};
  render() {
    return (<>
    <p>Find contacts by name:</p>
    <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          //value={this.state.name}
          // onChange={}
        />
    </>);
  }
}

export default Filter;
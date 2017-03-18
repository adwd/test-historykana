import React, { Component } from 'react';
import historykana from 'historykana'

class InputTest extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
    this.state = {
      text: '',
      history: [],
      kana: ''
    };
  }

  onTextChange(e) {
    const text = e.target.value;
    this.setState(state => {
      const history = text === '' ? [] : [...state.history, text ];
      const kana = historykana(history);

      return { text, history, kana };
    });
  }

  render() {
    return (
      <div>
        <input type="text" name="test" onChange={this.onTextChange} value={this.state.text} />
        <pre>history: {this.state.history.join(", ")}</pre>
        <p>かな:{this.state.kana}</p>
      </div>
    );
  }
}

export default InputTest;

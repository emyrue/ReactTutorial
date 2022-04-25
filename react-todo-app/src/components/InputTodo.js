import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleSubmit = (e) => {
    const { addTodoProps } = this.props;
    const { title } = this.state;
    e.preventDefault();
    addTodoProps(title);
    this.setState({
      title: '',
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

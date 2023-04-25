import React from "react";
import ReactDOM from 'react-dom';

class Portal extends React.Component {

  constructor() {
    super();
    this.modalWindow = document.getElementById('modal')
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children, this.modalWindow
    )
  }
}

export default Portal;

import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    const title = this.props.title;
    const children = this.props.children;
    return (
      <>
        {title ? <h1>{title}</h1> : null}
        <div>{children}</div>
      </>
    );
  }
}

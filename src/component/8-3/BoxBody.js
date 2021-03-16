import React, { Component } from 'react';

class BoxBody extends Component {
  render() {
    return (
      <div 
      className="changingColor" style={{ backgroundColor: this.props.color, borderRadius: this.props.radius, height: '150px',width: '150px'  }}>
</div>
    )
  }
}

export default BoxBody;
import React from 'react';

 class MakeCheckBox extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{ padding: "5px" }}>
        <input type="checkbox" defaultChecked={this.props.checked} />
        <lable style={{ margin: "10px" }}>{this.props.text}</lable>
      </div>

    )
  }
}

export default MakeCheckBox;
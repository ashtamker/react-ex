import React from 'react';
import MakeCheckBox from './MakeCheckBox';

 class CheckBox extends React.Component {
  render() {
    return (
      <div>
        <MakeCheckBox checked=""  text="I love angular" />
        <MakeCheckBox checked="" text="I love angular" />
        <MakeCheckBox checked="true" text="I love react" />
        <MakeCheckBox checked="true" text="I love react" />
      </div>
    )
  }
}


export default CheckBox;
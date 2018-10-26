import * as React from 'react';
import './NameDisplay.scss';

interface IProps {
  name: string;
}

class NameDisplay extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className='name-display--container'>
        {this.props.name}
      </div>
    );
  }
}

export default NameDisplay;

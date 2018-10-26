import * as React from 'react';
import { IReadUser } from '../services/nameSaverService';
import './DisplayUser.scss';

interface IProps {
  user: IReadUser;
}

class DisplayUser extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className='display-user--container'>
        <span className='display-user--user-name'>
          {this.props.user.username}
        </span>
        <span className='display-user--user-email'>
          {this.props.user.email}
        </span>
      </div>
    );
  }
}

export default DisplayUser;

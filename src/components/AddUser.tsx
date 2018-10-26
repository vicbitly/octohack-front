import * as React from 'react';
import './AddUser.scss';

interface IProps {
  name: string;
  email: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

class AddUser extends React.Component<IProps, {}> {
  public constructor(props: IProps, ctx: any) {
    super(props, ctx);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  public render() {
    return (
      <div className='add-user--container'>
        <h1>Add a user!</h1>
        <div className='add-user--input-container'>
          <span className='add-user--field-label'>Name:</span>
          <input
            className='add-user--input'
            type='text'
            value={this.props.name}
            onChange={this.props.onChangeName}
            onKeyUp={this.handleKeyUp}
          />

          <br />

          <span className='add-user--field-label'>Email:</span>
          <input
            className='add-user--input'
            type='text'
            value={this.props.email}
            onChange={this.props.onChangeEmail}
            onKeyUp={this.handleKeyUp}
          />

          <button
            className='add-user--submit'
            onClick={this.props.onSubmit}
          >
            Submit!
          </button>
        </div>
      </div>
    );
  }

  private handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      this.props.onSubmit();
    }
  }
}

export default AddUser;

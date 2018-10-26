import * as React from 'react';
import './GetUser.scss';

interface IProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

class GetUser extends React.Component<IProps, {}> {
  public constructor(props: IProps, ctx: any) {
    super(props, ctx);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  public render() {
    return (
      <div className='get-user--container'>
        <h1>Get a user by username!</h1>
        <input
          className='get-user--input'
          type='text'
          value={this.props.name}
          onChange={this.props.onChange}
          onKeyUp={this.handleKeyUp}
        />
        <button
          className='get-user--submit'
          onClick={this.props.onSubmit}
        >
          Submit!
        </button>
      </div>
    );
  }

  private handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      this.props.onSubmit();
    }
  }
}

export default GetUser;

import * as React from 'react';
import './NameInput.scss';

interface IProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

class NameInput extends React.Component<IProps, {}> {
  public constructor(props: IProps, ctx: any) {
    super(props, ctx);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  public render() {
    return (
      <div className='name-input--container'>
        <input
          className='name-input--input'
          type='text'
          value={this.props.name}
          onChange={this.props.onChange}
          onKeyUp={this.handleKeyUp}
        />
        <button
          className='name-input--submit'
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

export default NameInput;

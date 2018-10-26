import * as React from 'react';
import { saveName } from '../services/nameSaverService';
import './App.scss';
import NameDisplay from './NameDisplay';
import NameInput from './NameInput';

interface IState {
  displayValue: string;
  name: string;
}

class App extends React.Component<{}, IState> {
  public constructor(props: {}, ctx: any) {
    super(props, ctx);

    this.getInitialState = this.getInitialState.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSaveName = this.handleSaveName.bind(this);

    this.state = this.getInitialState();
  }

  public render() {
    return (
      <div className='app--container'>
        <header className='app--header'>
          <h1>The Silliest App There Ever Was</h1>
        </header>
        <NameInput
          name={this.state.name}
          onChange={this.handleNameChange}
          onSubmit={this.handleSaveName}
        />
        <NameDisplay
          name={this.state.displayValue}
        />
      </div>
    );
  }

  private getInitialState(): IState {
    return {
      displayValue: '',
      name: ''
    };
  }

  private handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    this.setState((prevState: IState) => {
      return {
        ...prevState,
        name
      };
    });
  }

  private async handleSaveName() {
    const displayValue = await saveName(this.state.name);
    this.setState((prevState: IState) => {
      return {
        displayValue,
        name: ''
      };
    });
  }
}

export default App;

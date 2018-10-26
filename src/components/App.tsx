import * as React from 'react';
import './App.scss';

import { getUser, IReadUser, saveUser } from '../services/nameSaverService';

import AddUser from './AddUser';
import DisplayUser from './DisplayUser';
import GetUser from './GetUser';

interface IState {
  addUserEmail: string;
  addUserUsername: string;
  currentUser: IReadUser | null;
  getUserUsername: string;
}

class App extends React.Component<{}, IState> {
  public constructor(props: {}, ctx: any) {
    super(props, ctx);

    this.getInitialState = this.getInitialState.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleGetUser = this.handleGetUser.bind(this);
    this.makeHandleFieldChange = this.makeHandleFieldChange.bind(this);

    this.state = this.getInitialState();
  }

  public render() {
    return (
      <div className='app--container'>
        <header className='app--header'>
          <h1>The Silliest App There Ever Was</h1>
        </header>
        <AddUser
          name={this.state.addUserUsername}
          email={this.state.addUserEmail}
          onChangeName={this.makeHandleFieldChange('addUserUsername')}
          onChangeEmail={this.makeHandleFieldChange('addUserEmail')}
          onSubmit={this.handleAddUser}
        />
        <br />
        <GetUser
          name={this.state.getUserUsername}
          onChange={this.makeHandleFieldChange('getUserUsername')}
          onSubmit={this.handleGetUser}
        />
        <br />
        {this.state.currentUser && <DisplayUser
          user={this.state.currentUser}
        />}
      </div>
    );
  }

  private getInitialState(): IState {
    return {
      addUserEmail: '',
      addUserUsername: '',
      currentUser: null,
      getUserUsername: ''
    };
  }

  private makeHandleFieldChange = (forProperty: string) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      this.setState((prevState: IState) => {
        const newState = { ...prevState };
        newState[forProperty] = value;
        return newState;
      });
    }

  private async handleAddUser() {
    const success = await saveUser({
      email: this.state.addUserEmail,
      username: this.state.addUserUsername
    });

    if (success) { 
      this.setState((prevState: IState) => {
        return {
          ...prevState,
          addUserEmail: '',
          addUserUsername: ''
        };
      });
    }
  }

  private async handleGetUser() {
    const currentUser = await getUser(this.state.getUserUsername);
    this.setState((prevState: IState) => {
      return {
        ...prevState,
        currentUser,
        getUserUsername: ''
      };
    });
  }
}

export default App;

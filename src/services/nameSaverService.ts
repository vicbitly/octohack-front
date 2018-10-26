export interface IReadUser {
  email: string;
  id: number;
  username: string;
}

export interface IWriteUser {
  username: string;
  email: string;
}

export async function saveName(name: string): Promise<string> {
  return Promise.resolve(`${name ? `Hello, ${name}` : ''}`);
}

export async function getUser(name: string): Promise<IReadUser | null> {
  return Promise.resolve(name ? {
      email: 've@bit.ly',
      id: 1,
      username: 'vicbitly'
    } 
    : null);
}

export async function saveUser(user: IWriteUser): Promise<boolean> {
  console.log('Saving User'); // tslint:disable-line
  console.dir(user); // tslint:disable-line
  return Promise.resolve(true);
}
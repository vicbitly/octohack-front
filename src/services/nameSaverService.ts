const endpointIp: string = process.env['OCTOHACK-BACK_SERVICE_HOST'] || '35.239.86.215';
const endpointPort: string = process.env['OCTOHACK-BACK_SERVICE_PORT'] || '80';

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
  return fetch(`http://${endpointIp}:${endpointPort}/users/${name}`)
    .then((response) => {
      const responseVal = response.json();
      console.log(responseVal); // tslint:disable-line

      return Promise.resolve(name ? {
        email: 've@bit.ly',
        id: 1,
        username: 'vicbitly'
      } 
      : null);
    }) 
}

export async function saveUser(user: IWriteUser): Promise<boolean> {
  return fetch(`http://${endpointIp}:${endpointPort}/users`, {
    body: JSON.stringify(user),
    method: 'POST'
  }).then((response) => {
    const responseVal = response.json();
    console.log(responseVal); // tslint:disable-line
    
    return Promise.resolve(true); 
  });
}
let endpointIp: string = '35.192.143.42';
let endpointPort: string = '80';

getEndpointData().then((response) => {
  endpointIp = response.ip;
  endpointPort = response.port;
});

export interface IEndpoint {
  ip: string;
  port: string;
}

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

export async function getEndpointData(): Promise<IEndpoint> {
  return fetch('/endpoint').then((response) => {
    const responseVal = response.json();
      console.log(responseVal); // tslint:disable-line
      return {
        ip: endpointIp,
        port: endpointPort
      };
  });
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
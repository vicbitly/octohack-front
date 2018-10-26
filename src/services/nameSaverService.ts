export async function saveName(name: string): Promise<string> {
  return Promise.resolve(`${name ? `Hello, ${name}` : ''}`);
}
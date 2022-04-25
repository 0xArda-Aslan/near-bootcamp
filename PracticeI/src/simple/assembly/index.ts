import { storage, Context } from "near-sdk-as"

// first
// export function helloWorld(): string {
//   return 'hello <Your Name>'
// }

//second
// export function helloWorld(name: string): string {
//   return 'hello ' + name
// }

//third
export function helloWorld(names: Array<string>): string {
  return names.map<string>(name => 'hello ' + name).join(` `)
}
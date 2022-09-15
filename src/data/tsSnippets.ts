export const tsSnippets = [
	{
		title: 'const',
		text: 'Variablen können nur bei Initialiserung gesetzt werden',
		code: `
// Explizite Typisierung
const three: number = 3
// Implizierte Typisierung anhand Initialisierung
const four = 4
    `.trim()
	},
	{
		title: 'let',
		text: 'Variablen können mehrmals gesetzt werden',
		code: `
let count = 1
count = 2
count = 3
    `.trim()
	},
	{
		title: 'Primitive Types',
		text: 'Gebräuchlichste Typen mit expliziter Typisierung',
		code: `
const loading: boolean = true
const count: number = 42
const message: string = 'Hello there!'
const nothing: null = null
const notSet: undefined = undefined
    `.trim()
	},
	{
		title: 'String interpolation',
		text: 'Strings mit Backtick (`) in Kombination mit ${}',
		code: `
const dev = 'Max'
const interpolation = \`Hello \${dev}. How are you?\`
    `.trim()
	},
	{
		title: 'Union Type',
		text: 'Zusammenführen von Typen',
		code: `
const event: 'click' | 'hover' = 'click'
const value: string | number = 7
    `.trim()
	},
	{
		title: 'String Literal',
		text: 'Definiertes Set von strings',
		code: `
const event: 'click' = 'click'
    `.trim()
	},
	{
		title: 'Array',
		text: 'Generische Liste T[]',
		code: `
const list: number[] = [1, 2, 3]
list.push(4)
console.log(list[3]) // => 4
    `.trim()
	},
	{
		title: 'Array Sortierung',
		text: 'Aufsteigender Inline-Sort für Arrays',
		code: `
const names = ['Berta', 'Adam', 'Carl', 'Anton']
names.sort((a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
})
    `.trim()
	},
	{
		title: 'Interface',
		text: 'Objektdefinition', // https://dev.to/saadsharfuddin/type-vs-interface-in-typescript-35i6
		code: `
interface Person {
  name: string;
  occupation: string;
  age: number;
}
    `.trim()
	},
	{
		title: 'Type',
		text: 'Allgemeine Definition',
		code: `
type Person = {
  name: string;
  occupation: string;
  age: number;
}
    `.trim()
	},
	{
		title: 'Object',
		text: 'Objekt-Instanz erzeugen',
		code: `
const batman = {
  name: 'Bruce Wayne',
  occupation: 'Vigilante',
  age: 38
}
batman.occupation = 'Businessman'
// Explizit typisiert
const spiderman: Person = {/* ... */}
    `.trim()
	},
	{
		title: 'Optionale Properties',
		text: 'Kann auf type und interface definiert werden',
		code: `
		type Person = {
  name: string;
  occupation?: string;
  age: number;
}

// occupation ist optional	
const batman: Person = {
  name: 'Bruce Wayne',
  age: 38
}

const heisenberg: Person = {
  name: 'Walter White',
  occupation: 'Chemist'
  age: 64
}
    `.trim()
	},
	{
		title: 'Function',
		text: 'Funktion mit Parameter und Rückgabewert',
		code: `
function add(a: number, b: number) {
  return a + b
}
    `.trim()
	},
	{
		title: 'Arrow Function',
		text: 'Funktion mit Parameter und Rückgabewert',
		code: `
// Expliziter Rückgabetyp
const add = (a: number, b: number): number => {
  return a + b
}
// Impliziter Rückgabetyp
const add = (a: number, b: number) => {
  return a + b
}
    `.trim()
	},
	{
		title: 'Generic Arrow Function',
		text: 'Funktion mit generischem Parameter und Rückgabewert',
		code: `
const first = <T>(list: T[]): T => {
  return list[0]
}
    `.trim()
	},
	{
		title: 'Union Types & Literal Types',
		text: 'Explizite Werte als Typ definieren',
		code: `
type Status = 'initializing' | 'running' | 'done'
const status: Status = 'running'
    `.trim()
	},
	{
		title: 'Function Types',
		text: 'Funktionssignatur als Typ',
		code: `
type onClick = () => void
type Add = (a: number, b: number) => number
    `.trim()
	},
	{
		title: 'Spread Operator',
		text: 'Flaches Klonen von Arrays und Objekten',
		code: `
const array = [1, 2, 3]
const arrayClone = [...array]

const obj = { id: 7, name: 'George' }
const objClone = { ...obj }
    `.trim()
	},
	{
		title: 'Array Destructuring',
		text: 'Items aus Array lesen',
		code: `
const row = [1, 2, 3, 4, 5]
const [eins, zwei, drei] = row
    `.trim()
	},
	{
		title: 'Object Destructuring',
		text: 'Properties aus Objekt lesen',
		code: `
const human = { legs: 2, head: 1, fingers: 10 }
const { fingers, head } = human
    `.trim()
	},
	{
		title: 'Export',
		text: 'Exportieren von Variablen, Funktionen, Typen, Interface, Klassen usw.',
		code: `
export type Status = 'initializing' | 'running' | 'done'
export const human = { legs: 2, head: 1, fingers: 10 };
export const foo = () => 42;
    `.trim()
	}
]

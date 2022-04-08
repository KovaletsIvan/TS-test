
// task 1

 type User = {
  name:string
  age:number
  occupation:string
  
};

 const users: User[] = [
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep',
   
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut',
     
  }
];

function logPerson(user: User):void {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


task 2

interface Users {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = Admin|User



export const persons: Person[] /* <- Person[] */ = [
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  }
];

export function logPerson(user: Person):void {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

// task 3

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  }
];

export function logPerson(person: Person):void {
  let additionalInformation: string;
  if ("role" in person) {
      additionalInformation = person.role;
  } else {
      additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// task 4

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person):person is Admin {
  return person.type === 'admin';
}

export function isUser(person: Person): person is User {
  return person.type === 'user';
}

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  if (isAdmin(person)) {
      additionalInformation = person.role;
  }
  if (isUser(person)) {
      additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

// taska 5

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

 type Person = User | Admin;

const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  {
      type: 'admin',
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      type: 'user',
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      type: 'admin',
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  },
  {
      type: 'user',
      name: 'Wilson',
      age: 23,
      occupation: 'Ball'
  },
  {
      type: 'admin',
      name: 'Agent Smith',
      age: 23,
      role: 'Administrator'
  }
];

 const isAdmin = (person: Person): person is Admin => person.type === 'admin';
 const isUser = (person: Person): person is User => person.type === 'user';

 function logPerson(person: Person) {
  let additionalInformation = '';
  if (isAdmin(person)) {
      additionalInformation = person.role;
  }
  if (isUser(person)) {
      additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

 function filterUsers(persons: Person[], criteria:Partial<User>): User[] {
  return persons.filter(isUser).filter((user) => {
      const criteriaKeys = Object.keys(criteria) as (keyof User)[];
      return criteriaKeys.every((fieldName) => {
          return user[fieldName] === criteria[fieldName];
      });
  });
}

console.log('Users of age 23:');

filterUsers(
  persons,
  {
      age: 23
  }
).forEach(logPerson);

// task 6

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
  console.log(
      ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

const getObjectKeys = <T>(obj: T) => Object.keys(obj) as (keyof T)[];

export function filterPersons(persons:Person[], personType: 'user', criteria: Partial<User> ):User[];
export function filterPersons(persons:Person[], personType: 'admin', criteria:Partial<Admin> ):Admin[];


export function filterPersons(persons:Person[], personType: string, criteria: Partial<Person> ):Person[] {
  return persons
      .filter((person) => person.type === personType)
      .filter((person) => {
          let criteriaKeys = getObjectKeys(criteria);
          return criteriaKeys.every((fieldName) => {
              return person[fieldName] === criteria[fieldName];
          });
      });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);

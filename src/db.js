import Dexie from 'dexie';

// eslint-disable-next-line import/prefer-default-export
export const db = new Dexie('myDatabase');
db.version(1).stores({
  friends: '++id, name, age', // Primary key and indexed props
});

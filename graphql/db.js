export const people = [
  {
    id: "0",
    name: "Nicolas",
    age : 18,
    gender: "female"
  },
  {
    id: "1",
    name: "Nicolas",
    age : 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Nicolas1",
    age : 18,
    gender: "female"
  },
  {
    id: "3",
    name: "Nicolas2",
    age : 18,
    gender: "female"
  },
  {
    id: "4",
    name: "Nicolas3",
    age : 18,
    gender: "female"
  },
  {
    id: "5",
    name: "Nicolas4",
    age : 18,
    gender: "female"
  }
];


export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id))[0];
  return filteredPeople
}
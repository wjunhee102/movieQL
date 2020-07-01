const people = [
  {
    name: "Nicolas",
    age : 18,
    gender: "female"
  },
  {
    name: "Nicolas1",
    age : 18,
    gender: "female"
  },
  {
    name: "Nicolas2",
    age : 18,
    gender: "female"
  },
  {
    name: "Nicolas3",
    age : 18,
    gender: "female"
  },
  {
    name: "Nicolas4",
    age : 18,
    gender: "female"
  }
];

const resolvers = {
  Query: {
    people: ()=> people
  }
};

export default resolvers;
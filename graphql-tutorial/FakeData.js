const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Lee",
        username: "lee",
        age: 27,
        nationality: "KOREA",
      },
      {
        id: 3,
        name: "Toss",
        username: "toss",
        age: 31,
        nationality: "JAPAN",
      },
    ],
  },
  {
    id: 2,
    name: "Lee",
    username: "lee",
    age: 27,
    nationality: "KOREA",
  },
  {
    id: 3,
    name: "Toss",
    username: "toss",
    age: 31,
    nationality: "JAPAN",
  },
];

const MovieList = [
  {
    id: 1,
    name: "베놈2",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "존윅3",
    yearOfPublication: 2020,
    isInTheaters: false,
  },
  {
    id: 3,
    name: "토스",
    yearOfPublication: 2021,
    isInTheaters: true,
  },
];

module.exports = { UserList, MovieList };

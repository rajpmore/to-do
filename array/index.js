let arr = [1, 2, 3, 12, 4, 23, 456, 2, 133, 5656];

arr.map(function (item) {
  console.log(item);
});

let users = [
  {
    fname: "Raj",
    lname: "More",
    id: 1,
  },
  {
    fname: "Risabh",
    lname: "Prakash",
    id: 2,
  },
  {
    fname: "Rajnish",
    lname: "Kumar",
    id: 3,
  },
];

users.map((user, idx) => {
  console.log(idx + 1, user.fname, user.lname);
});

let a = "name";
console.log(a[0]);
a[0] = "m";
console.log(a.charAt(0));

let todos = [
  {
    msg: "Complete assignmets",
    done: false,
    timestamp: 1324239458803,
    id: 1,
  },
  {
    msg: "Complete assignmets",
    done: false,
    timestamp: 1324239458803,
    id: 1,
  },
];

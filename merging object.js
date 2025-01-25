const user1={name:"john",age:30,};
console.log(user1);
const user2={job:"developer",location:"remote"};
console.log(user2);
const user3={...user1, ...user2};
console.log(user3);
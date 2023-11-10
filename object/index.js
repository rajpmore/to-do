let a = [1, , "wr", [1, 2], 1_000_000_000];
console.log(a);

console.log(typeof a);
console.log(typeof a === "object" && Array.isArray(a));

let obj = {
  a: 545,
  name: "WEFerf",
  b: [1, 2],
};

let arr = [1, 2, 1, 4, 3, 2, 4, 6, 4, 2, 6, 3, 5, 2, 1, 4, 24, 4, 23];

let freq = {};

for (let i = 0; i < arr.length; i++) {
  if (freq[arr[i]]) freq[arr[i]]++;
  else freq[arr[i]] = 1;
}

console.log(freq);

for (let item in freq) {
  console.log(item, " : ", freq[item]);
}

const compose = (...funcs) => comp => {
  return funcs.reduceRight((wrapped, f) => f(wrapped), comp);
};

export default compose;

// Exemple
// const arr = ["a", "b", "c"];
// const res = arr.reduceRight((prevResult, value) => {
//   return prevResult + value;
// }, "XX");

// console.log(res);
// XXcba

const reduce = func => acc => arr => arr.reduce(uncurry(func), acc);
const uncurry = func => (a, b) => func(a) (b);
const concat = a => b => a.concat(b);

export const flatten = arr => reduce(concat) ([]) (arr);

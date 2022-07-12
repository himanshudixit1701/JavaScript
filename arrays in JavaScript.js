const languages = ['C', 'C++', 'JavaScript', 'Java']

console.log(languages);

// to find array length
console.log(languages.length);

// to find value of spacific index element 
console.log(languages [1 /*index numer*/]);

// to add an element in an array (using PUSH) at last index
languages.push('python');
console.log(languages);

// to add an element in an array (using unshift) at first insdex
languages.unshift('C#');
console.log(languages);

// to remove element of last index from the in (using pop)
languages.pop();
console.log(languages);

// to remove element of first index from the in (using shift)
languages.shift();
console.log(languages);

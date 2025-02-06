function firstWord(s) {
  // your code here
// 	s = s.trim();
//     let spaceIndex = s.indexOf(" ");
//     if (spaceIndex === -1) {
//         return s;
//     }
//     return s.substring(0, spaceIndex);
// }
	s = s.trim();
	let words = s.split(" ");
	return words[0] || s;
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

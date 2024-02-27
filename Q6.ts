let Name = "\t\nMuhammad\n.Ali\t.\nWahab\t";

function removeExtraWhitespace(inputString:string) {
  const whitespaceRegex = /[\n\t ]/g;
  const spaceAdd = /[.]/g;
  let result = inputString.replace(whitespaceRegex, '').replace(spaceAdd, ' ');
  return result;
}

console.log(`Name with whitespaces:${Name}`);
console.log(`Name without whitespaces:${removeExtraWhitespace(Name)}`);
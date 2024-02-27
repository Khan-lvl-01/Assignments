function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const modifiedMagicians: string[] = [];

  for (const magician of magicians) {
    const modifiedMagician = magician + " the Great";
    modifiedMagicians.push(modifiedMagician);
  }

  return modifiedMagicians;
}

let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

magicians = make_great(magicians);

show_magicians(magicians);
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

show_magicians(magicians);
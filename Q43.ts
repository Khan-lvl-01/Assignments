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
  
  const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  const modifiedMagicians = make_great([...magicians]);
  
  console.log("Original Magicians:");
  show_magicians(magicians);
  
  console.log("\nModified Magicians:");
  show_magicians(modifiedMagicians);
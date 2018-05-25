// A class groups properties and functions that are
// Highly related
export class Animal {
  // The question mark makes the parameters optional
  // Use ? to make parameters optional
  constructor(private legs?: number, private eyes?: number) {}

  // Functions to execure
  public eats() {
    console.log("This animal eats people so much");
  }

  // Unique properties that represent a variables
  get numberOfLegs() {
    return this.legs;
  }

  set numberOfLegs(value) {
    if (value < 0) throw new Error("legs cannot be less than 0.");

    this.legs = value;
  }
}

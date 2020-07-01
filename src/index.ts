class Test {
  public abc : string;

  constructor(abc:string) {
    this.abc = abc;
  }
}

const TESTVAR = new Test("hello");

console.log(TESTVAR);

export {}
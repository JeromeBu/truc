const { add } = require("./salut");

describe("Test add function", () => {
  it("should add 2 numbers", () => {
    expect(add(1, 3)).toEqual(4);
  });
  it("should return a number if only one number given", () => {
    expect(add(8)).toEqual(8);
  });
  it("should return error, wrong input if given not number", () => {
    expect(add("salut")).toEqual("Wrong input");
  });
});

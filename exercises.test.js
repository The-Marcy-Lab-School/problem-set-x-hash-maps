const { singleNumber, canConstruct, hasDuplicates } = require('./exercises');

describe("singleNumber", () => {
  it("finds the single number in a short array", () => {
    expect(singleNumber([2,2,1])).toEqual(1)
  })
  
  it("finds the single number in a long array", () => {
    expect(singleNumber([4,1,2,1,2])).toEqual(4)
  })

  it("finds the single number in a single element array", () => {
    expect(singleNumber([1])).toEqual(1)
  })
})

describe("canConstruct", () => {
  it("returns false if letter doesn't exist in magazine", () => {
    expect(canConstruct("a", "bcdefg")).toEqual(false)
  })
  
  it("returns false if not enough letters appear in magazine", () => {
    expect(canConstruct("aa", "abcdefg")).toEqual(false)
  })

  it("returns true if enough letters exist in magazine", () => {
    expect(canConstruct("aab", "aaabcdefg")).toEqual(true)
  })

  it("returns false if letter doesn't exist in magazine", () => {
    expect(canConstruct("aaz", "aabcdefg")).toEqual(false)
  })
})

describe("hasDuplicates", () => {
  it("returns true if there is a duplicate", () => {
    let name = ["ball", "bat", "glove", "glove", "glove"]
    let price = [2, 3, 1, 2, 2]
    let weight = [2, 5, 1, 1, 1]
    expect(hasDuplicates(name, price, weight)).toEqual(true)
  })
  
  it("returns false if there are no duplicates", () => {
    let name = ["ball", "bat", "glove", "glove", "glove"]
    let price = [2, 3, 1, 2, 2]
    let weight = [2, 5, 1, 1, 2]
    expect(hasDuplicates(name, price, weight)).toEqual(false)
  })

  it("returns false if there are no duplicates (check hash function)", () => {
    let name = ["ball", "bat", "glove", "glove", "glove"]
    let price = [2, 3, 1, 22, 2]
    let weight = [2, 5, 1, 2, 22]
    expect(hasDuplicates(name, price, weight)).toEqual(false)

    name = ["ball", "bat", "glove", "2glove", "glove2"]
    price = [2, 3, 1, 2, 22]
    weight = [2, 5, 1, 22, 2]
    expect(hasDuplicates(name, price, weight)).toEqual(false)

    name = ["ball", "bat", "glove", "glove2", "2glove"]
    price = [2, 3, 1, 2, 22]
    weight = [2, 5, 1, 22, 2]
    expect(hasDuplicates(name, price, weight)).toEqual(false)
  })
})

# Problem Set: Hash Map

## Directions
Respond to short response questions in clear, concise sentences directly within this file. Use markdown to ensure that your answers are formatted correctly.

Complete code challenges in `exercises.js`. 

Use Test Driven Development to guide you. Run `npm install` to download dependencies. Run `npm test` to run tests locally. Ensure all tests are passing before submitting this problem set.

### Short Response Questions

**1. What is a Hash Map and how does it work?** Be sure to mention the terms "hash key" and "hash function" in your explanation.

**2. What are the benefits of using a Hash Map rather than storing all of our data in an Array?**

### Coding Exercises

**1.** Given a non-empty array of numbers, every element appears twice except for one. Find that single number and return it. Implement a function `singleNumber()` with a **linear runtime complexity.**

```
Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4
```

**2.** Given an arbitrary ransom note string and another string containing all letters from a magazine, write a function that will return true if the ransom note string can be constructed from all the letters in the magazine; otherwise, it will return false. Each letter in the magazine string can only be used once in your ransom note. Implement a function `canConstruct()` with a **linear runtime complexity.**

```
Input: ransomNote = "a", magazine = "bcdefg"
Output: false
Explanation: Your ransom note requires an `a`, but the magazine does not contain an `a`.

Input: ransomNote = "aa", magazine = "abcdefg"
Output: false
Explanation: Your ransom note requires two `a`s, but the magazine does not contain enough `a`s.

Input: ransomNote = "aab", magazine = "aaabcdefg"
Output: true
Explanation: Your ransom note requires two `a`s and a `b`, and the magazine has at least two `a`s and at least one `b`.
```

**3.** You are given a list of products whose data is seperated into three different arrays that holds the name, price, and weight of the product respectively. Consider the following arrays for example: 
```
name = ["ball", "bat", "glove", "glove", "glove"]
price = [2, 3, 1, 2, 1]
weight = [2, 5, 1, 1, 1]
```
Our first product is a ball with price of 2 and a weight of 2. The second product is a bat with a price of 3 and a weight of 5. Our third product is a glove with a price of 1 and a weight of 1. Our fourth product is a glove with a price of 2 and a weight of 1. **Duplicate products contain identical parameters for all fields in the list (i.e. name, price, and weight).** Write a function `hasDuplicates()` that returns true if there is a duplicate product, and returns false if every product is unique. Your solution should have **linear runtime complexity.**

```
Inputs: 
  name = ["ball", "bat", "glove", "glove", "glove"]
  price = [2, 3, 1, 2, 1]
  weight = [2, 5, 1, 1, 1]

Ouput: true

Explaination: The 3rd and 5th items are the same. Both have a name of "glove" with price of 1 and weight of 1. 


Inputs: 
  name = ["ball", "bat", "glove", "glove", "glove"]
  price = [2, 3, 1, 2, 2]
  weight = [2, 5, 1, 1, 2]

Ouput: false

Explaination: No two items have the same name, price, and weigth, so there are no duplicates. 
```


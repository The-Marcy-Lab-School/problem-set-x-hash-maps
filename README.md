# Problem Set: Hash Map

## Directions
Respond to short response questions in clear, concise sentences directly within this file. Use markdown to ensure that your answers are formatted correctly.

Complete code challenges in `exercises.js`. 

Use Test Driven Development to guide you. Run `npm install` to download dependencies. Run `npm test` to run tests locally. Ensure all tests are passing before submitting this problem set.

### Short Response Questions

**1. What is a Hash Map and how does it work?** Be sure to mention the terms "hash key" and "hash function" in your explanation.
  
   > A `Hash Map` is a data structure that maps key-value pairs (similar to an object), and stores these pairs within an `Array()`. Unlike `Hash Tables` (which also have a key-value pair functionality) where the `keys` can only be an integer or a string, `Hash Map`'s can be of any data type. `Hash Map`s can be implemented by creating a `hash()` function that excepts a `key` and a `value` as input and the `key` is used as the `hash key` for accessing the index associated with the `key` that is stored at it's specified `index` when it is added to the `Hash Table`. `Hash Maps`' perform lookup, insertion, and deletion operations efficiently and therefore usually have a constant run time of O(1)


**2. What are the benefits of using a Hash Map rather than storing all of our data in an Array?**

 > > The benefit of using A `Hash Map` rather than storing all of your data in an `array` is the difference in runtime (time complexity) and the limit to the different data types that can be present in the `array`. An `array` can only consist of items of the same data type, where `Hash Map`'s can store any `key`-`value` pairs. A `Hash Map` can be as complex to where you can assign a `key` to be a string `""` and its value to be an object `{}` with its own set of `key`-`value` pairs.
 > >> For implementation methods like to `search()`, `insert()`, `lookUp()`, and to `deleteItem()`, using a `Hash Map` usually has a constant run time of O(1). The time complexity to `search()`, `insert()` and `delete()` in an `array` has a linear time complexity O(n), but does have the benefit of looking for an item at constant `O(1)` runtime when you know the index(address) you are looking for. Unlike `Hash Map`s, the normal `array` has to shift every element over to the right when adding to the beginning of the array, where `Hash Map`'s allow you to insert `key`-`value` pairs and store them at any index depending on the `character code` of the `key` modulo `(%)` the `.length` of the `Hash Map`'s `size`. This method allows the `key` and its `value` to be stored at some `index` within our `Hash Map` without storing at an `index` that exceeds or `Hash Map`'s `.length`. 

### Coding Exercises

Use a Hash Map to solve the following problems. Since Hash Maps are abstract data types, you can use any data struture (Arrays, Objects, Maps, etc.) to represent a Hash Map.


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


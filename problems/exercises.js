/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/
const singleNumber = (nums) => {
    let hash = {}
    for(num of nums){
        if(num in hash){
            hash[num] += 1;
        } else {
            hash[num] = 1
        }
    }
    for(num in hash){
        if(hash[num] === 1){
            return num
        }
    }
    return null;
};, 
  
/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
  
const canConstruct = (ransomNote, magazine) => {
    let noteHash = {};
    let magazineHash = {};
    for(letter of ransomNote){
        if(letter in noteHash){
            noteHash[letter] += 1
        } else {
            noteHash[letter] = 1
        }
    }
    
    for(letter of magazine){
        if(letter in magazineHash){
            magazineHash[letter] += 1
        } else {
            magazineHash[letter] = 1
        }
    }
    for(letter in noteHash){
        if(!(letter in magazineHash)){
            return false;
        } 
        if(magazineHash[letter] < noteHash[letter]){
            return false;
        }
    }
    return true;
};

/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
*/

const uniqueMorseRepresentations = (words) => {
    let map = {
        a:".-",
        b:"-...",
        c:"-.-.",
        d:"-..",
        e:".",
        f:"..-.",
        g:"--.",
        h:"....",
        i:"..",
        j:".---",
        k:"-.-",
        l:".-..",
        m:"--",
        n:"-.",
        o:"---",
        p:".--.",
        q:"--.-",
        r:".-.",
        s:"...",
        t:"-",
        u:"..-",
        v:"...-",
        w:".--",
        x:"-..-",
        y:"-.--",
        z:"--.."
    }
    let answerMap = {}
    let count = 0;
    for(word of words){
        let morse = ""
        for(letter of word){
            morse += map[letter]
        }
        if(!(morse in map)){
            count++
            map[morse] = true;
        }
    }
    return count;
};

/*
You are given a complex list of n products, each with a name, price, and weight. Find out how many duplicate products are present within the list. Duplicate products contain identical parameters for all fields in the list (i.e. name, price, and weight).

 

Example:

 

There are n = 5 products with attributes listed in three arrays, aligned by index.

 

name = [ball, bat, glove, glove, glove]

price = [2, 3, 1, 2, 1]

weight = [2, 5, 1, 1, 1]

 

A complete item description for item 0: (name[0], prices[0], weight[0]) is (ball, 2, 2)

Name     Price Weight
ball     2     2
bat      3     5
glove    1     1
glove    2     1
glove    1     1


The first two items are unique.

The two gloves at indices 2 and 4 are equal in all three attributes so there is 1 duplicate.

The last glove at index 3 has a different price from the other two, so it is not a duplicate.

 

There is 1 duplicate item in the original list.

 
*/

module.exports = {
  singleNumber,
  canConstruct
};

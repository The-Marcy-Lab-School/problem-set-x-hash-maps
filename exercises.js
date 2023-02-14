// Question 1
const singleNumber = (nums) => {
   let len = nums.length;
  let s = new Set();
   
   let sum = 0;
   let uniqueElementSum = 0;
   
   for (let i=0; i<len; i++) {
      if (!s.has(nums[i])) {
         s.add(nums[i]);
         uniqueElementSum += nums[i];
      }
      
      //all sum
      sum += nums[i];
   }
   
   return 2 * uniqueElementSum - sum;
}
  
// Question 2
const canConstruct = (ransomNote, magazine) => {
   if (ransomNote.length > magazine.length) return false;
   let charMap = [];
   for (let i = 0; i < ransomNote.length; i++) {
       if (magazine.indexOf(ransomNote[i]) == -1) 
         return false;
       let char = ransomNote.codePointAt(i);
       charMap[char] = charMap[char] - 1 || -1;
   }
 
   for (let i = 0; i < magazine.length; i++) {
       let char = magazine.codePointAt(i);
       charMap[char] = charMap[char] + 1 || 1;
   }
   for (const charCount of charMap) if (charCount < 0) return false;
   return true 
   
}
// Question 3
const hasDuplicates = (name, price, weight) => {
const nL = name.length;

  // constructing a set to store unique entries
  const s = new Set();

  // iterating over each record
  for (let i = 0; i < nL; ++i) {
    // constructing an object of the record
    const object = {
      name: name[i],
      price: price[i],
      weight: weight[i],
    };

    // stringifying the object
    const objString = JSON.stringify(object);

    // if the set already has object,
    // it means that a duplicate exists
    if (s.has(objString)) {
      return true;
    }

    // otherwise, adding the record
    s.add(objString);
  }

  // no duplicates found
  return false;
};

module.exports = {
  singleNumber,
  canConstruct,
  hasDuplicates
};

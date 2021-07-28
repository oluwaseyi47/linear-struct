
//     Given two sets of elements, find the sum of all distinct elements from the set. 
//     In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements - 4, 7, 2 )
// Give two Solution to this problem, using a different type of data structures each time.
// Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets.
//  The elements in each set are unique or there are no duplicates within a set.


let set1 =[6, 5, 8, 9]
let set2= [1, 7, 6, 9, 3]


function addDoubleArrays (a, b) {

    let sum = 0
    for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) >= 0) {
        continue
    }
    sum += a[i];
    }
    for (let i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) >= 0) {
            continue
        }
        sum += b[i];
        
    }
    return sum 
}

console.log(addDoubleArrays(set1, set2))




// USING HASH TABLE

function addSpecialElement(a, b) {

    let hash = new Map()

    for (let i = 0; i< a.length; i++) {
        if (hash.has(set1[i]))
        hash.set(set1[i], 1 + hash.get(set1[i]))
        else 
        hash.set(set1[i], 1)
    }

    for (let i = 0; i<b.length; i++) {
        if (hash.has(set2[i]))
        hash.set(set2[i], 1 + hash.get(set2[i]))
        else
        hash.set(set2[i], 1)
    }


    let sum = 0;

    for(let entry of hash) {
        if (parseInt((entry[1]).toString()) == 1)
        sum += parseInt((entry[0]).toString())
    }

    return sum
};

console.log(addSpecialElement(set1, set2))
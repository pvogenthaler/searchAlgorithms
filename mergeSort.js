/*
Merge Sort:

If the list is of length 0 or 1, then it is already sorted. Otherwise:
Divide the unsorted list into two sublists of about half the size.
Sort each sublist recursively by re-applying merge sort.
Merge the two sublists back into one sorted list.

O(n log n)
*/

const mergeSort = function(arr) {

  const merge = function (arr1, arr2) {
    let result = [];
    while (arr1.length && arr2.length) {
      // Add smaller value to result
      result.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
    }
    // Add the leftover array to result and return
    return result.concat(arr1.length ? arr1 : arr2);
  }

  // Base case: if the list is of length 0 or 1 then it is already sorted
  if (arr.length < 2) {
    return arr;
  }

  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  // Sort each sublist recursively by re-applying merge sort
  return merge(mergeSort(left), mergeSort(right));
}

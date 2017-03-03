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
    let result = [], i = 0, j = 0;
    while (arr1.length && arr2.length) {
      result.push(arr1[0] <= arr2[0] ? arr1[i++] : arr2[j++];
    }

    while (i < arr1.length) {
      result.push(arr[i++]);
    }
    while (j < arr2.length) {
      result.push(arr2[j++]);
    }

    return result;
  }

  if (arr.length < 2) {
    return arr;
  }

  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let n = i + 1; n < arr.length; n++) {
      let current = arr[i];
      let smallest = current;
      if (arr[n] < smallest) {
        smallest = arr[n];
        arr[i] = smallest;
        arr[n] = current;
      }
    }
  }
}
//not exactly right, but it works

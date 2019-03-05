function mergeSortedMeetingTimes(arr) {
  const mergedTimes = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const indexOfLastElementInMergedTimes = mergedTimes.length - 1;
    if (arr[i].startTime <= mergedTimes[indexOfLastElementInMergedTimes].endTime) {
      if (arr[i].endTime > mergedTimes[indexOfLastElementInMergedTimes].endTime) {
        mergedTimes[indexOfLastElementInMergedTimes].endTime = arr[i].endTime;
      }
    } else {
      mergedTimes.push(arr[i]);
    }
  }
  console.log(JSON.stringify(mergedTimes, null, 4));
  return mergedTimes;
}

mergeSortedMeetingTimes([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 },
]);

mergeSortedMeetingTimes([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]);

mergeSortedMeetingTimes([{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]);

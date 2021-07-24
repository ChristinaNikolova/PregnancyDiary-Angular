export function isDueDateInvalid(dueDate: string): boolean {
  const todaysDate = new Date();
  const pickedDate = new Date(Date.parse(dueDate.replace(/-/g, ' ')));

  if (todaysDate > pickedDate) {
    return true;
  }

  return false;
}

export function isPositiveTestInvalid(positiveTest: string): boolean {
  const todaysDate = new Date();
  const pickedDate = new Date(Date.parse(positiveTest.replace(/-/g, ' ')));

  if (todaysDate < pickedDate) {
    return true;
  }

  return false;
}

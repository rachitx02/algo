function containsDuplicate(nums: number[]): boolean {
  const aset = new Set(nums);
  if (nums.length > aset.size) return true;
  else return false;
}

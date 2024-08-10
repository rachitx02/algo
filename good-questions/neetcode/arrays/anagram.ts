const isAnagram = (s: string, t: string): boolean => {
  if (t.length !== s.length) return false;

  t.split("").forEach((char) => (s = s.replace(char, "")));

  return !s.length;
};

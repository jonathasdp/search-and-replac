function myReplace(str, before, after) {
  after = /^[A-Z]/.test(before)
    ? after[0].toUpperCase().concat(after.substring(1))
    : after.toLowerCase();
  return str.replace(before, after);
}
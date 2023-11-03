function isPalindrome(x: number): boolean {
  const orderedX = x.toString().split("").reverse().join("");
  console.log(x.toString().split("")); // [ '1', '2', '1' ] 配列として取得する
  console.log(x.toString().split("").reverse().join("")); // 121 文字列として取得する
  return x === Number(orderedX) ? true : false;
}

console.log(isPalindrome(121));

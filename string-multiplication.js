function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const result = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const product = (num1[i] - "0") * (num2[j] - "0");
      const sum = product + result[i + j + 1];

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  let productString = result.join("");

  return productString.startsWith("0") ? productString.slice(1) : productString;
}

// Example 
console.log(multiply("2", "3")); // Output: "6"
console.log(multiply("123", "456")); // Output: "56088"

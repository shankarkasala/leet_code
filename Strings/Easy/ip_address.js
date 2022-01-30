var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};
// Input: address = "1.1.1.1";
// Output: "1[.]1[.]1[.]1";

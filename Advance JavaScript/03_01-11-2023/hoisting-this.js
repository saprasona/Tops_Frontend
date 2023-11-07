// printNormal();

// function printNormal(params) {
//   console.log("printNormal");
// }

// printFatArrow();
// const printFatArrow : () => {
//   console.log("printFatArrow", printFatArrow);
// };

// -----------------this-------------------
const obj = {
    name: "Sona Sapra",
    printNameFatArrow: () => {
      console.log("my name is ====>", this.name);
    },
    printNameNormalFun: function () {
      console.log("my name is ---->", this.name);
    },
  };
  
  obj.printNameFatArrow();
  obj.printNameNormalFun();
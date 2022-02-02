`use strict`;

function submit() {
    let x = "foo";
    if (x == "foo") {
     let  y = "foo2";  // LET makes it a LOCAL scope, without definining with let or const makes it GLOBAL SCOPE
    }
    console.log(x); //  RETURNS FOO
    console.log(y); // RETURNS REFERENCE ERROR WITH "LET", WITHOUT "LET", RETURNS FOO2
  }
  submit();















// function doSomething() {
//     console.log(a);
//     console.log(foo());
//     let a = 1;
//     function foo() {
//       return 2;
//     }
//   }
//   doSomething();     // ReferenceError: Cannot access 'a' before initialization
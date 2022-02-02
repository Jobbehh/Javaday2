`use strict`;

function submit() {
    let x = "foo";
    if (x == "foo") {
     let  y = "foo2";  // LET makes it a LOCAL scope, without definining with let or const makes it GLOBAL SCOPE
    }
    console.log(x); // 'foo'
    console.log(y); // 'Reference error'
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
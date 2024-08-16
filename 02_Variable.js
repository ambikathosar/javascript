const accountID = 144553
let accountEmail = "ambika@gmail.com"
var accountPassword = "12345"
accountCity ="Jaipur"
let accountState;
// accountId = 2 //not allowed

accountEmail = "at@google.com"
accountPassword = "9876"
accountCity= "Bengluru"

console.log(accountID);

/*
prefer not to use var
beacuse of issue in block scope and functional scope
 */

console.log([accountID,accountEmail,accountPassword,accountCity,accountState])

/*
Let :- can be reassigned after declaration,variable declared with let have a block scope,
variable declared with let musr be declared before use , variable declared with let can not be re-declared
in the same scope

const :- variable defined with const cannot be redeclared,cannont be reassigned ,const have block scope.

var :- can be redeclared have function scope , not block scope
 */
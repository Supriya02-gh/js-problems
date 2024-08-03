//1.write a javascript program to print all natural number from 1 to n using a while loop
// function printNaturalNumbers(n) {
//   let i=1;
//   while(i<=n){
//        console.log(i);
//        i++;
//   }
   
//   }
  
  
//   const n = 10; // You can change this value to any natural number
//   printNaturalNumbers(n);
 

//2.write a javascript program to print all natural number in reverse order from 1 to n using a whiel loop
// function printNaturalNumbers(n) {
//        let i=n;
//         while(i>=0){
//              console.log(i);
//              i--;
//         }
        
//         }
       
       
//         const n = 10; // You can change this value to any natural number
//         printNaturalNumbers(n);

//3.print even numbers between 1 and 100 using a while loop
// function printEvenNumbers(n) {
//         let i=1;
//         while(i<=100){
//             if(i%2==0){
//                console.log(i);
//             }
        
//              i++;
//         }
        
//         }
       
       
//        
//         printEvenNumbers(n);
      

//4.print sum of all odd numbers from1 1 to 100
// function printOddNumbers(n) {
//               let i=1;
//              while(i<=100){
//                  if(i%2!=0){
//                      console.log(i);
//                   }
             
//                   i++;
//              }
             
//               }
            
            
//              // You can change this value to any natural number
//         printOddNumbers(n);

//5.sum of all natural numbers from 1 to n
// function printOddNumbers(n) {
//      let i=1;
//      let sum=0;
//     while(i<=n){
//         sum+=i;
       
//          i++;
//     }
//     console.log(sum); 
// }
   
// const n=10;   
//     // You can change this value to any natural number
// printOddNumbers(n);


//6.find sum of all odd numbers between 1 and n
// function printOddSum(n) {
//      let i=1;
//      let sum=0;
//     while(i<=n){
//      if(i%2==0){
//           sum+=i;
       
//      }
        
//          i++;
//     }
//     console.log(sum); 
// }
   
// const n=10;   
//     // You can change this value to any natural number
// printOddSum(n);

//7.find the sum of all even numbers between 1 to n
// function printEvenSum(n) {
//      let i=1;
//      let sum=0;
//     while(i<=n){
//      if(i%2!=0){
//           sum+=i;
       
//      }
        
//          i++;
//     }
//     console.log(sum); 
// }
   
// const n=10;   
//     // You can change this value to any natural number
// printEvenSum(n);

//8.multiplication table for any number
// function printMult(n) {
//      let i=1;
     
//     while(i<=n){
//      console.log(`${n} x ${i} = ${n * i}`);
//      i++;
// }
// }
   
// const n=10;   
//     // You can change this value to any natural number
// printMult(n);

//9.count number of digits in a number

// function printNo(n) {
//      let i=1;
//      let count=0;

//     while(i<=n){
//       let rem=n%10;
//       count++;
//       n=n/10;
// }
//   console.log(count) ;
// }
   
// const n=10;   
//     // You can change this value to any natural number
// printNo(n);

//10.calculate the sum of digits of a number
// function printDigitSum(n) {
//      let i=1;
//      let digit=0;

//     while(i<=n){
//       let rem=n%10;
//       digit+=rem;
//       n=Math.floo(n/10);
// }
//   console.log(digit) ;
// }
   
// const n=13;   
//     // You can change this value to any natural number
// printDigitSum(n);


//11.to print the product od digts of a number
// function printProductOfDigits(n) {
//      let product = 0;
 
//      while (n > 0) {
//          let rem = n % 10;
//          product *= rem;
//          n = Math.floor(n / 10);
//      }
//      console.log(product);
//  }
 
//  const n = 12; // You can change this value to any natural number
//  printProductOfDigits(n);
 
//12.enter a digit and find its reverse
// function printReverse(n) {
//      let digit = 0;
 
//      while (n > 0) {
//          let rem = n % 10;
//          digit=digit*10+rem;
//          n = Math.floor(n / 10);
//      }
//      console.log(digit);
//  }
 
//  const n = 123; // You can change this value to any natural number
//  printReverse(n);
 
//13.power of a number using for loop

// function power(base, exponent) {
//      let result = 1;
 
//      for (let i = 0; i < exponent; i++) {
//          result *= base;
//      }
//     return result;
 
   
//  }
 
//  const base = 2; // You can change this value to any base number
//  const exponent = 3; // You can change this value to any exponent
//  console.log(`${base}^${exponent} = ${power(base, exponent)}`);

 
//14.find all factors of a number
// function findFactors(num) {
//      if (num <= 0) {
//          console.log("Please enter a positive integer.");
//          return;
//      }
 
//      let factors = ""; // Initialize an empty string to build the result
//      for (let i = 1; i <= num; i++) {
//          if (num % i === 0) {
//              if (factors) {
//                  factors += ", "; // Add a comma for subsequent factors
//              }
//              factors += i; // Append the current factor
//          }
//      }
 
//      console.log(`Factors of ${num}: ${factors}`);
//  }
 
//  const number = 12; // Change this value to test with other numbers
//  findFactors(number);
 

//15.factorial of a number
// function findFactors(n, i = 1) {
//      if (i > n) {
//          return;
//      }
 
//      if (n % i === 0) {
//          console.log(i); // Print the factor
//      }
 
//      // Recursive call with the next number
//      findFactors(n, i + 1);
//  }
 
//  const number = 12; 
//  findFactors(number);
 

//16.lcm of two numbers

// function findLcm( a,b)
// {
//      let gcd=0;
//      while(a>0 &&b>0){
//      if(a>b){
//           a=a%b;

//      }
//      else 
//           b=b%a;
//      }
//      if(a==0){
//          return b;
//      }
//      else{
//           return a;
//      }
    

// }
// const a=2;
// const b=3;
// let ans=findLcm(a,b);
// let lcm=(a*b)/ans;
// console.log(lcm)


//17.a number palindrome or not
// function isPrime(num) {
//      if (num <= 1) return false;
    
//      for (let i = 2; i <= Math.sqrt(num); i++) {
//          if (num % i === 0) return false;
//      }
     
//      return true;
//  }
 
//  // Test the function
//  const number = 29; // Change this value to test with other numbers
//  console.log(`${number} is ${isPrime(number) ? 'prime' : 'not prime'}`);
 


//18.print prime numbers between 1 to n
// function isPrime(num) {
//      if (num <= 1) return false;
//      if (num === 2) return true; // 2 is the only even prime number
 
//      for (let i = 2; i <= Math.sqrt(num); i++) {
//          if (num % i === 0) return false; // Not a prime number
//      }
 
//      return true;
//  }
 
//  function printPrimesUpTo(n) {
//      for (let i = 2; i <= n; i++) {
//          if (isPrime(i)) {
//              console.log(i);
//          }
//      }
//  }
 
//  // Test the function
//  const n = 50; // Change this value to test with other ranges
//  printPrimesUpTo(n);


 //19.sum of prime numbers between 1 and n
//  function isPrime(num) {
     
//      if (num <= 1) return false;
//      if (num === 2) return true; // 2 is the only even prime number
 
//      for (let i = 2; i <= Math.sqrt(num); i++) {
//          if (num % i === 0) return false; // Not a prime number
//      }
   
//      return true;
//  }
 
//  function printPrimesUpTo(n) {
//      let sum=0;
//      for (let i = 2; i <= n; i++) {
//          if (isPrime(i)) {
//           sum+=i;
             
//          }

//      }
//      console.log(sum);
//  }
 
//  // Test the function
//  const n = 50; // Change this value to test with other ranges
//  printPrimesUpTo(n);
 

 



           

      

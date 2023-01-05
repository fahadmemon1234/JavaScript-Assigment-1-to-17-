// ------------------------------------------------------
// Chapter 1
// ------------------------------------------------------

// ALERTS

// Task 1

// alert('Error! Please enter a valid password')


// Task 2

// alert('Welcome to js Land... \nHappy Coding!')

// Task 3

// alert('Welcome to js Land...')

// Task 4

// alert('Happy Coding!')

// Task 5

// alert('Hello... I can run JS through my web browser’s console')


// ------------------------------------------------------
// Chapter 2
// ------------------------------------------------------
// VARIABLES FOR STRINGS 


// // task 1

// var username = prompt("Enter User Name")
// alert(username)


// // task 2

// var myname = prompt("Enter Your Name" , "ahmed")
// alert(myname)

// // task 3

// var message = ("Hello World")
// alert(message)

// // task 4

// var students_bio = ("Fahad Memon")
// alert(students_bio)

// var students_bio1 = ("17 years old")
// alert(students_bio1)

// var students_bio2 = ("Certified Mobile Application Development")
// alert(students_bio2)

// task 5

// alert("PIZZA"+ "\n" +"PIZZ"+ "\n" +"PIZ"+ "\n" +"PI"+ "\n" +"P")



// task 6

// var email = ("My email address is fahadmemon131@gmail.com")
// alert(email)

// task 7

// var book = ("I am trying to learn from the Book A smarter \n way to learn JavaScript")
// alert(book)

// task 8

// document.write("Yah! I can write HTML content through JavaScript");

// task 9 

// var design = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
// alert(design)


// ------------------------------------------------------
// Chapter 3
// ------------------------------------------------------
// VARIABLES FOR NUMBERS 

// task 1

// var age = prompt("Enter Your Age")
// alert("I am " + age + " years Old")


// task 2
// var N = 12;
// var visited = ("You have visited this site " + (N+1) + " times")
// alert(visited)


// task 3
// var Birth = parseInt(prompt("Enter Your Birth"))
// document.write("My birth year is " + Birth)
// document.write("<br> type of " + typeof(Birth))



// task 4


// var Visitorsname = prompt("Enter Visitor’s name")
// var Quantity = prompt("Enter Quantity Shirts")
// var Producttitle = prompt("Enter Clothing Store")

// document.write(Visitorsname + " ordered " + Quantity + " on " + Producttitle)


// ------------------------------------------------------
// Chapter 4
// ------------------------------------------------------
// VARIABLE NAMES: LEGAL & ILLEGAL 

// Task 1

// var a = 10 , b= 5, c=20;

// Task 2

// Legal Variable Name

// My_variable
// $my_variable
// _my_variable
// ABC1
// My_variable_example

// Illegal Variable Name

// 1my_example
// @my_example
// ++my_example
// %my_example
// ~my_example


// Task 3

// document.write("<h1>Rules for naming JS variables</h1>")

// document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable ")

// document.write("<br> Variables must begin with a Letter, $ or _. For example $name, _name or name") 

// document.write("<br> Variable names are case sensitive ") 

// document.write("<br> Variable names should not be JS keywords ") 

// ------------------------------------------------------
// Chapter 5
// ------------------------------------------------------

// MATH EXPRESSIONS 


// Task 1

// var a = prompt("Enter Number")

// var b = prompt("Enter Number")

// var sum = a + b

// document.write("Sum of " + a + " and " + b + " is " + sum)

// Task 2

// subtraction

// var a = prompt("Enter Number")

// var b = prompt("Enter Number")

// var subtraction = a - b

// document.write("subtraction of " + a + " and " + b + " is " + subtraction)

// multiplication

// var a = prompt("Enter Number")

// var b = prompt("Enter Number")

// var multiplication = a * b

// document.write("multiplication of " + a + " and " + b + " is " + multiplication)

// division

// var a = prompt("Enter Number")

// var b = prompt("Enter Number")

// var division = a / b

// document.write("division of " + a + " and " + b + " is " + division)

// modulus

// var a = prompt("Enter Number")

// var b = prompt("Enter Number")

// var modulus = a % b

// document.write("modulus of " + a + " and " + b + " is " + modulus)


// Task 3

// var a = ("Value after variable declaration is " + b)
// var b 
// var c = prompt("Enter Initial value: ")
// var d = ("<br>  Initial value: " +c)
// var f = ++c
// var e = ("<br>  Value after increment is: " +f);
// var g = c + 7
// var h = ("<br>  Value after addition is: " +g);
// var i = --g
// var j = ("<br>  Value after decrement is: " +i);
// var s = ("<br> The remainder is : " + i% 3);



// document.write(a)
// document.write(d)
// document.write(e)
// document.write(h)
// document.write(j)
// document.write(s)


// Task 4


// var ticket =prompt("Enter ticket")
// var inp = ticket*300
// document.write("Total Cost to buy " + ticket + " tickets to a movie is " +inp + " PKR ")

// Taks 5

// var table = prompt("Enter table")

// document.write(table  + " x " + 1 + " = " + table*1)
// document.write("<br>" +table  + " x " + 2 + " = " + table*2)
// document.write("<br>" +table  + " x " + 3 + " = " + table*3)
// document.write("<br>" +table  + " x " + 4 + " = " + table*4)
// document.write("<br>" +table  + " x " + 5 + " = " + table*5)
// document.write("<br>" +table  + " x " + 6 + " = " + table*6)
// document.write("<br>" +table  + " x " + 7 + " = " + table*7)
// document.write("<br>" +table  + " x " + 8 + " = " + table*8)
// document.write("<br>" +table  + " x " + 9 + " = " + table*9)
// document.write("<br>" +table  + " x " + 10 + " = " + table*10)

// Task 6


// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//   document.write(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     document.write("<br>" + message);
// } 
// cToF(25);
// fToC(70);

// Task 7


// document.write("<h1>Shopping Cart</h1>")

// var priceitem1 = 650;
// var priceitem2 = 100;
// var order1 = prompt("Ordered quantity of item 1")
// var order2 = prompt("Ordered quantity of item 2")
// var Shipping = 100
// var total = priceitem1 * order1 + priceitem2 * order2 + Shipping;

// document.write("Price of item 1 is : " +priceitem1)
// document.write("<br> Quantity of item 1 is : " +order1)
// document.write("<br> Price of item 2 is : " +priceitem2)
// document.write("<br> Quantity of item 2 is : " +order2)
// document.write("<br> Shipping Charges : " +Shipping)

// document.write("<br> <br> Total cost of your order is : " +total)




// Task 8

// document.write("<h1>Marks Sheet</h1>")

// var Total = 980;
// var obtained = 804
// var Percentage = obtained/980*100

// document.write("Total Marks: " + Total)
// document.write("<br> Obtained Marks: " +obtained)
// document.write("<br> Percentage: " +Percentage)


// Task 9

// document.write("<h1>Currency in PKR</h1>")
// var Dollars = prompt("Enter Quantity Doller");
// var riyal = prompt("Enter Quantity  Saudi Riyal ");

// var pkr = (Dollars * 104.80) + (riyal * 28)

// document.write("Total Currency in PKR: " + pkr)

// Task 10


// var num = prompt("Enter Number");
// var  total = ((parseInt(num)+5)*(10))/2
// document.write(total)

// Task 11

// document.write("<h1>Age Calcultor</h1>")

// var CurrentYear = 2022;
// var BirthYear  = 2005;
// var age  = CurrentYear - BirthYear;

// document.write("Current Year: " + CurrentYear)
// document.write("<br> BirthYear Year: " + BirthYear)
// document.write("<br> Your Age is: " + age)

// Task 12

// document.write("<h1>The Geometrizer</h1>")

// var radius = 20;
// var circumferenceOfCircle = 2 * Math.PI * radius;
// var area  = Math.PI * radius * radius

// document.write("Radius of a Circle: "+ radius)
// document.write("<br> The Circumference is: " + circumferenceOfCircle);
// document.write("<br> The area is: "+ area)

// Task 13

// document.write("<h1> The Lifetime Supply Calculator</h1>")

// var snack = ("Chocolate Chip")
// var age = 15;
// var maxage = 65;
// var perday = 3;

// var total = (perday * 365) * (maxage - age);

// document.write("Favourite Snack: " + snack)
// document.write("<br> Current age: " + age)
// document.write("<br> Estimate Maximum Age: " + maxage)
// document.write("<br> Amount of Snack Per Day: " + perday)
// document.write("<br> You will need " + total + " Chocolate Chip to last you until the ripe old age of " + maxage)


// ------------------------------------------------------
// Chapter 6 to 9
// ------------------------------------------------------

// MATH EXPRESSIONS 


// Task 1 


// document.write("<h1>Result:</h1>")
// var a = 10;
// document.write("The Value of a is: " +a)

// document.write("<br>-----------------------------------------------")

// document.write("<br> <br> The Value ++a is: " , ++a)
// document.write("<br>Now the Value of a is: " +a)

// document.write("<br> <br> The Value a++ is: " , a++)
// document.write("<br>Now the Value of a is: " +a)

// document.write("<br> <br> The Value --a is: " , --a)
// document.write("<br>Now the Value of a is: " +a)

// document.write("<br> <br> The Value a-- is: " , a--)
// document.write("<br>Now the Value of a is: " +a)


// Task 2


// var a = 2, b = 1; 

// --a;
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 

// document.write("<br> a is: 4")

// document.write("<br> b is: 3")

// var result = parseInt( 1 - 0 + 1 + 1); 

// document.write("<br>Result: " +result)


// Task 3

// var name = prompt("Enter Name")

// document.write("Greet " + name)
// document.write("<br> Your Name: " + name)


// Task 4

// var table = prompt("Enter Table number")

// if(table !=""){
//  for(i =1; i <=10; i++){  

//     document.write("<br>" +table + " x " + i + " = " + table*i)
 
//  }
// }

// else{
//     for(i =1; i <=10; i++){  

//         document.write("<br>" +5 + " x " + i + " = " + 5*i)
     
//      }
// }


// Task 5


// var eng = parseInt(prompt("Enter English Maks"))


// if(eng>=0 && eng<=100){

// var urdu = parseInt(prompt("Enter Urdu Maks"))
// if (urdu >=0 && urdu<=100){
    
 
    
// var Math = parseInt(prompt("Enter Math Maks"))
// if (Math>=0 && Math<=100){
 
//     var res = eng+urdu+Math
//     var per = res/300*100




//     document.write("<table>")
//     document.write("<tr> <th> Subject </th>")
//     document.write("<th> Total Marks </th>")
//     document.write("<th> Obtained Marks </th>")
//     document.write("<th> Percentage </th>")
//     document.write("</tr>")

//     document.write("<tr> <th> Eng </th>")
//     document.write("<th> 100 </th>")
//     document.write("<th>" + eng + "</th>")
//     document.write("<th>" + eng + "% </th>")
//     document.write("</tr>")

//     document.write("<tr> <th> Urdu </th>")
//     document.write("<th> 100 </th>")
//     document.write("<th>" + urdu + "</th>")
//     document.write("<th>" + urdu + "% </th>")
//     document.write("</tr>")

//     document.write("<tr> <th> Math </th>")
//     document.write("<th> 100 </th>")
//     document.write("<th>" + Math + "</th>")
//     document.write("<th>" + Math +"% </th>")
//     document.write("</tr>")

//     document.write("<tr> <th>  </th>")
//     document.write("<th> 300 </th>")
//     document.write("<th>" + res + "</th>")
//     document.write("<th>" + per +"% </th>")
//     document.write("</tr>")

//     document.write("</table>")
// }
// }

// else{
//     document.write("<br> Your Enter Incorrect Urdu Marks")
// }

// }

// else{
//     document.write("Your Enter Incorrect English Marks")
// }


// ------------------------------------------------------
// Chapter 9 to 11
// ------------------------------------------------------


// Task 1


// var city =  prompt("Enter City Name")

// if(city == "Karachi"){
//     alert("Welcome to city of lights")
// }

// else if (city !=""){
//     alert("Welcome to city")
// }


// else{
//     alert("Incorrect Value")
// }


// Task 2

// var gender = prompt("Enter Your Gender")

// if(gender == "Male".toLowerCase()){
//     alert("Good Morning Sir")
// }

// else if (gender == "Female".toLowerCase()){
//     alert(" Good Morning Ma’am")
// }


// else{
//     alert("Incorrect Value")
// }


// Task 3

// var Color = prompt("Enter Traffic Color")


// if(Color == "Red".toLowerCase()){
// var message = "Must Stop"

// var Color1 = prompt("Enter Traffic Color")
// if (Color1 == "Yellow".toLowerCase()){
//     var message1 = "Ready to Move"   
 
    
// var Color2 = prompt("Enter Traffic Color")
// if (Color2 == "Green".toLowerCase()){
//     var message2 = "Move Now"




//     document.write("<table>")
//     document.write("<tr> <th> Traffic Color </th>")
//     document.write("<th> Message </th>")
//     document.write("</tr>")

//     document.write("<tr>")
//     document.write("<th>" + Color + "</th>")
//     document.write("<th>" + message + "</th>")
//     document.write("</tr>")

//     document.write("<tr>")
//     document.write("<th>" + Color1 + "</th>")
//     document.write("<th>" + message1 + "</th>")
//     document.write("</tr>")

//     document.write("<tr>")
//     document.write("<th>" + Color2 + "</th>")
//     document.write("<th>" + message2 +"</th>")
//     document.write("</tr>")

//     document.write("</table>")
// }
// }

// else{
//     document.write("<br> Incorrect Color")
// }

// }

// else{
//     document.write("Incorrect Color")
// }



// Task 4

// var fuel = prompt("Enter Fuel litres")

// if(fuel != 0.25){
//     document.write("Your fuel is Greater Than 0.25 litres")
// }

// else{
//    document.write("Please refill the fuel in your car")
// }


// Task 5

// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true); 
// }

// var b = 82; 
// f (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// if (c === 13){
//      alert("condition 2 is true"); 
//     } 
//     if (++c < 14){ 
//         alert("condition 3 is true"); 
//     } 
//     if(c === 14){ 
//         alert("condition 4 is true");
//      }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }


// if (true){ 
//     alert("True");
//  } 
//  if (false){ 
//     alert("False"); 
// }

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }  

// Task 6
// document.write("<h1>Marks Sheet</h1>")
// var English = parseInt(prompt("Enter your English Marks"));
// var Urdu = parseInt(prompt("Enter your Urdu Marks"));
// var Math = parseInt(prompt("Enter your Math Marks"));

// var Obtained = English + Urdu + Math;
// var Percentage = Obtained/300*100

// if(Percentage >= 80){
//     var Grade = "A-one";
//     var Remarks = "Excellent";
// }

// else if(Percentage >= 70){
//     var Grade = "A";
//     var Remarks = "Good";
// }

// else if(Percentage >= 60){
//     var Grade = "B";
//     var Remarks = "You Need to Improve";
// }

// else if(Percentage < 60){
//     var Grade = "Fail";
//     var Remarks = "Sorry";
// }

// document.write("Total Marks : 300");
// document.write("<br> Obtained_Marks : " + Obtained);
// document.write("<br> Precentage : " + Percentage +"%");
// document.write("<br> Grade : " + Grade);
// document.write("<br> Remarks : " + Remarks);


// Task 7

// var num = 1
// var num1 = prompt("Enter num ranging from 1 to 10")

// if(num1 == num){
//     alert("Bingo! Correct answer")
// }

// else if(num1 == num + 1){
//  alert("Close enough to the correct answer")   
// }

// else{
//     alert("Try Again !")
// }


// Task 8


	// var num = prompt("Enter a number: ");
	
	// if(num%3==0)
	// {
	// 	alert(num +" is divisible by 3");
	// }
	// else
	// {
	// 	alert(num +" is not divisible by 3");
	// }


    // Task 9

    // var num = prompt("Enter even or odd Number")

    // if(num%2==0){
    //     alert("Given is Even Number")
    // }
    // else{
    //     alert("Given is Odd Number")
    // }

    // Task 10

    // var temp = prompt("Enter Weather Temperature 10 to 40")

    // if(temp > 40){
    //     alert("It is too hot outside")
    // }
    
    // else if(temp > 30){
    //     alert("The Weather today is Normal")
    // }

    // else if(temp > 20){
    //     alert("Today’s Weather is cool")
    // }

    // else if(temp > 10){
    //     alert("“OMG! Today’s weather is so Cool")
    // }

    // else{
    //     alert("Incorrect Num")
    // }



    // Task 11 


//     var i=0
// while(i==0){
//     inp1= parseInt(prompt("Enter 1 number : "))
//     inp2=  parseInt(prompt("Enter 2 number : "))
//     op = prompt("Enter Op : +,-,*,/,%")
//     if(op=="+"){
//         alert("Value of 1 : "+inp1+"\n Value of 2 : "+inp2+"\n Result : "+(inp1+inp2))
//     }
//     else  if(op=="-"){
//         alert("Value of 1 : "+inp1+"\n Value of 2 : "+inp2+"\n Result : "+(inp1-inp2))
//     }
//     else  if(op=="*"){
//         alert("Value of 1 : "+inp1+"\n Value of 2 : "+inp2+"\n Result : "+(inp1*inp2))
//     }
//     else  if(op=="/"){
//         alert("Value of 1 : "+inp1+"\n Value of 2 : "+inp2+"\n Result : "+(inp1/inp2))
//     }
//     else  if(op=="%"){
//         alert("Value of 1 : "+inp1+"\n Value of 2 : "+inp2+"\n Result : "+(inp1%inp2))
//     }
//     else{
//         console.log("invalid op")
//     }
//     i=prompt("enter 0 if run again or enter N not rum")
// }



// ------------------------------------------------------
// Chapter 12 to 13
// ------------------------------------------------------


// Task 1


// var ch = prompt("Enter Alphabate Character")    
     
//         if (ch >= 'A' && ch <= 'Z'){
//             alert("\n" + ch + " is an UpperCase character");
//         }
     
//         else if (ch >= 'a' && ch <= 'z'){
//             alert("\n" + ch +  " is an LowerCase character" );
//         }
//         else{
//             alert("\n" + ch + " is not an aplhabetic character" );
//         }

// Task 2

// var a = prompt("Enter Number")
// var b = prompt("Enter Number")

// if (a > 0 && b > 0 && a > b) {
//     alert("The larger number is " + a );
//   } else if (a > 0 && b > 0 && a < b) {
//     alert("The larger number is " + b);
//   } else if (a === b && a > 0 && b > 0) {
//     alert("Both numbers are equal!")
//   } else {
//       alert("Please add an integer!");

//   }
    
        
// Task 3

// var number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         alert("The number is zero");
//     } else {
//        alert("The number is positive");
//     }
// } else {
//     alert("The number is negative");
// }


// Task 4

// var vowel = prompt("Enter Alphabet vowel or consonant")

//  if (vowel.toLowerCase() == 'a' || vowel.toLowerCase() == 'e' || vowel.toLowerCase() == 'i' || vowel.toLowerCase() == 'o' || vowel.toLowerCase() == 'u'){
//      alert(vowel + " is a vowel")
//  }

//  else {
//      alert(vowel + " is a consonant.")
//  }


// Task 5

// var pass = "Smit";
// var pass1 = prompt("Enter his/her password")

// if(pass == pass1){
//     alert("Correct! The password you entered matches the original password")
// }

// else if(pass1 != ""){
//     alert("Incorrect password")

// }
// else{
//     alert("Please enter your password")
// }



//Task 6

// var greeting; 
// var hour = 13; 
// if (hour < 18) 
// {
//     greeting = "Good day"; 
// }

// else {
//     greeting = "Good evening";
//  }    



//Task 7

// var time = prompt("Enter 12 to 24 Hours in four digit number")

// if(time == "1900"){
// alert("7pm")
// }

// else if(time >= 0000  && time < 1200){
//     alert("Good Morning!")
// }

// else if(time >= 1200  && time < 1700){
//     alert("Good Afternoon!")
// }

// else if(time >= 1700  && time < 2100){
//     alert("Good Evening!")
// }

// else if(time >= 2100  && time <= 2359){
//     alert("Good Night!")
// }
// else{
//     alert("Incorrect Number")
// }





// ------------------------------------------------------
// Chapter 14 to 16
// ------------------------------------------------------


//Task 1

// var arrayName = [];


//Task 2
// var futureArr = [];


 //Task 3 
// var arr = ["ahmed","khan"]
// console.log(arr)

// Task 4
// var arr = [1,2,3,4]
// console.log(arr)

// Task 5

// var boolArray = [true,false];
// console.log(boolArray);

// Task 6

// var arr = [1,"Hamza",2,"true","Zohaib",3]
// console.log(arr)

// Task 7

// var qualifiation = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
// console.log(qualifiation)

// Task 8

// var array = ["Ahmed", "Bilal", "Ali"]
// var mark = [200, 300, 400]
// var total =  500;

// document.write("Score of " +array[0]+ " is " +mark[0]+ " Percentage is " +mark[0]/total*100+"%")
// document.write("<br> Score of " +array[1]+ " is " +mark[1]+ " Percentage is " +mark[1]/total*100+"%")
// document.write("<br> Score of " +array[2]+ " is " +mark[2]+ " Percentage is " +mark[2]/total*100+"%")

// Task 9

// Answer a first add in array
// var arr =["Red", "Yellow", "Green"];
// var color = prompt("Enter Color add in First")
//     arr.unshift(color);
// document.write(arr);

// ------------------------------------
// Answer b end add in array

// var arr =["Red", "Yellow", "Green"];
// var color = prompt("Enter Color add in First")
//     arr.push(color);
// document.write(arr);

// ------------------------------------
// Answer c add two more color in array

// var arr =["Purple","Blue","Red", "Yellow", "Green"];
// document.write(arr);

// ------------------------------------
// Answer d Delete the first color in the array

// var arr =["Purple","Blue","Red", "Yellow", "Green"];
// var beat = arr.slice(1,5)
// console.log(beat);

// ------------------------------------
// Answer e  Delete the last color in the array

//  var arr =["Purple","Blue","Red", "Yellow", "Green"];
//  var beat = arr.slice(-5,-1)
//  console.log(beat);

// ------------------------------------
// Answer f  

// var arr =["Purple","Blue","Red", "Yellow", "Green"];
// var color = prompt("Enter color name");
// var push = prompt("Enter position");
// arr.splice(push, 0, color);
// document.write(arr);

// -------------------------------------
// Answer g



// Task 10

// var arr1=[-3,8,7,6,5,-4,3,2,1];
// var arr2=[];
// var min=arr1[0];
// var pos;
// var max=arr1[0];
// for (i=0; i<arr1.length; i++)
// {
//         if (max<arr1[i]) max=arr1[i];
// }

// for (var i=0;i<arr1.length;i++)
// {
//         for (var j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j]) 
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
// }

// var arr3=[-3,8,7,6,5,-4,3,2,1];
// document.write(arr3 , "<br><br>")
// document.write("Ascending Order <br>",arr2)

// Task 11

// var arr = ["Karachi", "Hyerabad" , "Quetta", "Mumbai", "Kolkatta" , "Lucknow"]

// document.write("Cities List: <br>" + arr)
// document.write("<br>")
// document.write("<br>Select List: <br>" + arr.slice(2,4))


// Task 12

// var arr = ["This" , "is" , "my", "cat"]; 
// console.log(arr)
// console.log(arr.join())

// Task 13

// var q = ["Keyboard", "Mouse", "Printer", "Moniter"];

// document.write("Devices:<br>" + q.join(", ")+"<br>");
// document.write("<br>");

// for (var i = 0; i < 4; i++){

// var removedele = q.shift();
// document.write("Out:<br>" + removedele+"<br>");

// }


// Task 14


// var q = ["Keyboard", "Mouse", "Printer", "Moniter"];
// var reverse = [];

// document.write("Devices:<br>" + q.join(", ")+"<br>");
// document.write("<br>");
// q.reverse();
// for(var i = q.length -1; i >= 0; i--) {
//  var removedele = q.shift();
//   document.write("Out:<br>" + removedele +"<br>");
// }

// Task 15

// var Company = document.getElementById("Company");

// var company_list = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"]

// for(var i of company_list){
//     Company.innerHTML +="<option>" +i+ "</option>"
// }

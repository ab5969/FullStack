// console.log("Hello JS 1");
// let rectangle={
//      length:1,
//      breadth:2,

//      draw:function(){
//         console.log("this function is used in drawing");
//      }
// };

// function createRectangle(len,bre){
//     return  rectangle={
//             length:len,
//             breadth:bre,

//             draw:function(){
//             console.log("this function is used in drawing");
//             }
// }
// };

// let rectangle1=createRectangle(2,3);

// //constructor function
// function Rectangle(len,bre){
//     this.length=len,
//     this.breadth=bre,
//     this.draw=function(){
//         console.log("this function is used in drawing");
//     }
// }
// //object creation using constructor
// let obj1=new Rectangle(2,3);

// obj1.length // 2 

// obj1.color='yellow';
// console.log(obj1);//Rectangle {length: 2, breadth: 3, color: 'yellow', draw: ƒ}
// //deletion
// delete obj1.color; 
// console.log(obj1);// Rectangle {length: 2, breadth: 3, draw: ƒ}

// let a=10;
//       function inc(a){
//         a++;
//       }
//       inc(a);
//       console.log(a);//10 as when there is function call a copy is created 

    //   let a={value:10};
    //   function inc(a){ 
    //      a.value++;//a=11
    //    }
    //    inc(a);
    //    console.log(a);

    //    let rectangle={
    //     length:1,
    //     breadth:2
    // };
    // for(let key in rectangle){
    //   console.log(key,rectangle[key]);//length 1 breadth 2
    // }


    // let rectangle={
    //     length:1,
    //     breadth:2
    // }
    // for(let key of Object.entries(rectangle)){
    //   console.log(key);//length:1 breadth:2
    // } 

    // let rectangle={
    //     length:1,
    //     breadth:2
    // }
    // if('length' in rectangle)console.log('present');
    // else console.log('absent');//present

    // let src={
    //     a:10,
    //     b:5
    //    };
    //    let dest={};
    //    for(key in src){
    //     dest[key]=src[key];
    //    }
    //    console.log(dest);//a: 10, b: 5}


    // let src={
    //     a:11,
    //     b:3
    //    };
    // let dest={...src};
    // console.log(dest);//a: 11, b: 3}

    // let src={
    //     a:12,
    //     b:5
    //    };
    // let dest=Object.assign({},src);
    // console.log(dest);//a: 11, b: 3}


    // let lastName = 'Singh'; // as a string
    //             let firstName = new String('Abhinav');
  
    // let message='Hello my name is ABHINAV SINGH ';
    // let words = message.split(' ');
    // console.log(words);//(7) ['Hello', 'my', 'name', 'is', 'ABHINAV', 'SINGH', ''] 
    // or 
    // // 0: "Hello"
    // // 1: "my"
    // // 2: "name"


    // let str1 = 'Hello \n my name is abhinav singh';
    // console.log(str1);

    // let name='abhinavsingh';
    // let sname = `hello ${name}`;
    // console.log(sname);//hello abhinavsingh


    // let date = new Date(); 
    // console.log(date);//Thu May 23 2024 16:23:48 GMT+0530 (India Standard Time)
    // date.setTime(2020);
    // console.log(date);

    // let numbers=[1,2,3,4,5];
    // numbers.splice(2,3,'a','b');
    // console.log(numbers);

    // let numbers=[1,2,3,4,5];
    // console.log(numbers.indexOf(3));
    // console.log(numbers.indexOf(6));//-1
    // console.log(numbers.includes(3));//true 
    // console.log(numbers.includes(7));

//     let names=[               //names is an array of objects
//         {sno:1,name:'Abhinav'},
//         {sno:2,name:'Singh'}
// ]; 
      
    //   let x= names.find(function(eachname){ //considering an individual array name as eachname
    //     return eachname.name=="Abhinav";
    //   });
    //above both the functions are equivalent and in the below one we have used arrow function =>
    // let x= names.find(eachname=> eachname.name=="Abhinav" );//considering an individual array name as eachname
     
    //   console.log(x);
    // let number1= [1,2,3];
    // let number2= [4,5,6];
    // let combined= [...number1,...number2];
    // console.log(combined);
    // let combined1= [...number1,'a',...number2, 'b'];
    // console.log(combined1); 

    // let arr=[1,2,3,4,5];
    // arr.forEach(function(number){
    //     console.log(number);
    // })
    // arr.forEach(number=>  console.log(number) );

//     let numbers =[1,2,3,4,5];
//    let joined=numbers.join('+');
//    console.log(joined); // 1+2+3+4+5

//    let message= 'Hello my name is Abhinav Singh';
//    let splitting  =  message.split(' ');
//    console.log(splitting);//['Hello', 'my', 'name', 'is', 'Abhinav', 'Singh'] // forms an array of strings

    // let arr=[-1,-2,3,4,0];
    // let filtered1=arr.filter(function(value){
    //   return value>0;
    // });

    // let filtered2=arr.filter(value => value>0);

    // console.log(filtered1);// 3 4
    // console.log(filtered2);// 3 4

    // let arr = [3,4,5,6,7];
    // let items = arr.map(function(value){
    //   return 'ABHINAVcnt' + value ;
    // });
    // console.log(items);

    // let arr=[2,5,-2,-3];
    // let filtered= arr.filter(value => value>0);
    // console.log(filtered);//[2,5]
    // let items = filtered.map(num => {value:num} ); //we have mapped array elements [] with objects 
    // //in place of filtered we could copy the let filtered= arr.filter(value => value>0);  value in items and this is 
    // //   known as chaining and both are equivalent things

    // let arr=[2,5,-2,-3];
    // let items = arr.filter(value => value>0).map(num => {value:num} ); 
      
   
    // console.log(items);//

    // function sum(a,b){
    //     console.log(arguments);
    //     return a+b;
    //   }
    
    //   sum(1,2);//Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    //   sum(1,2,3,4,5,6);//Arguments(6) [1, 2, 3, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]

    // function sum(a,b){
    //     let total=0;
    //     for(let value of arguments){
    //      total=total+value;
    //     }

    //    return total;
    //    }

    //  console.log(sum(1,2,3,4,5,6));//21 [ ie 1+2+3+4+5+6]

    // function sum(...args){
    //     console.log(args);
       
    //   }

    //   sum(1,2,3,4,5,6,7);//[1, 2, 3, 4, 5, 6, 7] stores numbers in the form of arrays


    // function interest(p,r=8,t=2){
    //     console.log(p*r*t/100);
    // } 
    // interest(1000);   //160
    
    let person ={
        fname:"Abhinav",
        lname:"Singh"
    };
//one way to access fname and lname
    console.log(`${person.fname} ${person.lname}`); //Abhinav Singh
    //we cant evrytime write the same thing to access the fname and lname instead we can create a function as:
    function fullname(){
        return `${person.fname} ${person.lname}`;
    } ;
    
    let obj = fullname();
    console.log(obj);// Abhinav Singh

    // now we can write the above function using getter inside the person block 
    //but these functions only us to access the data and let us modify it , so we can modify it using setter functions

       let person ={
        fname:"Abhinav",
        lname:"Singh",

        get fullname(){
            return `${person.fname} ${person.lname}`;
        } ,

        set fullname(value){
            let parts=value.split(' ');
            this.fname=parts[0];
            this.lname=parts[1];
        }


    };

    person.fullname='MrX Lewis';
    console.log(person.fullname); //MrX Lewis






   



   

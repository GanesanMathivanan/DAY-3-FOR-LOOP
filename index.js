// FOR LOOP

for (let i=1; i<=15; i++){
if(i%2!==1)  {

    console.log("odd number ",i)}
};

// WHILE LOOP

let i=15;
while (i>=1){
    if(i%2 !==1)  {
        console.log("odd number ",i)
        i--;
    }
    };

let i=1;
while (i<=15){
    if(i%2 ==0)  {
        console.log("odd number ",i)
       
    }
    i++;
    };
    
    
// FOR IN LOOP

let value ={
    name : 'anbu',
    age : 30 ,
    sex : 'male'
};

for (let lop in value ){
//    console.log('lop:',lop); or
    console.log(lop + ":" ,value[lop]) 
}

// FOR IN LOOP USING ARRAY

let colours = ['red','orange','blue','green'];
for(let loop in colours){
    console.log(loop,':' ,colours[loop])
}

// FOR OF LOOP USING ARRAY

let colours = ['red','orange','blue','green'];
for(let colour of colours){
    console.log('colour:'+ colour)
}
;
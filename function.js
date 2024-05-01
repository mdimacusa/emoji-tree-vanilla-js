const height = document.getElementById("inputNumber");
const element = document.getElementById("myBtn");
const output = document.getElementById("output");
const myFunction = () => {
    let text="";
    let emoji =['&#x1F332;','&#x1F976;','&#x1F48E;','&#x1F680;','&#x1F47D;','&#x1F385;','&#x1F608;','&#x1F60E;','&#x1F607;','&#x1F60D;','&#x1F631','&#x1F6A9;','&#x1F6B4','&#x1F6F5;'];
    
      for(let i=0;i<height.value;i++){
        //shuffle emoji every execute
        const shuffle = Array.from({ length: 2*i+1 }, () => emoji[Math.floor(Math.random() * emoji.length)]);
        let stars = shuffle.join('');
          
        let space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".repeat(height.value - i - 1);
        text += `${space}${stars}<br>`;
      }
  output.innerHTML=text;
}
const autoPlay = () => {
  if(height.value===""||height.value==0){
    alert("Invalid input!");
    height.value="";
    exit;
  }
  setInterval(myFunction, 2000); 
}
element.addEventListener("click", autoPlay);
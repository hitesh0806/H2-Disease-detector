let locstor_getitem_1=JSON.parse(localStorage.getItem('logged_in_details'));
let profile_ = 0;
function profile(){
    if(profile_=== 1){
        console.log(locstor_getitem_1)
        document.querySelector('#content_2').innerHTML=
        `<h2>Hello ${locstor_getitem_1.name_}, u've come this far, u're doing correct, wait for me to update further</h2>
        <h4>Name: ${locstor_getitem_1.name_}</h4>
        <h4>Phone no.: ${locstor_getitem_1.number}</h4>
        <h4 style:"font-style:bold">Address: ${locstor_getitem_1.address}</h4>
        <h4>E-mail: ${locstor_getitem_1.e_mail}</h4>
        <h4>Password: ${locstor_getitem_1.password}</h4><br>`;
        document.querySelector('#profile_btn').innerHTML='Hide profile';
        profile_ = 0;
    }
        else if(profile_ === 0){
          document.querySelector('#content_2').innerHTML='';
          document.querySelector('#profile_btn').innerHTML='Show profile';
          profile_=1;
        }
}

profile();

let x, y, z, i;
let symptoms_1 = [];
let symptoms_2 = [];

let disease = [];
let possible_disease = [];

/*function answer(btn, symptom, response){
   x = symptom;
   y = response;
   x_y = x + y;
   z = x_y;
  btn.style.backgroundColor = "green";  // or any color you like
  if(z === 'feveryes'){
    symptoms_1.push(x);
  }else{
    symptoms_2.push(x)
  }
  console.log(symptoms_1, symptoms_2);
}
function finalAnswer(){
console.log('final answer', symptoms_1, symptoms_2)
}*/
document.querySelectorAll('.yesBtn').forEach((button) => {
  button.addEventListener( 'click', () => {
    let x = button.dataset.symptom;
    symptoms_1.push(x)
    console.log(symptoms_1, symptoms_2)
  })
})

document.querySelectorAll('.noBtn').forEach((button) => {
  button.addEventListener( 'click', () => {
    let x = button.dataset.symptom;
    symptoms_2.push(x)
    console.log(symptoms_1, symptoms_2)
  })
})
function finalAnswer(){
 /*for(i=0; i<symptoms_1.length; i++){
  document.querySelector("#symptoms_2").innerHTML=`
  <button>${symptoms_1[i]}</button>
  `;
  if(symptoms_1[i]==='fever'){
  common_cold.push(symptoms_1[i]);
  dengue.push(symptoms_1[i]);
  migrane.push(symptoms_1[i]);
  food_poisoning.push(symptoms_1[i]);
  }
  if(symptoms_1[i]==='nausea'){
  dengue.push(symptoms_1[i]);
  migrane.push(symptoms_1[i]); 
  food_poisoning.push(symptoms_1[i]);
  }
  if(symptoms_1[i]==='body_pain'){
  common_cold.push(symptoms_1[i]);
  dengue.push(symptoms_1[i]);   
  }
  if(symptoms_1[i]==='headache'){
  common_cold.push(symptoms_1[i]);
  dengue.push(symptoms_1[i]);
  migrane.push(symptoms_1[i]);
  dehydration.push(symptoms_1[i]);
  }
  if(symptoms_1[i]==='cough'){
    common_cold.push(symptoms_1[i]);
    asthma.push(symptoms_1[i]);
  }
  if(symptoms_1[i]==='fatigue'){
    common_cold.push(symptoms_1[i]);
    dengue.push(symptoms_1[i]);
    dehydration.push(symptoms_1[i]);
  }
}
disease.push(common_cold,migrane,dehydration,dengue,food_poisoning,asthma);
//console.log(disease)
nxt();*/
}

/*function nxt(){
disease.forEach((element) => {
  //console.log('heyy', element);
if(element.length >= 5){
  possible_disease.push(element[0])
}
})
console.log('heyy', possible_disease);
}*/


 







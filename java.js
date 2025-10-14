let locstor_getitem=JSON.parse(localStorage.getItem('personal_details'))||[];
let locstor_getitem_med_details=JSON.parse(localStorage.getItem('medical_details'))||[];
let _gender;
let _group;
let _allergie;
let _history;
let _medi;
let i;


/*function create_1()
{
  locstor_getitem=JSON.parse(localStorage.getItem('details'))||[];
let board_1=document.getElementById('board_10');
let board_2=document.getElementById('board_12');
let board_3=document.getElementById('board_uni_ug');
let board_4=document.getElementById('board_uni_pg');
let p_o_s=document.getElementById('placeofstudy');

const educational_qualification = edu_qul_1 ? edu_qul_1 : '';
const board_10_value = board_1 ? board_1.value : '';
const board_12_value = board_2 ? board_2.value : '';
const ug_value = board_3 ? board_3.value : '';
const pg_value = board_4 ? board_4.value : '--';  
const place_of_study = p_o_s ? p_o_s.value : '';
const experience = exp ? exp : '';
const Role = role ? role : '';

 if (locstor_getitem.length > 0) {
    const lastIndex = locstor_getitem.length - 1;
    locstor_getitem[lastIndex].educational_qualification = educational_qualification;
    locstor_getitem[lastIndex].board_10_value = board_10_value;
    locstor_getitem[lastIndex].board_12_value = board_12_value;
    locstor_getitem[lastIndex].ug_value = ug_value;
    locstor_getitem[lastIndex].pg_value = pg_value;
    locstor_getitem[lastIndex].place_of_study = place_of_study;
    locstor_getitem[lastIndex].experience = experience;
    locstor_getitem[lastIndex].Job_role = Role;
  }
          let divcontent='';
for(i=0; i<locstor_getitem.length; i++)
        {
            const {educational_qualification,board_10_value,board_12_value,ug_value,pg_value,place_of_study,experience,Job_role}=locstor_getitem[i];
            const html=`
            <p>${educational_qualification}</p><p>${board_10_value}</p><p>${board_12_value}</p><p>${ug_value}</p><p>${pg_value}</p><p>${place_of_study}</p><p>${experience}</p><p>${Job_role}</p>
            `;
            divcontent+=html;
        }
localStorage.setItem('profiles',JSON.stringify(locstor_getitem));
alert('Details added!!')
}*/
function create()
{
    const spec_numb = Date.now() + Math.random();
    locstor_getitem=JSON.parse(localStorage.getItem('personal_details'))||[];
          const inputelement_1=document.querySelector('#name');
          const inputelement_2=document.querySelector('#number');
          const inputelement_3=document.querySelector('#address');
          const inputelement_4=document.querySelector('#e-mail');
          const inputelement_5=document.querySelector('#password');
          const inputvalue_1=inputelement_1.value;
          const inputvalue_2=inputelement_2.value;
          const inputvalue_3=inputelement_3.value;
          const inputvalue_4=inputelement_4.value;
          const inputvalue_5=inputelement_5.value;
          locstor_getitem.push({
            name_:inputvalue_1,
            number:inputvalue_2,
            address:inputvalue_3,
            e_mail:inputvalue_4,
            password:inputvalue_5,
            user_number:String(spec_numb),
            });
          console.log(locstor_getitem);
        localStorage.setItem('personal_details',JSON.stringify(locstor_getitem));
        localStorage.setItem('spec_numb',JSON.stringify(spec_numb));
        console.log(locstor_getitem);
      alert('profile created!!!');
      return spec_numb;
}
function viewprofile(page){

if(page==='personal_details_page'){
        console.log(locstor_getitem);
        locstor_getitem=JSON.parse(localStorage.getItem('personal_details'))||[];
        let profile=``;
        let totprofiles='';
        content.innerHTML='';
        for(i=0; i<locstor_getitem.length; i++)
        {
            profile=`
            <button onclick="showprofile(${i})">Profile ${i+1}</button><br><br>
            `;
            totprofiles+=profile;
        }
        content.innerHTML=totprofiles+`<button onclick="back_1()">Back</button>`;
        console.log(locstor_getitem)}

else if(page==='med_details_page'){
    console.log(locstor_getitem_med_details);
}

else if(page==='login_page'){
    console.log(locstor_getitem)
    console.log(locstor_getitem_med_details);
}

}
function showprofile(i)
{
    locstor_getitem=JSON.parse(localStorage.getItem('personal_details'))||[];
    const {name_,number,address,e_mail,password}=locstor_getitem[i];
    content.innerHTML=`
    <p>${name_}</p>
    <p>${number}</p>
    <p>${address}</p>
    <p>${e_mail}</p>
    <p>${password}</p>
    <button onclick="back_1()">Back</button>
    `;
}
function drugs(){
    document.querySelector('#drugs').innerHTML=`
    <button onclick="allergies('penicillin')">Penicillin</button>
    <button onclick="allergies('aspirin')">Aspirin</button>
    <button onclick="allergies('ibuprofen')">Ibuprofen</button>
    <button onclick="allergies('sulfa drugs')">Sulfa drugs</button>
    <button onclick="allergies('none')">None</button>
    <button onclick="others()">Others(specify)</button>
    `;
}
function food(){
    document.querySelector('#food').innerHTML=`
    <button onclick="allergies('nuts')">Nuts</button>
    <button onclick="allergies('dairy')">Dairy</button>
    <button onclick="allergies('gluten')">Gluten</button>
    <button onclick="allergies('seafood')">Seafood</button>
    <button onclick="allergies('egg')">Egg</button>
    <button onclick="allergies('soy')">Soy</button>
    <button onclick="allergies('none')">None</button>
    <button onclick="others()">Others(specify)</button>
    `;
}
function environment(){
    document.querySelector('#environment').innerHTML=`
    <button onclick="allergies('pollen')">Pollen</button>
    <button onclick="allergies('dust')">Dust</button>
    <button onclick="allergies('pet dander')">Pet Dander</button>
    <button onclick="allergies('mold')">Mold</button>
    <button onclick="allergies('none')">None</button>
    <button onclick="others()">Others(specify)</button>
    `;
}

function gender(gender_){
    _gender=gender_
    console.log(_gender);
    return _gender;
}

function blood_grp(group_){
    _group=group_;
    console.log(_group);
    return _group;
}

function allergies(allergie_){
    _allergie=allergie_;
    console.log(_allergie);
    return _allergie;
}

function medicalHistory(history_){
    _history=history_;
    console.log(_history);
    return _history;
}

function currentMedications(medi_){
    _medi=medi_;
    console.log(_medi);
    return _medi;
}

function create_1(){
    let height_1= document.getElementById('height');
    let weight_1= document.getElementById('weight');
    let height = height_1.value;
    let weight = weight_1.value;
    locstor_getitem=JSON.parse(localStorage.getItem('personal_details'))||[];
    let user_number = JSON.parse(localStorage.getItem('spec_numb'));
    locstor_getitem_med_details=JSON.parse(localStorage.getItem('medical_details'))||[];
    locstor_getitem_med_details.push({
        user_number : user_number,
        gender : _gender,
        height : height,
        weight : weight,
        blood_group : _group,
        allergies : _allergie,
        meddical_history : _history,
        current_medications : _medi
    })
    /*locstor_getitem.forEach((element) => {
        console.log(element);
    });*/
    localStorage.setItem('medical_details', JSON.stringify(locstor_getitem_med_details));
    console.log(locstor_getitem_med_details);
    console.log(user_number);
    console.log(locstor_getitem);
}

function login()
{ 
  locstor_getitem=JSON.parse(localStorage.getItem('personal_details'))||[];
  let x=document.getElementById('name_1');
  let y=document.getElementById('password_1');
  let temp_arr;
  const x_value=x.value;
  const y_value=y.value;
  let found=false;
  for(i=0;i<locstor_getitem.length;i++)
  {
  if(x_value===locstor_getitem[i].name_ && y_value===locstor_getitem[i].password)
  {
    temp_arr=locstor_getitem[i];
    localStorage.setItem('logged_in_details',JSON.stringify(temp_arr));
    console.log(JSON.stringify(temp_arr))
    window.location.href='index 1-3.html';
    console.log(temp_arr)
    found=true;
    break;
  }
  }
  if(!found){
    alert('Wrong username or password');
  }
}

function remove()
{
  //localStorage.removeItem('profiles');
  alert('Deleted')
}



function createprofile()
{
  window.location.href='index 1-1.html';
}
function next()
{
  window.location.href='';
}
function next_1()
{
  window.location.href='index 1-2.html';
}
function back_1()
{
  window.location.href='index 1-1.html';
}
function backtologin()
{
  window.location.href='index 1-1.html';
}
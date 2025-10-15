let com_col=0, deng=0, typ=0, mal=0, cov=0, fop=0;
let dis=0;


function layer_1(){
    document.querySelector('#symptoms_2').innerHTML=`
        <h5>Do you sneeze frequently?</h5>
        <button class="yesBtn" data-symptom="common_cold" data-response="yes"data-symptom_name="Sneezing frequently">Yes</button>
        <button class="noBtn" data-symptom="common_cold" data-response="no" data-symptom_name="Sneezing frequently">No</button>

        <h5>Do you have pain behind the eyes?</h5>
        <button class="yesBtn" data-symptom="dengue" data-response="yes" data-symptom_name="Pain behind the eyes">Yes</button>
        <button class="noBtn" data-symptom="dengue" data-response="no" data-symptom_name="Pain behind the eyes">No</button>

        <h5>Do you have a high fever that rises in the evening?</h5>
        <button class="yesBtn" data-symptom="typhoid" data-response="yes" data-symptom_name="High fever in the evening">Yes</button>
        <button class="noBtn" data-symptom="typhoid" data-response="no" data-symptom_name="High fever in the evening">No</button>

        <h5>Do you experience shivering or chills before fever?</h5>
        <button class="yesBtn" data-symptom="malaria" data-response="yes" data-symptom_name="Shivering or chills before fever">Yes</button>
        <button class="noBtn" data-symptom="malaria" data-response="no" data-symptom_name="Shivering or chills before fever">No</button>

        <h5>Do you have a sudden loss of taste or smell?</h5>
        <button class="yesBtn" data-symptom="covid19" data-response="yes" data-symptom_name="Loss of taste or smell">Yes</button>
        <button class="noBtn" data-symptom="covid19" data-response="no" data-symptom_name="Loss of taste or smell">No</button>

        <h5>Did your symptoms start within a few hours of eating?</h5>
        <button class="yesBtn" data-symptom="food_poisoning" data-response="yes" data-symptom_name="Symptoms after eating">Yes</button>
        <button class="noBtn" data-symptom="food_poisoning" data-response="no" data-symptom_name="Symptoms after eating">No</button>


    `;
}
layer_1();
addSymptomListeners();

function common_cold(){
  document.querySelector('#symptoms_2').innerHTML=`
<div id = 'common_cold'>

<h5>Do you have a runny nose with clear mucus?</h5>
<button class="yesBtn" data-symptom="common_cold" data-response="yes" data-symptom_name="Runny nose with clear mucus">Yes</button>
<button class="noBtn" data-symptom="common_cold" data-response="no" data-symptom_name="Runny nose with clear mucus">No</button>

<h5>Do you have watery eyes?</h5>
<button class="yesBtn" data-symptom="common_cold" data-response="yes" data-symptom_name="Watery eyes">Yes</button>
<button class="noBtn" data-symptom="common_cold" data-response="no" data-symptom_name="Watery eyes">No</button>

<h5>Do you feel mild throat irritation?</h5>
<button class="yesBtn" data-symptom="common_cold" data-response="yes" data-symptom_name="Mild throat irritation">Yes</button>
<button class="noBtn" data-symptom="common_cold" data-response="no" data-symptom_name="Mild throat irritation">No</button>

<h5>Did your symptoms start gradually (not suddenly)?</h5>
<button class="yesBtn" data-symptom="common_cold" data-response="yes" data-symptom_name="Gradual symptom onset">Yes</button>
<button class="noBtn" data-symptom="common_cold" data-response="no" data-symptom_name="Gradual symptom onset">No</button>


</div>
    
`;
}

function dengue(){
      document.querySelector('#symptoms_2').innerHTML=`
<div id = 'dengue'>

<h5>Do you have severe muscle or joint pain?</h5>
<button class="yesBtn" data-symptom="dengue" data-response="yes" data-symptom_name="Severe muscle or joint pain">Yes</button>
<button class="noBtn" data-symptom="dengue" data-response="no" data-symptom_name="Severe muscle or joint pain">No</button>

<h5>Do you have skin rashes appearing after a few days of fever?</h5>
<button class="yesBtn" data-symptom="dengue" data-response="yes" data-symptom_name="Skin rashes after fever">Yes</button>
<button class="noBtn" data-symptom="dengue" data-response="no" data-symptom_name="Skin rashes after fever">No</button>

<h5>Do you have bleeding gums or nosebleeds?</h5>
<button class="yesBtn" data-symptom="dengue" data-response="yes" data-symptom_name="Bleeding gums or nosebleeds">Yes</button>
<button class="noBtn" data-symptom="dengue" data-response="no" data-symptom_name="Bleeding gums or nosebleeds">No</button>

<h5>Do you have extreme weakness even after the fever reduces?</h5>
<button class="yesBtn" data-symptom="dengue" data-response="yes" data-symptom_name="Extreme weakness after fever">Yes</button>
<button class="noBtn" data-symptom="dengue" data-response="no" data-symptom_name="Extreme weakness after fever">No</button>


</div>

`;
}

function typhoid(){
      document.querySelector('#symptoms_2').innerHTML=`
<div id = 'typhoid'>

<h5>Do you have abdominal pain or bloating?</h5>
<button class="yesBtn" data-symptom="typhoid" data-response="yes" data-symptom_name="Abdominal pain or bloating">Yes</button>
<button class="noBtn" data-symptom="typhoid" data-response="no" data-symptom_name="Abdominal pain or bloating">No</button>

<h5>Do you have constipation followed by diarrhea?</h5>
<button class="yesBtn" data-symptom="typhoid" data-response="yes" data-symptom_name="Constipation followed by diarrhea">Yes</button>
<button class="noBtn" data-symptom="typhoid" data-response="no" data-symptom_name="Constipation followed by diarrhea">No</button>

<h5>Do you have a coated or white tongue?</h5>
<button class="yesBtn" data-symptom="typhoid" data-response="yes" data-symptom_name="Coated or white tongue">Yes</button>
<button class="noBtn" data-symptom="typhoid" data-response="no" data-symptom_name="Coated or white tongue">No</button>

<h5>Do you feel delirious or confused during fever?</h5>
<button class="yesBtn" data-symptom="typhoid" data-response="yes" data-symptom_name="Delirious or confused during fever">Yes</button>
<button class="noBtn" data-symptom="typhoid" data-response="no" data-symptom_name="Delirious or confused during fever">No</button>


</div>

`;
}

function malaria(){
        document.querySelector('#symptoms_2').innerHTML=`  
<div id = 'malaria'>

<h5>Does your fever come in cycles (every 2-3 days)?</h5>
<button class="yesBtn" data-symptom="malaria" data-response="yes" data-symptom_name="Fever in cycles every 2-3 days">Yes</button>
<button class="noBtn" data-symptom="malaria" data-response="no" data-symptom_name="Fever in cycles every 2-3 days">No</button>

<h5>Do you have profuse sweating after fever?</h5>
<button class="yesBtn" data-symptom="malaria" data-response="yes" data-symptom_name="Profuse sweating after fever">Yes</button>
<button class="noBtn" data-symptom="malaria" data-response="no" data-symptom_name="Profuse sweating after fever">No</button>

<h5>Do you have yellowing of eyes (jaundice)?</h5>
<button class="yesBtn" data-symptom="malaria" data-response="yes" data-symptom_name="Yellowing of eyes (jaundice)">Yes</button>
<button class="noBtn" data-symptom="malaria" data-response="no" data-symptom_name="Yellowing of eyes (jaundice)">No</button>

<h5>Do you have an enlarged spleen or liver pain?</h5>
<button class="yesBtn" data-symptom="malaria" data-response="yes" data-symptom_name="Enlarged spleen or liver pain">Yes</button>
<button class="noBtn" data-symptom="malaria" data-response="no" data-symptom_name="Enlarged spleen or liver pain">No</button>


</div>

`;
}

function covid_19(){
    document.querySelector('#symptoms_2').innerHTML=` 
<div id = 'covid-19'>

<h5>Do you have difficulty breathing or shortness of breath?</h5>
<button class="yesBtn" data-symptom="covid19" data-response="yes" data-symptom_name="Difficulty breathing or shortness of breath">Yes</button>
<button class="noBtn" data-symptom="covid19" data-response="no" data-symptom_name="Difficulty breathing or shortness of breath">No</button>

<h5>Do you have chest tightness or pressure?</h5>
<button class="yesBtn" data-symptom="covid19" data-response="yes" data-symptom_name="Chest tightness or pressure">Yes</button>
<button class="noBtn" data-symptom="covid19" data-response="no" data-symptom_name="Chest tightness or pressure">No</button>

<h5>Do you have dry cough (without mucus)?</h5>
<button class="yesBtn" data-symptom="covid19" data-response="yes" data-symptom_name="Dry cough without mucus">Yes</button>
<button class="noBtn" data-symptom="covid19" data-response="no" data-symptom_name="Dry cough without mucus">No</button>

<h5>Have you been in contact with a COVID-positive person recently?</h5>
<button class="yesBtn" data-symptom="covid19" data-response="yes" data-symptom_name="Recent contact with COVID-positive person">Yes</button>
<button class="noBtn" data-symptom="covid19" data-response="no" data-symptom_name="Recent contact with COVID-positive person">No</button>


</div>

`;
}

function food_poisoning(){
    document.querySelector('#symptoms_2').innerHTML=` 
<div id = 'food_poisoning'>

<h5>Do you have stomach cramps or pain?</h5>
<button class="yesBtn" data-symptom="food_poisoning" data-response="yes" data-symptom_name="Stomach cramps or pain">Yes</button>
<button class="noBtn" data-symptom="food_poisoning" data-response="no" data-symptom_name="Stomach cramps or pain">No</button>

<h5>Do you have vomiting and diarrhea together?</h5>
<button class="yesBtn" data-symptom="food_poisoning" data-response="yes" data-symptom_name="Vomiting and diarrhea together">Yes</button>
<button class="noBtn" data-symptom="food_poisoning" data-response="no" data-symptom_name="Vomiting and diarrhea together">No</button>

<h5>Do you feel severe dehydration (dry mouth, low urination)?</h5>
<button class="yesBtn" data-symptom="food_poisoning" data-response="yes" data-symptom_name="Severe dehydration (dry mouth, low urination)">Yes</button>
<button class="noBtn" data-symptom="food_poisoning" data-response="no" data-symptom_name="Severe dehydration (dry mouth, low urination)">No</button>

<h5>Did multiple people who ate the same food also get sick?</h5>
<button class="yesBtn" data-symptom="food_poisoning" data-response="yes" data-symptom_name="Multiple people who ate the same food also got sick">Yes</button>
<button class="noBtn" data-symptom="food_poisoning" data-response="no" data-symptom_name="Multiple people who ate the same food also got sick">No</button>


</div>

`;
}

/*let common_cold_ = ['common_cold'];
let dengue_ = ['dengue'];
let migrane_ = ['migrane'];
let food_poisoning_ = ['food_poisoning'];
let covid_19_ = ['covid_19'];
let typhoid_ = ['typhoid'];
let malaria_ = ['malaria'];*/

let symptoms_3 = [];

function addSymptomListeners() {
document.querySelectorAll(".yesBtn").forEach((button) => {
    button.addEventListener('click', () => {
        let x = button.dataset.symptom;
        let y = button.dataset.symptom_name;
    //    let html=``;
        if(x === 'common_cold'){
            common_cold();
            dis++;
            symptoms_3.push(y);
        }
        else if(x === 'dengue'){
            dengue();
            dis++;
            symptoms_3.push(y);
        }
        else if(x === 'typhoid'){
            typhoid();
            dis++;
            symptoms_3.push(y);
        }
        else if(x === 'malaria'){
            malaria();
            dis++;
            symptoms_3.push(y);
        }
        else if(x === 'covid19'){
            covid_19();
            dis++;
            symptoms_3.push(y);
        }
        else{
            food_poisoning();
            dis++;
            symptoms_3.push(y);
        }
        localStorage.setItem('dis', dis);
        localStorage.setItem('symptoms_array', JSON.stringify(symptoms_3));
        console.log(dis);
        console.log('hi')
        addSymptomListeners();
    })
})
}



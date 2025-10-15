//import { com_col, deng, typ, mal, cov, fop } from './java_2.js';
/*let com_col = localStorage.getItem('com_col');
let deng = localStorage.getItem('deng');
let typ = localStorage.getItem('typ');
let mal = localStorage.getItem('mal');
let fop = localStorage.getItem('fop');*/
let dis = localStorage.getItem('dis');
let symp_arr = JSON.parse(localStorage.getItem('symptoms_array'))

if(dis){
    console.log(symp_arr)
    let html=``;
    let divcontent=``;
    symp_arr.forEach((element) => {
        html=`<li>${element}</li>`
        divcontent += html;
    });
    document.querySelector('#report').innerHTML=`
    <h3>Common Symptoms:</h3>
    <ul>
        ${divcontent}
    </ul>
    `;
   // nxt();
}/*else{
    document.querySelector('#response').innerHTML = `
    <h6>Since your symptoms are not upto the matching level of the disease, do you want to continue?</h6>
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
`;
    document.querySelector('#yesBtn').addEventListener('click', () => {
        console.log('you have the disease');
        console.log(symp_arr);
    });

    document.querySelector('#noBtn').addEventListener('click', () => {
        window.location.href = 'index 1-4.html';
    });
}*/



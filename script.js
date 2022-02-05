/* Här  kallar vi på våra olika id element och tomma Arrayer*/
$(document).ready(function(){
    const calc= $('#calc').get(0);
    const displayNum=$('#display-num').get(0);
    const resultCalc=$('#result-calc').get(0);
    let op=[];
    let calcSum = [];

/* Här har vi våran +/- knappar som ser till att uträkningen sker som den ska.
    Genom en funktion som kallar på båda + och - i samma.*/
$("#add, #sub").click(function(){
    if (displayNum.value==""){
        return
    }
    op.push($(this).attr("value"));
    inputS();
    pOut();  
});
/* Nu till vår = knapp.(patte förklara)  */
$('#eql').click(function(){
    resultCalc.textContent = eval(calc.textContent);

    calcSum.splice(0, calcSum.length);
    op.splice(0, op.length);
    calc.textContent = "";   

});
/* Funktionen pOut() ser till att uträkningen hamnar rätt 
    vid exempelvis calculation och result.Även att alla operatorer syns. */
function pOut(){
    calc.textContent="";
    /* resultatet kommer tömmas när du klickar på +/- 
        efter du fått ut resultatet och startar en ny uträkning. */
    resultCalc.textContent = "";
    if(isNaN(displayNum.value)){
        calcSum=[];
        op=[];
        return;
    } 
    
    else if(calcSum.length === 1){
            calc.textContent += calcSum[0] + op[0] 
        }
       
    else{
        $.each(calcSum, function(i){
            calc.textContent += op [i] + calcSum[i]
        });
    }
    /* Ser till att uträkningen ej har en operator framför sig
         i början utav uträkningen */
    if (calcSum.length >1){
        calc.textContent = calc.textContent.substring(1)
    };
}
/* Funktionen inputS() ser till att det som står i displayen
    puttas i arrayen dom där efter gör att vi kallar på +/-*/
function inputS(){
    calcSum.push(displayNum.value);
};
});

let cntryValue=document.getElementById('Mycountry')
cntryValue.addEventListener('input',(event)=>{
    console.log(cntryValue.value)
    if (cntryValue.value==='India') {
        document.getElementById('Mystate').innerHTML=`<option disabled selected>Select State</option>
        <option value="Delhi">Delhi</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Haryana">Haryana</option>`
    }else if (cntryValue.value==='Pakistan') {
        document.getElementById('Mystate').innerHTML=`<option disabled selected>Select State</option>
        <option value="POK">POK</option>
        <option value="Lahore">Lahore</option>
        <option value="Krachi">Krachi</option>`
    }else{
        document.getElementById('Mystate').innerHTML=`<option disabled selected>Select State</option>
        <option value="Victoria">Victoria</option>
        <option value="Western Australia">Western Australia</option>
        <option value="Tasmania">Tasmania</option>`
    }
})
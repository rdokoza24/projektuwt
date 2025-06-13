function submit_data(){
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let city = document.getElementById("city_choice").value;

    if(name.length===0 || mail.length===0){
        alert("Please fill in all fields");
    }

    let ch1 = document.getElementById("ch1");
    let ch2 = document.getElementById("ch2");
    let ch3 = document.getElementById("ch3");

    let choices = [];
    choices.push(ch1);
    choices.push(ch2);
    choices.push(ch3);
    console.log(choices);

    // key - value pairs for checked checkboxes
    let checked = {};
    for(let ch of choices){
        console.log(`ch: ${ch.name} - ${ch.value} - ${ch.checked}`);
        if(ch.checked){
            checked[ch.name] = ch.value;
        }
    }
    console.log(checked)

    console.log(`Name: ${name} - Mail: ${mail} - City: ${city}`);

    // get only radio button that is selected
    const radios = document.getElementsByName("service");
    console.log(radios);
    let selected_radio;
    for(let radio of radios){
        if(radio.checked){
            selected_radio = radio.value;
            break;
        }
    }
    console.log(`Selected radio: ${selected_radio}`);

    localStorage.setItem("name", name);
    localStorage.setItem("mail", mail);
    localStorage.setItem("city", city);
    localStorage.setItem("checked", JSON.stringify(checked));
    localStorage.setItem("radio", selected_radio);
    window.document.location = "../STORAGE_FORM/web_form.html";
}
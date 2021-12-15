let storage = window.localStorage;
storage.setItem('age', '18');
storage.setItem('type', 'Material');
storage.setItem('color', 'Black');

let result = document.getElementById('result');

function resultDiv(){
    result.innerHTML = "Yo mon pote ton thème cest material black";
    console.log("Thème Black, type Material et police de caractères 18 px");
}

resultDiv();

storage.removeItem('age');

if (!storage.getItem('age')){
    storage.setItem('age','20');
}

console.log(storage.getItem('nombre'));

storage.removeItem('type');

if (!storage.getItem('type')){
    storage.setItem('type','Materiaaaal');
}

console.log(storage.getItem('type'));
storage.removeItem('color');

if (!storage.getItem('color')){
    storage.setItem('color','Red');
}

console.log(storage.getItem('color'));

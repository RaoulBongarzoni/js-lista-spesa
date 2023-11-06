let shopping_array = [];
let new_item;
let remove_item;
let i = 0;



document.getElementById("add").addEventListener("click", function()
{   
    new_item = prompt("aggiungi un nuovo elemento");
    shopping_array.push(new_item);
    while( i < shopping_array.length){

        document.getElementById("shopping_list").innerHTML += `<li> ${i+1} ${shopping_array[i]} </li> `;
        i++;
    }
})


/* document.getElementById("remove").addEventListener("click", function()
{   
    remove_item = prompt("indice elemento da rimuovere");
    for( var i = 0; i < shopping_array.length; i++){ 
        if ( i == remove_item) {
          shopping_array.splice(i, 1); 
        }
     }
}) */




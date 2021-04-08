function addItem()
{
    let ol=document.getElementById("list-items");
    let itemValue=document.getElementById("input-item").value;
    
    if(itemValue=='')
    {
        alert("Must add an item");
    }
    else
    {
        let li = document.createElement("li");
        ol.appendChild(li);
        li.innerHTML=` <div class="card"><div class="card-body">
                            <h5 class="card-title">${itemValue}</h5>
                            <a class="btn btn-default"></a>
                            </div></div>`;
    }
    
    
    let itemField=document.getElementById("input-item"); //make input field empty after adding item
    itemField.value="";
// remove a perticular item when clicking close btn
    var closeIcon = document.getElementsByClassName('btn'); 
    function removeItem()
    {
        let div = this.parentElement;
        let li=div.parentElement.parentElement;
        li.style.display = "none";
    };
    
    for (var i = 0; i < closeIcon.length; i++) 
    {
       closeIcon[i].addEventListener('click', removeItem); 
    }
 
}
//removing entire list
function removeList()
{
    var olElement = document.getElementById('list-items');
    olElement.innerHTML = '';
}


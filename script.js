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
                            <div class="stopwatch-container">
                            <a id="stopwatch-btn" onclick="startStop()"><i id="start-btn" class="fa fa-play" aria-hidden="true"></i></a>
                            <span id="display-stopwatch">00:00:00</span>
                            </div>
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

//Stopwtach functionality start

//define variable to hold h/m/s
    let second=0;
    let minute=0;
    let hour=0;

//define a variable to hold setinterval fun
let interval=null;

//define a variable to hold stopwatch status
let status="stopped";

//define variables to hold display values hh/mm/ss
    let displaySecond=0;
    let displayMinute=0;
    let displayHour=0;

function stopwatch()
{
    //increment second
    second++;

    //set a condition to increment minute and hour as well
    if(second/60===1)
    {
        second=0;
        minute++;
        if(minute/60===1)
        {
            minute=0;
            hour++;
        }
    }

    //If the h, m, s has only one digit, add a zero before the value (00:02:09)
    if(second<10)
    {
        displaySecond="0"+second;
    }
    else
    {
        displaySecond=second;
    }
    if(minute<10)
    {
        displayMinute="0"+minute;
    }
    else
    {
        displayMinute=minute;
    }
    if(hour<10)
    {
        displayHour="0"+hour;
    }
    else
    {
        displayHour=hour;
    }


    //display stopwatch
    document.getElementById("display-stopwatch").innerHTML=displayHour + ":" + displayMinute + ":" + displaySecond; 
}

// function for start and stop the stop watch
function startStop()
{
    if(status=="stopped")
    {
        //start the stopwatch
        interval=window.setInterval(stopwatch,1000);
        document.getElementById("start-btn").className="fa fa-pause";
        status="started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("start-btn").className="fa fa-play";
        status="stopped";
    }

}



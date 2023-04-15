
// pop up
import {text_line} from './script_home.js';


let popup = document.getElementById("popup");
let submitButton = document.getElementById("this-submit-button");
let closeButton = document.getElementById("close-pop-button");

function openPopup(){
    var scrollPos = window.scrollY || window.pageYOffset;
    popup.style.top = (scrollPos + window.innerHeight/2) + "px";
    popup.classList.add("openpopup");
}


submitButton.addEventListener('click', handleClick);


// async specifies that it will surely return a promise and you need to wait for it 
async function handleClick() {
  try {
    const response = await fetch('/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text_line})
    });
    if (response.ok) {
        const data = await response.json(); 
        console.log(data);
        if(data == 1)
        {
            openPopup();
        }else{
            btn_function();
        }
      console.log('Blockchain executed successfully!');
    } 
    else
    {
        console.error('Error executing blockchain');
    }
  } catch (error) {
    console.error(error);
  }
}


function closePopup(){
    popup.classList.remove("openpopup");
    btn_function();
}

function  btn_function() {
    // window.location.href = "#our_output";
    window.location.href = "#our_output";
}

// submitButton.addEventListener("click", function(){
    
//     openPopup();
// });

closeButton.addEventListener("click", function(){
    closePopup();
})



var text ='';

function download(filename, text){
    var element = document.createElement('a');
    element.style.display= 'none';
    element.setAttribute('href','data:text/plain;charset=utf-8,'+ encodeURIComponent(text));

    element.setAttribute('download', filename);
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

// function textputter(textf){
//     text = textf;
// }

// document.getElementById('downloadButton').addEventListener('click', function(){
//     //find a may to import text 
//     var filename =document.getElementById('out_filename').value;
    
//     download(filename, text);
// },false);


document.getElementById('downloadButton').addEventListener('click', function(){
    var filename = document.getElementById('out_filename').value;
    // Send a request to the server to read the file
    fetch('/read-file')
        .then(response => response.text())
        .then(data => {
            // Download the file
            download(filename, data);
        })
        .catch(error => console.error(error));
}, false);




// module.exports= { textputter };
// export { textputter };  
// export default download;

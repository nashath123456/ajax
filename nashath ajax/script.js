var txt1 = document.getElementById('txt1');
function  change(){
    console.log("btn clicked")
//strp 1 
var xhttp=new XMLHttpRequest();
//step2
xhttp.open("GET","data.json",true);
//step3
xhttp.send();
//step 4
xhttp.onreadystatechange = function(){
    if((this.readyState==4)&(this.status==200)){
        //console.log(this.response);
        var data = JSON.parse(this.response)
        //txt1.innerText=`Name:${data[1].name}Age:${data[1].age}`
        let output ='';
         
        for(let i=0;i<data.length;i++){
             console.log(data[i])
             output+=`<li>${data[i].name}</li>`
             output+=`<li>${data[i].age}</li>`
        
             txt1.innerHTML =output

        }

    }
}



}
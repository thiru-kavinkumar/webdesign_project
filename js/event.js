
// parameters 
let nb_div = 4;
let nb_event = 10; 
let title_arr = []; 
let para_arr = []; 
let img_arr = [];

// api url
const api_url = 
      "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();

    get_nb_event(data);
    feed_arr(data);
    set_html();


}

// Calling that async function
getapi(api_url);

// Set page number 
set_nb_page();

// set page number 
set_box_extend();

// Function to get number of event 
function get_nb_event(data) {
    nb_event = Object.keys(data.records).length    
}

function feed_arr(data) {
    for (let r of data.records){
        title_arr.push(r["record"]["fields"]["title"]);
        para_arr.push(r["record"]["fields"]["description"]);
        img_arr.push(r["record"]["fields"]["image_couverture"]["url"])
    }
}

function set_html(){
    let id_first = "event-"; 
    for (let i=1; i<=nb_div; i++){
        let id = id_first+i;
        let txt =`<h3 class="h3_class">` + title_arr[i-1] + `</h3>
        <div class="info" id="info-`+i+`">
            <img src="`+img_arr[i-1]+`">
            <div class="p_class">`+para_arr[i-1]+`</div>`;
        
        document.getElementById(id).innerHTML = txt;

    }
}

function set_box_extend(){
    for (let i=1; i<=nb_div; i++){
        
        document.getElementById("event-"+i).addEventListener("click", (event)=>{
            for (let j=1; j<=nb_div; j++){

                let el = document.getElementById("info-"+j);
                el.style.overflow = "hidden";
                el.style.maxHeight = "200px";
            }

            const elMain = document.getElementById("info-"+i); 
            elMain.style.overflow = "visible";
            elMain.style.maxHeight = "1000px";
            
        })
    }
}


    


function set_nb_page(){
    const max_page = Math.floor(nb_event/nb_div) + 1;

    let el = document.getElementById("page-nb"); 
    let txt = ``
    for (let i=1; i<=max_page; i++){
       
        txt += `<p id="page-`+i+`">&nbsp;`+i+`&nbsp;</p>`;
    }
    el.innerHTML = txt;

}

// parameters 
let nb_div = 4;
let nb_event = 10; 
let title_arr = []; 
let para_arr = []; 
let img_arr = [];
let page_id= 0; 

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
    let start = page_id * nb_div + 1
    let end = start + nb_div-1; 
    end = end>nb_event?nb_event:end; 
    let txt = ``
    for (let i=start; i<=end; i++){
        let id = id_first+i;
         txt +=`
         <div class="event_class" id="`+id+`">
            <h3 class="h3_class">` + title_arr[i-1] + `</h3>
            <div class="info" id="info-`+i+`">
                <img src="`+img_arr[i-1]+`">
            <div class="p_class">`+para_arr[i-1]+`</div>
            </div>
         </div>`;
        
    document.getElementById("main-div").innerHTML = txt;
    }
    set_box_extend();
}

function set_box_extend(){
    let start = page_id * nb_div + 1
    let end = start + nb_div-1; 
    end = end>nb_event?nb_event:end; 
    console.log("lol");
    for (let i=start; i<=end; i++){
        
        document.getElementById("event-"+i).addEventListener("click", (event)=>{
            
            for (let j=start; j<=end; j++){
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

    set_page_nb_function();
    
    

}

function set_page_nb_function(){
    const max_page = Math.floor(nb_event/nb_div) + 1;

    for (let i=1; i<=max_page; i++){
        document.getElementById("page-"+i).addEventListener("click", (event)=>{
            page_id = i-1;
            set_html();
            page_nb_active(max_page);
            
        })
    }
}

function page_nb_active(max_page){
    for (let i=1; i<=max_page; i++){
        let el = document.getElementById("page-"+i)
        el.style.color = "black"; 
            
        }
    let el = document.getElementById("page-"+(page_id+1))
    el.style.color = "rosybrown"; 

}
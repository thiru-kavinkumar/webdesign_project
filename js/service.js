async function displayCard1() {
    // import json
    const response = await fetch("../data/accommodation.json");
    let data = await response.json();

    let el = document.getElementById("text_section_service"); 
    
    let txt = `<h1> Accommodation </h1>`
    for (let d of data.accommodation){
        txt += `
        <div>
        <h1>`+d["name"]+`</h1>
        <img src="`+d["image"]+`">
        <p>
        <span class="type"> Type </span> : `+d["type"]+`<br>
        <span class="star"> Star </span>: `+d["star_rating"]+`<br>
        <span class="price"> Price </span>: `+d["price_range"]+`
        </p>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_service";
}


async function displayCard2() {
    // import json
    const response = await fetch("../data/restaurant.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = `<h1> Restaurant </h1>`
    for (let d of data.restaurants){
        txt += `
        <div>
            <h1>`+d["name"]+`</h1>
            <img src="`+d["images"][0]+`">
            <img src="`+d["images"][1]+`">
            <img src="`+d["images"][2]+`"><br>
            <p>
            <span class="adress"> Adress </span> : `+d["adress"]+`<br>
            <span class="website"> Website </span>: `+d["website"]+`<br>
            <span class="phone"> Phone </span>: `+d["phone"]+`<br>
            <table>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                <tr>
                    <td>`+d["schedule"][0]["monday"]+`</td>
                    <td>`+d["schedule"][0]["tuesday"]+`</td>
                    <td>`+d["schedule"][0]["wednesday"]+`</td>
                    <td>`+d["schedule"][0]["thursday"]+`</td>
                    <td>`+d["schedule"][0]["friday"]+`</td>
                    <td>`+d["schedule"][0]["saturday"]+`</td>
                    <td>`+d["schedule"][0]["sunday"]+`</td>
                </tr>
            </table>
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_service";
}

async function displayCard3() {
    // import json
    const response = await fetch("../data/park.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = `<h1> Park</h1>`
    for (let d of data.Park){
        txt += `
        <div>
            <h1>`+d["name"]+`</h1>
            <img src="`+d["image"]+`">
            <p>
            <span class="description"> Description : </span>: `+d["description"]+`<br>
            <span class="adress"> Adress </span> : `+d["adress"]+`
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_service";
}

async function displayCard4() {
    // import json
    const response = await fetch("../data/transportation.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = `<h1> Transport </h1>`
    for (let d of data.transportation){
        txt += `
        <div>
            <h1>`+d["name"]+`</h1>
            <img src="`+d["image"]+`">
            <p>
            <span class="description"> Description : </span>: `+d["description"]+`
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_service";
}

async function displayCard5() {
    // import json
    const response = await fetch("../data/sports.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = `<h1> Sport </h1>`
    for (let d of data.sports_venues){
        txt += `
        <div >
            <h1>`+d["name"]+`</h1>
            <img src="`+d["image"]+`">
            <p>
            <span class="facilities"> Facilities : </span>: `+d["facilities"]+`<br>
            <span class="location"> Location : </span>: `+d["location"]+`<br>
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_service";
}


async function displayCard6() {
    // import json
    const response = await fetch("../data/library.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = `<h1> Library </h1>`
    for (let d of data.libraries){
        txt += `
        <div >
            <h1>`+d["name"]+`</h1>
            <img src="`+d["image"]+`">
            <p>
            <span class="location"> Description : </span>: `+d["description"]+`
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_service";
}

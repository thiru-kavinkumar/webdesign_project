async function displayCard1() {
    // import json
    const response = await fetch("../data/accommodation.json");
    let data = await response.json();

    let el = document.getElementById("text_section_service"); 
    let txt = ``
    for (let d of data.accommodation){
        txt += `
        <h1>`+d["name"]+`</h1>
        <img src="`+d["image"]+`">
        <p>
        <span class="type"> Type </span> : `+d["type"]+`<br>
        <span class="star"> Star </span>: `+d["star_rating"]+`<br>
        <span class="price"> Price </span>: `+d["price_range"]+`
        </p>
        `;
    }
    el.innerHTML = txt;
}


async function displayCard2() {
    // import json
    const response = await fetch("../data/restaurant.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = ``
    for (let d of data.restaurants){
        txt += `
        <div id="restuarant">
            <h1>`+d["name"]+`</h1>
            <img src="`+d["images"][0]+`">
            <img src="`+d["images"][1]+`
            <img src="`+d["images"][2]+`<br>
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
}

async function displayCard3() {
    // import json
    const response = await fetch("../data/park.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = ``
    for (let d of data.Park){
        txt += `
        <div id="park">
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
}

async function displayCard4() {
    // import json
    const response = await fetch("../data/transportation.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = ``
    for (let d of data.transportation){
        txt += `
        <div id="transportation">
            <h1>`+d["name"]+`</h1>
            <img src="`+d["image"]+`">
            <p>
            <span class="description"> Description : </span>: `+d["description"]+`
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
}

async function displayCard5() {
    // import json
    const response = await fetch("../data/sports.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = ``
    for (let d of data.sports_venues){
        txt += `
        <div id="transportation">
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
}


async function displayCard6() {
    // import json
    const response = await fetch("../data/library.json");
    let data = await response.json();
    let el = document.getElementById("text_section_service"); 
    let txt = ``
    for (let d of data.libraries){
        txt += `
        <div id="library">
            <h1>`+d["name"]+`</h1>
            <img src="`+d["image"]+`">
            <p>
            <span class="location"> Description : </span>: `+d["description"]+`
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
}

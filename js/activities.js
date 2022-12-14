async function displayCard1() {
    // import json
    const response = await fetch("../data/building.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = ``
    for (let d of data.building){
        txt +=  `
        <div id="building">
            <h1>`+d["name"]+`</h1>
            <span class="adress"> Adress </span> : `+d["adress"]+`<br>
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


async function displayCard2() {
    // import json
    const response = await fetch("../data/museum.json");
    let data = await response.json();
    console.log(data);
    let el = document.getElementById("text_section_activities"); 
    let txt = ``
    for (let d of data.museum){
        txt += `
        <div id="museum">
            <h1>`+d["name"]+`</h1>
            <p>
            <span class="adress"> Adress </span> : `+d["adress"]+`<br>
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
    const response = await fetch("../data/theater.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = ``
    for (let d of data.theater){
        txt += `
        <div id="theater">
            <h1>`+d["name"]+`</h1>
            <img src="`+d["images"][0]+`">
            <img src="`+d["images"][1]+`<br>
            <p>
            <span class="first_opening"> First Opening : </span>: `+d["first_opening"]+`<br>
            <span class="capacity"> Capacity : </span>: `+d["capacity"]+`<br>
            <span class="adress"> Adress </span> : `+d["adress"]+`<br>
            <span class="website"> Website </span>: `+d["website"]+`<br>
            <span class="phone"> Phone </span>: `+d["phone"]+`
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
}

async function displayCard4() {
    // import json
    const response = await fetch("../data/science.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = ``
    for (let d of data.science){
        txt += `
        <div id="science">
            <h1>`+d["name"]+`</h1>
            <img src="`+d["images"][0]+`">
            <img src="`+d["images"][1]+`<br>
            <p>
            <span class="adress"> Adress </span> : `+d["adress"]+`<br>
            <span class="website"> Website </span>: `+d["website"]+`<br>
            <span class="phone"> Phone </span>: `+d["phone"]+`
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
        </div>`
    }
    el.innerHTML = txt;
}

async function displayCard5() {
    // import json
    const response = await fetch("../data/attraction.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = ``
    for (let d of data.attraction){
        txt += `
        <div id="attraction">
        <h1>`+d["name"]+`</h1>
        <p>
        <span class="adress"> Adress </span> : `+d["adress"]+`<br>
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
    </div>`;
    }
    el.innerHTML = txt;
}


async function displayCard6() {
    // import json
    const response = await fetch("../data/street.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = ``
    for (let d of data.streets){
        txt += `
        <div id="street">
            <h1>`+d["name"]+`</h1>
            <img src="`+d["images"]+`">
            <p>
            <span class="length"> Length : </span>: `+d["length"]+`<br>
            <span class="width"> Width : </span>: `+d["width"]+`<br>
            <span class="feature"> Features : </span>: `+d["features"]+`<br>
            </p>
        </div>
        `;
    }
    el.innerHTML = txt;
}

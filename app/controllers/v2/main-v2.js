// export {https} from "../../service/service.js"

import {https} from "../../service/service.js";
import {filterFoodType, getValueForm, renderData, showDataFrom} from "./controller-v2.js";
let selectedId = null;

let fetchFoodList = () => {
    https.get("/food").then((res) => {
        renderData(res.data);
    }).catch((err) => console.log(err));
};
fetchFoodList();

// edit btn

window.editFunc = (id) => {
    selectedId = id;


    $("#exampleModal").modal("show");

    https.get(`/food/${id}`).then((res) => {
        showDataFrom(res.data);
    });
};


// update
function updateData() {
    let productsValue = getValueForm();
    https.put(`/food/${selectedId}`, productsValue).then((res) => {
        fetchFoodList();
        $("#exampleModal").modal("hide");
    }).catch((err) => console.log(err));
}
window.updateData = updateData;

// delete btn
function deleteFunc(id) {
    https.delete(`/food/${id}`).then((res) => {
        fetchFoodList();
    }).catch((err) => console.log(err));
}
window.deleteFunc = deleteFunc;
// add btn

document.getElementById("btnThemMon").onclick = () => {
    let addData = getValueForm();
    https.post("/food", addData).then(res => {
        fetchFoodList();
        $("#exampleModal").modal("hide");

    })
}


window.changeTest = () => {
    let loaiValue = document.getElementById("selLoai").value

    console.log("🫀 ~ loaiValue:", loaiValue)

    https.get('/food').then((res) => {
        let chayFilter = []

        let aba = res.data.filter((item) => {
            return item.loai === loaiValue
        })
        if (loaiValue == "chay") {
            chayFilter.push(aba)
        } else if (loaiValue == "all") {
            chayFilter.push(res.data)
        } else {
            chayFilter.push(aba)
        } chayFilter.forEach((items) => {
            renderData(items)
        })
        // renderData(chayFilter)

        console.log("🫀 ~ aba ~ aba:", chayFilter)

    })

}


// loc

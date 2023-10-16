export let getValueForm = () => {
    let ma = document.getElementById("foodID").value;
    let ten = document.getElementById("tenMon").value;
    let loai = document.getElementById("loai").value;
    let gia = document.getElementById("giaMon").value;
    let khuyenMai = document.getElementById("khuyenMai").value;
    let tinhTrang = document.getElementById("tinhTrang").value;
    let hinhAnh = document.getElementById("hinhMon").value;
    let moTa = document.getElementById("moTa").value;
    return {
        ma,
        ten,
        loai,
        gia,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa,
        tinhGKM() {
            return((100 - this.khuyenMai) / 100) * this.gia
        }
    }
}

const monChay = "true"
const monMan = "false"
// show value
export let showDataFrom = (data) => {
    document.getElementById("foodID").value = data.ma

    document.getElementById("tenMon").value = data.ten
    document.getElementById("loai").value = data.loai == monChay ? "chay" : "man"

    document.getElementById("giaMon").value = data.gia
    document.getElementById("khuyenMai").value = data.khuyenMai == true ? 10 : 20
    document.getElementById("tinhTrang").value = data.tinhTrang == true ? "Con" : "Het"
    document.getElementById("hinhMon").value = data.hinhAnh
    document.getElementById("moTa").value = data.moTa


}

export let renderData = (data) => {

    let resultStr = ""
    data.forEach((food) => {

        let {
            ma,
            ten,
            loai,
            gia,
            khuyenMai,
            tinhTrang
        } = food
        // if (loai == true) {
        //     loai = "Chay"
        // } else {
        //     loai = "Mặn"
        // };

        let foodStr = `<tr>
        <th>${ma}</th>
        <th>${ten}</th>
        <th>${loai}</th>
        <th>${gia}</th>
        <th>${khuyenMai}</th>
        <th>2</th>
        <th>${tinhTrang}</th>
        <th>
        <button onclick="editFunc(${ma})"  class= "btn btn-warning">Edit</button>
        <button onclick="deleteFunc(${ma})" class ="btn btn-danger">Delete</button>
        </th>

        </tr>`
        resultStr += foodStr
    })

    document.getElementById("tbodyFood").innerHTML = resultStr
}

export let filterFoodType = (data, type) => {
    let result = data.filter(() => {
        return data.loai == type
    })
    return result
}

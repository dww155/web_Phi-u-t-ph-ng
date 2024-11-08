// var dangKy = document.getElementById("dangky")
function DangKy () {
    var hoten = document.getElementById("hoten");
    var cmnd = document.getElementById("cmnd");
    var mucgia = document.getElementById("mucgia");
    var ansang = document.getElementById("ansang");
    if (hoten.value == "") {
        alert("Họ tên không được rỗng");
        hoten.focus();
        return false;
    } else 
    if (cmnd.value == "") {
        alert("CMND không được rỗng");
        cmnd.focus();
        return false;
    } else 
    if (isNaN(cmnd.value)) {
        alert("CMND phải là số");
        cmnd.focus();
        return false;
    } else 
    return true;
}
var thanhtien = document.getElementById("thanhtien")

function calculator () {
    var ngaythue = new Date(document.getElementById("ngaythue").value);
    var ngaytra = new Date(document.getElementById("ngaytra").value);
    var xuat = document.getElementById("tienthuephong");
    var time = Math.ceil((ngaytra - ngaythue) / (1000 * 3600 * 24))
    var mucgia = document.getElementById("mucgia").value;
    var services = document.querySelectorAll("#service input");
    
    if (time <= 0) {
        alert("nhap ngay sai") ;
        return ;
    }

    if (mucgia == 150000) {
        var t = 0; 
        services.forEach((i) => {
            if (i.checked == true) {
                t = t + parseInt(mucgia*0.05);
            }
        })
        mucgia = parseInt(mucgia) + t ; 
    } else {
        var t = 0;
        for (var i = 1 ; i < services.length ; i++) {
            if (services[i].checked == true) {
                t = t + parseInt(mucgia*0.05);
            }
        }
        mucgia = parseInt(mucgia) + t ; 
    }
    

    xuat.value = mucgia*time ;
}
thanhtien.addEventListener("click", () => {
    calculator();
})
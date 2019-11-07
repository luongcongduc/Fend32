// function btnThem(){
//     var tenNV = getEle("searchName").value;
// }
var danhSachNhanVien = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorange();
getEle("btnThem").addEventListener("click", function () {
    getEle("btnCapNhat").style.display = "none";
    getEle("btnThemNV").style.display = "block";

    getEle("msnv").removeAttribute("disabled");
});

getEle("btnThemNV").addEventListener("click", function () {
    var maNV = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var date = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;



    // console.log(nhanVien);

    // danhSachNhanVien.themNV(nhanVien);
    // console.log(danhSachNhanVien.mangNhanVien);

    var isValid = true;

    /* MaNV */
    isValid &= validation.kiemTraRong(maNV, "tbMaNV", "(*) Manv ko duoc rong") && validation.kiemTraTrungMaNV(maNV, "tbMaNV", "MaNV trung", danhSachNhanVien.mangNhanVien);

    /* Hoten */
    isValid &= validation.kiemTraRong(hoTen, "tbTen", "(*) ho ten khong duoc rong ") &&
        validation.kiemTraChuoi(hoTen, "tbTen", "(*)vui long nhap chuoi");

    /* Email */
    isValid &= validation.kiemTraRong(email, "tbEmail", "(*) email ko duoc rong");

    /* Password */
    isValid &= validation.kiemTraRong(password, "tbMatKhau", " (*)mat khau ko duoc rong ") &&
        validation.kiemTraKiTu(password, "tbMatKhau", "(*) Ky tu 6-12", 6, 12);

    /* Chức vụ */
    isValid &= validation.kiemTraChucVu("chucvu", "tbChucVu", "(*) vui lòng chọn chức vụ");

    /* CheckEmail */
    isValid &= validation.checkEmail(email, "tbEmail", "(*)email khong hop le");

    // if(isValid = true){
    if (isValid) {
        //    console.log("them nhan vien thanh cong");
        var nhanVien = new NhanVien(maNV, hoTen, email, password, date, chucVu);
        danhSachNhanVien.themNV(nhanVien);
        console.log(danhSachNhanVien.mangNhanVien);

        // Lưu mảng xuống localStorage
        taoBang();
        setLocalStorage();


    }
});
function setLocalStorage() {
    // khi lưu xuống localStorage chuyen data thanh string
    localStorage.setItem("DanhSachNhanVien", JSON.stringify(danhSachNhanVien.mangNhanVien));
}

// Lấy mảng từ localStorage
function getLocalStorange() {
    // khi lấy localStorage len de sử dụng chuyển thành JSON
    if (localStorage.getItem("DanhSachNhanVien")) {
        danhSachNhanVien.mangNhanVien = JSON.parse(localStorage.getItem("DanhSachNhanVien"));
        taoBang();
    }

}
// Tìm kiếm
getEle("searchName").addEventListener("keyup", function(){
    var chuoiTimKiem = getEle("searchName").value;
    console.log(chuoiTimKiem);

    var mangTimKiem = danhSachNhanVien.timNhanVien(chuoiTimKiem);

    taoBang(mangTimKiem);
});
// Cập nhât Nhan Vien
getEle("btnCapNhat").addEventListener("click",function(){
    var maNV = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var date = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    var nhanVien = new NhanVien(maNV, hoTen, email, password, date, chucVu)

    danhSachNhanVien.capNhatNhanVien(nhanVien);
    taoBang();
    setLocalStorage();
});
// Xóa Nhân Viên
function xoa(maNV) {
    console.log(maNV);
    danhSachNhanVien.xoaNhanVien(maNV);
    taoBang();
    // XOA SETlocalStorage
    setLocalStorage();
}
function suaNhanVien(maNV) {
    console.log(maNV);
    getEle("btnThemNV").style.display = "none";
    getEle("btnCapNhat").style.display = "block";

    var nhanVien = danhSachNhanVien.layThongTinNguoiDung(maNV);
    console.log(nhanVien);

    getEle("msnv").value = nhanVien.maNV;
    getEle("msnv").setAttribute("disabled",true);
    getEle("name").value = nhanVien.tenNV;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.password;
    getEle("datepicker").value = nhanVien.date;
    getEle("chucvu").value = nhanVien.chucVu;
}
function taoBang(mang = danhSachNhanVien.mangNhanVien) { // ES6
    var tbody = getEle("tableDanhSach");
    var content = "";
    // danhSachNhanVien.mangNhanVien.map(function (item, index) {
        mang.map(function(item, index) {
        content += `
            <tr>
                <td> ${item.maNV} </td>
                <td>${item.tenNV}</td>
                <td>${item.email}</td>
                <td>${item.date}</td>
                <td>${item.chucVu}</td>
                <td>
                    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${item.maNV}')"> Sữa</button>
                    <button class="btn btn-danger" onclick="xoa('${item.maNV}')"> Xóa</button>
                </td>


            </tr>
        `;
    });
    tbody.innerHTML = content;
}


// if (maNV === "") {
//     getEle("tbMaNV").style.display = "block";
//     getEle("tbMaNV").innerHTML = " Ma nv khong duoc rong";
// }
// else {
//     getEle("tbMaNV").style.display = "none";
//     getEle("tbMaNv").innerHTML = "";
// }


// function kiemTraRong(input, spanId, message) {
//     if (input === "") {
//         getEle(spanId).style.display = "block";
//         getEle(spanId).innerHTML = message;

//         return false;
//     }
//     else {
//         getEle(spanId).style.display = "none";
//         getEle(spanId).innerHTML = "";
//         return true;
//     }
// }

// function kiemTraKiTu(input, spanId, message,min,max){
//     // if(input.length >=6 && input.length <= 12){
//         if(input.length >= min && input.length <= max){
//             // Hop Le
//         getEle(spanId).style.display = "none";
//         getEle(spanId).innerHTML = "";
//         return true;
//     }
//     // else {
//         // khong hop le
//         getEle(spanId).style.display = "block";
//         getEle(spanId).innerHTML = message;
//         return false;
//     // }
// }

// function kiemTraChucVu(id, spanId, message){
//     if(getEle(id).selectedIndex !== 0){
//         // Hợp Lệ
//         getEle(spanId).style.display = "none";
//         getEle(spanId).innerHTML= "";
//         return true;
//     }
//         // khong hop le
//         getEle(spanId).style.display = "block";
//         getEle(spanId).innerHTML = message;
//         return false;

// }

// function checkEmail(input, spanId, message){
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(input.match(mailformat)){
//         // Hợp lệ 
//         getEle(spanId).style.display = "none";
//         getEle(spanId).innerHTML= "";
//         return true;
//     }
//     // khong hop lệ
//     getEle(spanId).style.display = "block";
//     getEle(spanId).innerHTML = message;
//     return false;
// }

// function kiemTraChuoi(input, spanId, message){
//     var pattern = new RegExp(

//         "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +

//           "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +

//           "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"

//       );


//     // if(input.match(letters)){
//         if(pattern.test(input)){
//          // Hợp lệ 
//          getEle(spanId).style.display = "none";
//          getEle(spanId).innerHTML= "";
//          return true;
//      }
//      // khong hop lệ
//      getEle(spanId).style.display = "block";
//      getEle(spanId).innerHTML = message;
//      return false;

// }


function getEle(id) {
    return document.getElementById(id);
}
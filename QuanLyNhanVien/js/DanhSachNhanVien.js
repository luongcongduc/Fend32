function DanhSachNhanVien(){
    this.mangNhanVien = [];

    this.themNV = function(NhanVien){
    this.mangNhanVien.push(NhanVien);
}

    this.xoaNhanVien = function(maNV){
        /**
         * 0. Tạo 1 biến vị trí = -1;
         * 1. Duyệt mảng
         * 2. Nếu maNV === item.MaNV
         * 3. vitri = index;
         * 4. array.splice(vitri , 1);
         */
        // var vitri = -1;
        // this.mangNhanVien.map(function(item, index){
        //     if(maNV === item.maNV){
        //         vitri = index;
        //     }
        // });
        var vitri = this.timViTri(maNV);
        if(vitri !== -1){
            this.mangNhanVien.splice(vitri, 1);
        }
    };
    this.timViTri = function(maNV){
        var vitri = -1;
        this.mangNhanVien.map(function(item, index){
            if(maNV === item.maNV){
                vitri = index;
            }
        });
        return vitri;
    }
};
 
DanhSachNhanVien.prototype.layThongTinNguoiDung = function(maNV){
    var vitri = this.timViTri(maNV);
    return this.mangNhanVien[vitri];
};

DanhSachNhanVien.prototype.capNhatNhanVien = function(NhanVien){
    var vitri = this.timViTri(NhanVien.maNV);

    if(vitri !== -1){
        this.mangNhanVien[vitri] = NhanVien;
    }
};

DanhSachNhanVien.prototype.timNhanVien = function(chuoiTimKiem){
    /**
     * 0. mangTimKiem = []
     * 1.  duyệt mảng nhan viên
     * 2. Nếu chuoiTimKiem có tồn tại trong mảng
     * 3. mangTimKiem.push nhân viên tìm thấy
     * 4. trả về mangTimKiem
     */

     var mangTimKiem = [];
     this.mangNhanVien.map(function(item){
         // Thay 3 dau bằng bằng hàm indexof của javascript
        //  if(chuoiTimKiem ===item.tenNV){
            if(item.tenNV.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
             mangTimKiem.push(item);
         } 
     });
     return mangTimKiem;
}
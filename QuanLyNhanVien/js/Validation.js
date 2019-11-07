function Validation(){
    this.kiemTraTrungMaNV = function(input, spanId, message, mangNhanVien){
        /**
         * 1.Duyệt Mảng
         * 2. So sánh input có trùng MàNv trong mảng không
         * 3. Nếu như input trùng MaNV trong mảng ==> return false
         * 4. Ngược lại ==> return true
         */
        // var check = true;
        // mangNhanVien.map(function(item){
        //     if(input === item.maNV){
        //         getEle(spanId).style.display = "block";
        //         getEle(spanId).innerHTML = message;
        //         check = false;
        //     } else{
        //         getEle(spanId).style.display = "none";
        //         getEle(spanId).innerHTML = "";
        //         check = true;
        //     }
        // });
        // return check;
        
        var check = mangNhanVien.some(function(item){
            return input === item.maNV;
        });

        if(check){
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }

        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    };
    this.kiemTraRong = function(input, spanId, message) {
        if (input === "") {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
    
            return false;
        }
        else {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
    }
    
    this.kiemTraKiTu = function(input, spanId, message,min,max){
        // if(input.length >=6 && input.length <= 12){
            if(input.length >= min && input.length <= max){
                // Hop Le
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        // else {
            // khong hop le
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        // }
    }
    
    this.kiemTraChucVu = function(id, spanId, message){
        if(getEle(id).selectedIndex !== 0){
            // Hợp Lệ
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML= "";
            return true;
        }
            // khong hop le
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        
    }
    
    this.checkEmail = function(input, spanId, message){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(input.match(mailformat)){
            // Hợp lệ 
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML= "";
            return true;
        }
        // khong hop lệ
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }
    
    this.kiemTraChuoi = function(input, spanId, message){
        var pattern = new RegExp(
    
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      
              "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      
              "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
      
          );
      
      
        // if(input.match(letters)){
            if(pattern.test(input)){
             // Hợp lệ 
             getEle(spanId).style.display = "none";
             getEle(spanId).innerHTML= "";
             return true;
         }
         // khong hop lệ
         getEle(spanId).style.display = "block";
         getEle(spanId).innerHTML = message;
         return false;
        
    }
}
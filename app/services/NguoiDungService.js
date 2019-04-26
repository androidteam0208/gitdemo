function NguoiDungService() {
    //var DSND = [];
    //tạo hàm lấy danh sách người dùng
    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            //link api
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
        // .done(function(result){
        //     console.log(result);
        //     taoBang(result);
        // })
        // .fail(function(err){
        //     console.log(err);
        // })
    }
    this.themNguoiDung = function(nguoiDung){
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data : nguoiDung
        })
        .done(function(result){
            if(result === "tai khoan da ton tai !")
                alert(result);
            else
                location.reload(); //reload dung trang dang dung
                // location.href = '/link'  //di toi link
        })
        .fail(function(err){
            console.log(err);
        })
    }

    //xoa nguoi dung
    this.xoaNguoiDung = function(taiKhoan) {
        return $.ajax({
            //link api
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type: "DELETE",
        })
        .done(function(result){
            console.log(result);
        })
        .fail(function(err){
            console.log(err);
        })
    }
    

    //tim kiem nguoi dung
    this.timKiemNguoiDung = function(chuoiTimKiem){
        var dsnd = JSON.parse(localStorage.getItem("danhsachNguoiDung"));
        var mangTimKiem = [];
        dsnd.map(function(item){
            if(item.TaiKhoan.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1 ){
                mangTimKiem.push(item);
            }
        })
        return mangTimKiem;
        
    }

    //cap nhat thong tin nguoi dung
    this.capNhatThongTin = function(nguoiDung){
        $.ajax({
            url: "`http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung",
            type: "PUT",
            data : nguoiDung,
        })
        .done(function(result){
            console.log(result);
        })
        .fail(function(err){
            console.log(err)
        })
    }
    
}
//TAO BANG DANH SACH NGUOI DUNG
/*function taoBang(danhSachNguoiDung){

    var tblBody = "";

    // for(var i=0; i<danhSachNguoiDung.length ; i++){
    //     tblBody +=`
    //         <tr>
    //             <td>${i+1}</td>
    //             <td>${danhSachNguoiDung[i].TaiKhoan}</td>
    //              <td>${danhSachNguoiDung[i].MatKhau}</td>
    //             <td>${danhSachNguoiDung[i].HoTen}</td>
    //             <td>${danhSachNguoiDung[i].Email}</td>
    //             <td>${danhSachNguoiDung[i].SoDT}</td>
    //             <td>${danhSachNguoiDung[i].TenLoaiNguoiDung}</td>

    //         </tr>
    //     `
    // }
    $("#tblDanhSachNguoiDung").html(tblBody);
}*/
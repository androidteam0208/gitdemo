$(document).ready(function(){ //dam bao html render xong moi 
    //tao doi tuong ND service
    var nguoiDungService = new NguoiDungService();

    layDanhSachNguoiDung();

    //them moi
    $("#btnThemNguoiDung").click(function(){
        getInput("Thêm mới","Thêm","btnThem");

    })

    //sua nguoi dung
    $("body").delegate(".btnSua", "click" , function(){
        getInput("Cập nhật","Sửa","btnSua");
        // console.log("aaa");
        $("#TaiKhoan").val
       
    } )

    //xoa tài khoản
    $("body").delegate(".btnXoa", "click" , function(){
       var taiKhoan = $(this).data('taikhoan');
       console.log(taiKhoan);
       nguoiDungService.xoaNguoiDung(taiKhoan);
       
       
    } )
    $("#txtTimKiem").keyup(function(){
        var taikhoan = $("#txtTimKiem").val();
        var bang = nguoiDungService.timKiemNguoiDung(taikhoan);
        taoBang(bang);
    })

    $("body").delegate("#btnThem", "click" , function(){
      var taiKhoan = $("#TaiKhoan").val();
      var hoTen = $("#HoTen").val();
      var matKhau = $("#MatKhau").val();
      var email = $("#Email").val();
      var soDienThoai = $("#SoDienThoai").val();
      var loaiNguoiDung = $("#loaiNguoiDung").val();

      var nguoiDung = new NguoiDung(taiKhoan , matKhau , hoTen ,  email , soDienThoai , loaiNguoiDung);
       console.log(nguoiDung);
       nguoiDungService.themNguoiDung(nguoiDung);
    } )


    //dom toi cac nut them sua và tạo modal theo nut
    function getInput(title , btnTitle , btnId){
            $(".modal-title").html(title);
    
            var footer=`
                <button class="btn btn-success" id='${btnId}'>${btnTitle}</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            `
            $(".modal-footer").html(footer);
    
        
    }

    //lay danh sach nguoi dung tu service
    function layDanhSachNguoiDung(){
        var danhSachNguoiDung = nguoiDungService.layDanhSachNguoiDung();
        danhSachNguoiDung.done(function(result){
            //console.log(result);
            taoBang(result);
            localStorage.setItem("danhsachNguoiDung" , JSON.stringify(result));
        })
        danhSachNguoiDung.fail(function(err){
            console.log(err);
        })
    }

    //TAO BANG DANH SACH NGUOI DUNG
function taoBang(danhSachNguoiDung){
        
    var tblBody = "";
    danhSachNguoiDung.map(function(item, index){ //item is a object of array
        tblBody +=`
            <tr>
                <td>${index+1}</td>
                <td>${item.TaiKhoan}</td>
                 <td>${item.MatKhau}</td>
                <td>${item.HoTen}</td>
                <td>${item.Email}</td>
                <td>${item.SoDT}</td>
                <td>${item.TenLoaiNguoiDung}</td>
                <td> 
                    <button class="btn btn-warning btnSua " data-toggle="modal" data-target="#myModal" >Sửa</button>
                    <button class="btn btn-danger btnXoa" data-taikhoan="${item.TaiKhoan}">Xóa</button>
                </td>

            </tr> `
    })

    $("#tblDanhSachNguoiDung").html(tblBody);
}

    
})

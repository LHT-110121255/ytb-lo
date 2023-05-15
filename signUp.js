// hàm kiểm tra thong tin đăng nhập
function kiemTra(tenBien, dieuKien, thongBao) {
    var ans = true;
    if(tenBien == dieuKien) {
        ans = false;

        alert(thongBao);
    }
    return ans;
};
// ham kiểm tra độ dài
function kiemTraDoDai(tenBien, min, max, thongBao) {
    var ans = true;
    if (!(tenBien >= min && tenBien <= max)) {
        alert (thongBao)
        tenBien.classList.add("error")
        ans = false;
    }
    return ans;
}

function signUp() {
    const HoTen = document.getElementById('fullName');
    const  TenDangNhap= document.getElementById('NameSign');
    const MatKhau = document.getElementById('passWord');
    const GioiTinh = document.getElementById('gioiTinh');
    const NgaySinh = document.getElementById('ngaySinh');
    
    const TP = document.getElementById('queQuan');
    const display_HT = document.getElementById('display_HT');
    const display_TDN = document.getElementById('display_TDN');
    const display_MK = document.getElementById('display_MK');
    const display_NS = document.getElementById('display_NS');
    const display_GT = document.getElementById('display_GT');
    const display_QQ = document.getElementById('display_QQ');
    // xử lý logic kiem tra thong tin
    kiemTra(HoTen.value,"", "Không bỏ trống họ tên");
    if(kiemTra(TenDangNhap.value,"", "Không bỏ trống tên đăng nhập")) {
            (TenDangNhap.value.length != 9) ? alert("Tên đăng nhập phải có 9 ký tự"): true;
        };
        
        kiemTraDoDai(MatKhau.value.length,6, 9, "Mật khẩu phải nằm trong [6, 9] ký tự");
        // xu ly in ra man hình
    display_HT.outerHTML = HoTen.value;
    display_TDN.outerHTML = TenDangNhap.value;
    display_MK.outerHTML = MatKhau.value;
    display_GT.outerHTML =GioiTinh.value;
    display_NS.outerHTML =NgaySinh.value;
    display_QQ.outerHTML= TP.value;
}
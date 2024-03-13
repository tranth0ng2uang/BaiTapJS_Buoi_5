// BÀI 1
function tinhDiem() {
  var diemChuan = parseFloat(document.getElementById("inputDiemChuan").value);
  var diemMon1 = parseFloat(document.getElementById("inputDiemMon1").value);
  var diemMon2 = parseFloat(document.getElementById("inputDiemMon2").value);
  var diemMon3 = parseFloat(document.getElementById("inputDiemMon3").value);
  var khuVucUuTien = parseFloat(document.getElementById("selectKhuVuc").value);
  var doiTuongUuTien = parseFloat(
    document.getElementById("selectDoiTuong").value
  );

  if (
    isNaN(diemChuan) ||
    isNaN(diemMon1) ||
    isNaN(diemMon2) ||
    isNaN(diemMon3)
  ) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }
  if (isNaN(khuVucUuTien)) {
    khuVucUuTien = 0;
  }

  if (isNaN(doiTuongUuTien)) {
    doiTuongUuTien = 0;
  }

  var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVucUuTien + doiTuongUuTien;

  var ketQua = document.getElementById("ketQua");
  ketQua.style.fontWeight = "Bold";
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    ketQua.style.color = "red";
    ketQua.innerHTML = "BẠN ĐÃ RỚT";
  } else if (tongDiem >= diemChuan) {
    ketQua.innerHTML = "Bạn đã Đậu - Tổng số điểm: " + tongDiem;
    ketQua.style.color = "blue";
  } else {
    ketQua.style.color = "green";
    ketQua.innerHTML = "Bạn đã RỚT - Tổng số điểm: " + tongDiem;
  }
}

// BÀI 2
function tinhTienDien(hoTen, soKW) {
  hoTen = document.getElementById("inputHoTen").value;
  soKW = parseInt(document.getElementById("inputSoKW").value);
  if (!hoTen || !soKW) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  var tienDien = 0;

  if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW <= 100) {
    tienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  }

  var ketQua = document.getElementById("ketQua2");
  ketQua.style.color = "green";
  ketQua.style.fontWeight = "Bold";
  ketQua.innerHTML =
    hoTen +
    " cần thanh toán " +
    tienDien.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// BÀI 3
function tinhThueThuNhap() {
  var hoTen = document.getElementById("inputHoTen__bai3").value;
  var thuNhapNam = parseInt(document.getElementById("inputThuNhapNam").value);
  var soNguoiPhuThuoc = parseInt(
    document.getElementById("inputSoNguoiPhuThuoc").value
  );
  // Kiểm tra xem các ô nhập liệu có trống không
  if (hoTen == "" || thuNhapNam == "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (!soNguoiPhuThuoc) {
    soNguoiPhuThuoc = 0;
  }

  thuNhapNam = parseFloat(thuNhapNam);

  var thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

  console.log("thu nhap chiu the" + thuNhapChiuThue);
  console.log("thu nhap nam " + thuNhapNam);
  console.log(soNguoiPhuThuoc);
  var thueSuat = 0;

  if (thuNhapChiuThue <= 60000000) {
    thueSuat = 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thueSuat = 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thueSuat = 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thueSuat = 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thueSuat = 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }

  var thueThuNhap = thuNhapChiuThue * thueSuat;

  var ketQua = document.getElementById("ketQua3");
  ketQua.style.fontWeight = "bold";
  ketQua.style.color = "green";
  ketQua.innerHTML =
    hoTen +
    " phải nộp thuế thu nhập cá nhân là " +
    thueThuNhap.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// BÀI 4
function hienThiSoKetNoi() {
  var selectLoaiKhachHang = document.getElementById("selectLoaiKhachHang");
  var soKetNoiRow = document.getElementById("soKetNoiRow");

  if (selectLoaiKhachHang.value === "doanhNghiep") {
    soKetNoiRow.style.display = "block";
  } else {
    soKetNoiRow.style.display = "none";
  }
}

function tinhHoaDon() {
  var selectLoaiKhachHang = document.getElementById(
    "selectLoaiKhachHang"
  ).value;
  var maKhachHang = document.getElementById("inputMaKhachHang").value;
  var soKetNoi = document.getElementById("inputSoKetNoi").value;
  var soKenhCaoCap = document.getElementById("inputSoKenhCaoCap").value;

  // Kiểm tra xem các trường đã nhập đủ chưa
  if (selectLoaiKhachHang === "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  // Chuyển các giá trị về số
  if (soKenhCaoCap == "") {
    soKenhCaoCap = 0;
  }
  console.log("so kenh cao cap: " + soKenhCaoCap);
  soKenhCaoCap = parseFloat(soKenhCaoCap);

  if (selectLoaiKhachHang === "doanhNghiep") {
    soKetNoi = parseInt(soKetNoi);
  }

  // Tính hóa đơn
  var hoaDon = parseFloat(hoaDon);
  if (selectLoaiKhachHang === "nhaDan") {
    hoaDon = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else {
    var phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    if (soKetNoi <= 10) {
      phiDichVuCoBan = 75;
    }
    hoaDon = 15 + phiDichVuCoBan + 50 * soKenhCaoCap;
  }

  // Hiển thị kết quả
  var ketQua = document.getElementById("ketQua4");
  ketQua.innerHTML = "Mã khách hàng: " + maKhachHang + "; ";
  ketQua.style.fontWeight = "bold";
  ketQua.style.color = "green";
  ketQua.innerHTML +=
    "Hóa đơn: $" +
    hoaDon
      .toFixed(2)
      .toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

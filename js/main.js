// Bài 1
function tinhDiemKhuVuc(khuVuc) {
  let diem = 0;
  switch (khuVuc) {
    case "A":
      diem = 2;
      break;
    case "B":
      diem = 1;
      break;
    case "C":
      diem = 0.5;
      break;
    default:
      diem = 0;
      break;
  }
  return diem;
}

function tinhDiemDoiTuong(doiTuong) {
  let diem = 0;
  switch (doiTuong) {
    case 1:
      diem = 2.5;
      break;
    case 2:
      diem = 1.5;
      break;
    case 3:
      diem = 1;
      break;
    default:
      diem = 0;
      break;
  }
  return diem;
}

const btnKetQuaTuyenSinh = document.getElementById("btnKetQuaTuyenSinh");
btnKetQuaTuyenSinh.onclick = function () {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value * 1;
  const diemMon1 = document.getElementById("diemMon1").value * 1;
  const diemMon2 = document.getElementById("diemMon2").value * 1;
  const diemMon3 = document.getElementById("diemMon3").value * 1;

  const diemKhuVuc = tinhDiemKhuVuc(khuVuc);
  const diemDoiTuong = tinhDiemDoiTuong(doiTuong);
  const diemUuTien = diemKhuVuc + diemDoiTuong;
  const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  let result = "";

  if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
    result = `<span class="text-rose-600 font-bold">Bạn đã rớt.</span>&nbsp;Do có điểm nhỏ hơn hoặc bằng 0`;
  } else if (tongDiem >= diemChuan) {
    result = `<span class="text-emerald-600 font-bold">Bạn đã đậu.</span>&nbsp;Tổng điểm: <strong class="text-[#f55f8d] font-extrabold ml-1">${tongDiem}</strong>`;
  } else {
    result = `<span class="text-rose-600 font-bold">Bạn đã rớt.</span>&nbsp;Tổng điểm: <strong class="text-rose-600 font-extrabold ml-1">${tongDiem}</strong>`;
  }

  const pKetQuaBai1 = document.getElementById("pKetQuaBai1");
  pKetQuaBai1.innerHTML = result;
};

// Bài 2
const GIA_KW_1 = 500;
const GIA_KW_2 = 650;
const GIA_KW_3 = 850;
const GIA_KW_4 = 1100;
const GIA_KW_5 = 1300;

function tinhTienDienTheoKw(soKw, gia1, gia2, gia3, gia4, gia5) {
  let tongTien = 0;

  if (0 < soKw && soKw <= 50) {
    tongTien = soKw * gia1;
  } else if (50 < soKw && soKw <= 100) {
    tongTien = 50 * gia1 + (soKw - 50) * gia2;
  } else if (100 < soKw && soKw <= 200) {
    tongTien = 50 * gia1 + 50 * gia2 + (soKw - 100) * gia3;
  } else if (200 < soKw && soKw <= 350) {
    tongTien = 50 * gia1 + 50 * gia2 + 100 * gia3 + (soKw - 200) * gia4;
  } else if (soKw > 350) {
    tongTien =
      50 * gia1 + 50 * gia2 + 100 * gia3 + 150 * gia4 + (soKw - 350) * gia5;
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }

  return tongTien;
}

const btnTinhTienDien = document.getElementById("btnTinhTienDien");
btnTinhTienDien.onclick = function () {
  const hoTenDien = document.getElementById("hoTenDien").value;
  const soKw = document.getElementById("soKw").value * 1;

  const tongTien = tinhTienDienTheoKw(
    soKw,
    GIA_KW_1,
    GIA_KW_2,
    GIA_KW_3,
    GIA_KW_4,
    GIA_KW_5
  );

  const formatterVND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const result = `Họ tên: <strong class="text-[#262626] font-bold mr-4">${hoTenDien}</strong> Tiền điện: <strong class="text-[#f55f8d] font-extrabold">${formatterVND.format(tongTien)}</strong>`;

  const pKetQuaBai2 = document.getElementById("pKetQuaBai2");
  pKetQuaBai2.innerHTML = result;
};

// Bài 3
function tinhThuNhapChiuThue(tongThuNhapNam, soNguoiPhuThuoc) {
  return tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;
}

function layThueSuat(thuNhapChiuThue) {
  let thueSuat = 0;

  if (thuNhapChiuThue <= 60e6) {
    thueSuat = 0.05;
  } else if (thuNhapChiuThue <= 120e6) {
    thueSuat = 0.1;
  } else if (thuNhapChiuThue <= 210e6) {
    thueSuat = 0.15;
  } else if (thuNhapChiuThue <= 384e6) {
    thueSuat = 0.2;
  } else if (thuNhapChiuThue <= 624e6) {
    thueSuat = 0.25;
  } else if (thuNhapChiuThue <= 960e6) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }

  return thueSuat;
}

const btnTinhTienThue = document.getElementById("btnTinhTienThue");
btnTinhTienThue.onclick = function () {
  const hoTenThue = document.getElementById("hoTenThue").value;
  const tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  const thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhapNam, soNguoiPhuThuoc);

  let tienThue = 0;
  if (thuNhapChiuThue > 0) {
    const thueSuat = layThueSuat(thuNhapChiuThue);
    tienThue = thuNhapChiuThue * thueSuat;
  } else {
    alert("Số tiền thu nhập không hợp lệ!");
  }

  const formatterVND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const result = `Họ tên: <strong class="text-[#262626] font-bold mr-4">${hoTenThue}</strong> Tiền thuế thu nhập cá nhân: <strong class="text-[#f55f8d] font-extrabold">${formatterVND.format(tienThue)}</strong>`;

  const pKetQuaBai3 = document.getElementById("pKetQuaBai3");
  pKetQuaBai3.innerHTML = result;
};

// Bài 4
const NHA_DAN_PHI_HOA_DON = 4.5;
const NHA_DAN_PHI_CO_BAN = 20.5;
const NHA_DAN_KENH_CAO_CAP = 7.5;

const DN_PHI_HOA_DON = 15;
const DN_PHI_CO_BAN_10_DAU = 75;
const DN_PHI_KET_NOI_THEM = 5;
const DN_KENH_CAO_CAP = 50;

function xuLyAnHienKetNoi() {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const wrapSoKetNoi = document.getElementById("wrapSoKetNoi");

  if (loaiKhachHang === "doanhNghiep") {
    wrapSoKetNoi.classList.remove("hidden");
  } else {
    wrapSoKetNoi.classList.add("hidden");
  }
}

function tinhTienCapNhaDan(soKenhCaoCap) {
  return (
    NHA_DAN_PHI_HOA_DON +
    NHA_DAN_PHI_CO_BAN +
    soKenhCaoCap * NHA_DAN_KENH_CAO_CAP
  );
}

function tinhTienCapDoanhNghiep(soKenhCaoCap, soKetNoi) {
  let phiDichVuCoBan = DN_PHI_CO_BAN_10_DAU;
  if (soKetNoi > 10) {
    phiDichVuCoBan =
      DN_PHI_CO_BAN_10_DAU + (soKetNoi - 10) * DN_PHI_KET_NOI_THEM;
  }

  return DN_PHI_HOA_DON + phiDichVuCoBan + soKenhCaoCap * DN_KENH_CAO_CAP;
}

const btnTinhTienCap = document.getElementById("btnTinhTienCap");
btnTinhTienCap.onclick = function () {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const maKhachHang = document.getElementById("maKhachHang").value;
  const soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  const soKetNoi = document.getElementById("soKetNoi").value * 1;

  let tongTienCap = 0;

  switch (loaiKhachHang) {
    case "nhaDan":
      tongTienCap = tinhTienCapNhaDan(soKenhCaoCap);
      break;
    case "doanhNghiep":
      tongTienCap = tinhTienCapDoanhNghiep(soKenhCaoCap, soKetNoi);
      break;
    default:
      alert("Hãy chọn loại khách hàng!");
      return;
  }

  const formatterUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const result = `Mã khách hàng: <strong class="text-[#262626] font-bold mr-4">${maKhachHang}</strong> Tiền cáp: <strong class="text-[#f55f8d] font-extrabold">${formatterUSD.format(tongTienCap)}</strong>`;

  const pKetQuaBai4 = document.getElementById("pKetQuaBai4");
  pKetQuaBai4.innerHTML = result;
};

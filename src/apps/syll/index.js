import React, { useState } from "react";
import "../../App.css";
import WorkExperienceTable from "./components/WorkExp";
import MyComponent from "./components/Address";
import FamilyRelationshipTable from "./components/FamilyRelationships";
import SalaryHistoryTable from "./components/SalaryHistory";
import EducationTable from "./components/Education";

const SYLL = () => {
  const [formValues, setFormValues] = useState({
    hoTenKhaiSinh: "",
    tenGoiKhac: "",
    sinhNgay: "",
    gioiTinh: "",
    noiSinh: "",
    queQuan: "",
    danToc: "",
    tonGiao: "",
    noiDangKyBoKhauThuongTru: "",
    noiOHienNay: "",
    ngheNghiepKhiDuocTuyenDung: "",
    ngayTuyenDung: "",
    coQuanTuyenDung: "",
    chucVuHienTai: "",
    congViecChinhDuocGiao: "",
    ngachCongChuc: "",
    trinhDoGiaoDucPhoThong: "",
    trinhDoChuyenMonCaoNhat: "",
    lyLuanChinhTri: "",
    quanLyNhaNuoc: "",
    ngoaiNgu: "",
    tinHoc: "",
    ngayVaoDang: "",
    ngayThamGiaToChucChinhTriXaHoi: "",
    ngayNhapNgu: "",
    danhHieuDuocPhongTangCaoNhat: "",
    soTruongCongTac: "",
    khenThuong: "",
    kyLuat: "",
    tinhTrangSucKhoe: "",
    thuongBinhHang: "",
    soCMND: "",
    soSoBHXH: "",
    daoTaoBoiDuong: [
      {
        tenTruong: "",
        chuyenNganh: "",
        thoiGian: "",
        hinhThuc: "",
        vanBang: "",
      },
    ],
    tomTatQuaTrinhCongTac: [
      {
        ngayThang: "",
        chucDanh: "",
      },
    ],
    dacDiemLichSuBanThan: "",
    // quanHeGiaDinh: {
    //   cha: {},
    //   me: {},
    //   voChong: {},
    //   con: [],
    //   anhChiEmRuot: [],
    // },
    quanHeGiaDinhCuaToi: [
      {
        moiQuanHe: "",
        hoTen: "",
        namSinh: "",
        chiTiet: "",
      },
    ],
    quanHeGiaDinhCuaBanDoi: [
      {
        moiQuanHe: "",
        hoTen: "",
        namSinh: "",
        chiTiet: "",
      },
    ],
    //luongCbcnv: [],
    nhanXetDonVi: "",
    lichSuLuong: [
      {
        thangNam: "",
        maNgachBac: "",
        heSoLuong: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Chuyển đổi giá trị thành chữ in hoa nếu tên trường là 'hoTenKhaiSinh'
    if (name === "hoTenKhaiSinh") {
      updatedValue = value.toUpperCase();
    }

    setFormValues((prevValues) => ({ ...prevValues, [name]: updatedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formValues.noiSinh = address1;
    formValues.queQuan = address2;
    formValues.noiDangKyBoKhauThuongTru = address3;
    formValues.noiOHienNay = address4;

    // Xử lý dữ liệu sau khi submit
    console.log(formValues);
  };

  // ------------------------------- xu ly bang du lieu-----------------------------------

  const [rows, setRows] = useState([
    {
      tenTruong: "",
      chuyenNganh: "",
      thoiGian: "",
      hinhThucDaoTao: "",
      vanBang: "",
    },
  ]);

  const handleChangeTable = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        tenTruong: "",
        chuyenNganh: "",
        thoiGian: "",
        hinhThucDaoTao: "",
        vanBang: "",
      },
    ]);
  };

  // const handleAddressChange = (address) => {
  //   // Giả sử address có các thuộc tính: city, district, ward
  //   const { city, district, ward } = address;

  //   // Kết hợp các thành phần địa chỉ bằng dấu phẩy
  //   const combinedAddress = `${city}, ${district}, ${ward}`;

  //   // Cập nhật state với địa chỉ kết hợp
  //   setFormValues((prevValues) => ({ ...prevValues, [formValues.noiSinh]: combinedAddress }));
  // };

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [address4, setAddress4] = useState("");

  const handleAddressChange = (address, setAddress) => {
    return (selectedAddress) => {
      setAddress(selectedAddress);
    };
  };

  // Hàm để cập nhật giá trị tomTatQuaTrinhCongTac
  const updateWorkExperiences = (workExperiences) => {
    setFormValues({
      ...formValues,
      tomTatQuaTrinhCongTac: workExperiences.map((experience) => ({
        ngayThang: experience.period,
        chucDanh: experience.position,
      })),
    });
  };

  const updateFamilyRelationships1 = (familyRelationships) => {
    setFormValues({
      ...formValues,
      quanHeGiaDinhCuaToi: familyRelationships.map((relationships) => ({
        moiQuanHe: relationships.relationship,
        hoTen: relationships.name,
        namSinh: relationships.birthYear,
        chiTiet: relationships.details,
      })),
    });
  };

  const updateFamilyRelationships2 = (familyRelationships) => {
    setFormValues({
      ...formValues,
      quanHeGiaDinhCuaBanDoi: familyRelationships.map((relationships) => ({
        moiQuanHe: relationships.relationship,
        hoTen: relationships.name,
        namSinh: relationships.birthYear,
        chiTiet: relationships.details,
      })),
    });
  };

  const updateSalaryHistory = (salaryHistory) => {
    setFormValues({
      ...formValues,
      lichSuLuong: salaryHistory.map((salary) => ({
        thangNam: salary.monthYear,
        maNgachBac: salary.salaryCode,
        heSoLuong: salary.salaryFactor,
      })),
    });
  };

  const updateEducation = (education) => {
    setFormValues({
      ...formValues,
      daoTaoBoiDuong: education.map((edu) => ({
        tenTruong: edu.school,
        chuyenNganh: edu.major,
        thoiGian: edu.period,
        hinhThuc: edu.type,
        vanBang: edu.degree,
      })),
    });
  };

  return (
    <div className="form-container">
      <h1 style={{ textAlign: "center" }}>Sơ yếu lý lịch cán bộ, công chức</h1>

      <form onSubmit={handleSubmit}>
        <label>
          1. Họ và tên khai sinh (ví dụ: Nguyễn Văn A):
          <input
            type="text"
            name="hoTenKhaiSinh"
            value={formValues.hoTenKhaiSinh}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          2. Tên gọi khác:
          <input
            type="text"
            name="tenGoiKhac"
            value={formValues.tenGoiKhac}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          3. Sinh ngày:
          <input
            type="date"
            name="sinhNgay"
            value={formValues.sinhNgay}
            onChange={handleChange}
          />
          Giới tính:
          <select
            name="gioiTinh"
            value={formValues.gioiTinh}
            onChange={handleChange}
          >
            <option value="">Chọn giới tính</option>
            <option value="nam">Nam</option>
            <option value="nu">Nữ</option>
          </select>
        </label>{" "}
        <br />
        {/* <label htmlFor="noiSinh">4. Nơi sinh:</label>
      <Adress onAddressChange={handleAddressChange()} />
      <input
        type="text"
        name="noiSinh"
        value={formValues.noiSinh}
        onChange={(e) => e.preventDefault()} // Ngăn chặn submit form mặc định
        // Vô hiệu hóa trường nhập liệu này
      /> */}
        {/* 4. Nơi sinh:
        <MyComponent onAddressChange={handleAddressChange(formValues.noiSinh, handleChange)} />
        <input
          type="text"
          value={formValues.noiSinh}
          onChange={handleChange}
          placeholder="Nơi sinh"
        /> */}
        <label>
          4. Nơi sinh:
          <MyComponent
            onAddressChange={handleAddressChange(address1, setAddress1)}
          />
          <input
            type="text"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            placeholder="Địa chỉ đã chọn 1"
            style={{ maxWidth: "800px" }}
          />
        </label>
        <br />
        {/* <label>
          4. Nơi sinh:
          <input
            type="text"
            name="noiSinh"
            value={formValues.noiSinh}
            onChange={handleChange}
          />
        </label> 
          <Adress/> */}
        <label>
          5. Quê quán:
          <MyComponent
            onAddressChange={handleAddressChange(address2, setAddress2)}
          />
          <input
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            placeholder="Địa chỉ đã chọn 2"
            style={{ width: "100%" }}
          />
        </label>{" "}
        <br />
        <label>
          6. Dân tộc:
          <input
            type="text"
            name="danToc"
            value={formValues.danToc}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          7. Tôn giáo:
          <input
            type="text"
            name="tonGiao"
            value={formValues.tonGiao}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          8. Nơi đăng ký bộ khẩu thường trú:
          <MyComponent
            onAddressChange={handleAddressChange(address3, setAddress3)}
          />
          <input
            type="text"
            value={address3}
            onChange={(e) => setAddress3(e.target.value)}
            placeholder="Địa chỉ đã chọn 3"
            style={{ width: "100%" }}
          />
        </label>{" "}
        <br />
        <label>
          9. Nơi ở hiện nay:
          <MyComponent
            onAddressChange={handleAddressChange(address4, setAddress4)}
          />
          <input
            type="text"
            value={address4}
            onChange={(e) => setAddress3(e.target.value)}
            placeholder="Địa chỉ đã chọn 4"
            style={{ width: "100%" }}
          />
        </label>{" "}
        <br />
        <label>
          10. Nghề nghiệp khi được tuyển dụng:
          <input
            type="text"
            name="ngheNghiepKhiDuocTuyenDung"
            value={formValues.ngheNghiepKhiDuocTuyenDung}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          11. Ngày tuyển dụng:
          <input
            type="date"
            name="ngayTuyenDung"
            value={formValues.ngayTuyenDung}
            onChange={handleChange}
          />
          Cơ quan tuyển dụng:
          <input
            type="text"
            name="coQuanTuyenDung"
            value={formValues.coQuanTuyenDung}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          12. Chức vụ hiện tại:
          <input
            type="text"
            name="chucVuHienTai"
            value={formValues.chucVuHienTai}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          13. Công việc chính được giao:
          <input
            type="text"
            name="congViecChinhDuocGiao"
            value={formValues.congViecChinhDuocGiao}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          14. Ngạch công chức: Mã ngạch, Bậc lương, Hệ số, Ngày hưởng, Phụ cấp
          chức vụ, Phụ cấp khác
          <input
            type="text"
            name="ngachCongChuc"
            value={formValues.ngachCongChuc}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          15.1. Trình độ giáo dục phổ thông:
          <input
            type="text"
            name="trinhDoGiaoDucPhoThong"
            value={formValues.trinhDoGiaoDucPhoThong}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          15.2. Trình độ chuyên môn cao nhất:
          <select
            name="trinhDoChuyenMonCaoNhat"
            value={formValues.trinhDoChuyenMonCaoNhat}
            onChange={handleChange}
          >
            <option value="">Chọn trình độ chuyên môn</option>
            <option value="TSKH">TSKH</option>
            <option value="TS">TS</option>
            <option value="ThS">ThS</option>
            <option value="cuNhan">Cử nhân</option>
            <option value="kySu">Kỹ sư</option>
            <option value="caoDang">Cao đẳng</option>
            <option value="trungCap">Trung cấp</option>
            <option value="soCap">Sơ cấp</option>
            <option value="chuyenNganh">Chuyên ngành</option>
          </select>
        </label>{" "}
        <br />
        <label>
          15.3. Lý luận chính trị:
          <input
            type="text"
            name="lyLuanChinhTri"
            value={formValues.lyLuanChinhTri}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          15.4. Quản lý nhà nước:
          <input
            type="text"
            name="quanLyNhaNuoc"
            value={formValues.quanLyNhaNuoc}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          15.5. Ngoại ngữ:
          <input
            type="text"
            name="ngoaiNgu"
            value={formValues.ngoaiNgu}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          15.6. Tin học:
          <input
            type="text"
            name="tinHoc"
            value={formValues.tinHoc}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          16. Ngày vào Đảng Cộng sản Việt Nam:
          <input
            type="date"
            name="ngayVaoDang"
            value={formValues.ngayVaoDang}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          17. Ngày tham gia tổ chức chính trị xã hội:
          <input
            type="date"
            name="ngayThamGiaToChucChinhTriXaHoi"
            value={formValues.ngayThamGiaToChucChinhTriXaHoi}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          18. Ngày nhập ngũ: Ngày xuất ngũ, Quân hàm cao nhất
          <input
            type="date"
            name="ngayNhapNgu"
            value={formValues.ngayNhapNgu}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        {/* <label>
          Chuyên môn nghiệp vụ:
          <input
            type="text"
            name="chuyenMonNghiepVu"
            value={formValues.chuyenMonNghiepVu}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
          Các khóa bồi dưỡng chuyên môn:
          <input
            type="text"
            name="khoaBoiDuongChuyenMon"
            value={formValues.khoaBoiDuongChuyenMon}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
          Các công trình nghiên cứu đã công bố:
          <textarea
            name="congTrinhNghienCuuDaCongBo"
            value={formValues.congTrinhNghienCuuDaCongBo}
            onChange={handleChange}
          ></textarea>
        </label> <br/> */}
        <label>
          21. Khen thưởng:
          <textarea
            name="khenThuong"
            value={formValues.khenThuong}
            onChange={handleChange}
          ></textarea>
        </label>{" "}
        <br />
        <label>
          22. Kỷ luật:
          <textarea
            name="kyLuat"
            value={formValues.kyLuat}
            onChange={handleChange}
          ></textarea>
        </label>{" "}
        <br />
        <label>
          24. Thương binh hạng:
          <input
            type="text"
            name="thuongBinhHang"
            value={formValues.thuongBinhHang}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          25. Số chứng minh nhân dân:
          <input
            type="text"
            name="soCMND"
            value={formValues.soCMND}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          26. Số sổ BHXH:
          <input
            type="text"
            name="soSoBHXH"
            value={formValues.soSoBHXH}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          27. Đào tạo, bồi dưỡng về chuyên môn, nghiệp vụ, lý luận chính trị,
          ngoại ngữ, tin học:
          <div>
            <EducationTable onUpdateEducation={updateEducation} />
          </div>
        </label>{" "}
        <br />
        <label>
          28. Tóm tắt quá trình công tác:
          <div>
            <WorkExperienceTable
              onUpdateWorkExperiences={updateWorkExperiences}
            />
          </div>
        </label>{" "}
        <br />
        <label>
          29. Đặc điểm lịch sử bản thân:
          <textarea
            name="dacDiemLichSuBanThan"
            value={formValues.dacDiemLichSuBanThan}
            onChange={handleChange}
          ></textarea>
        </label>{" "}
        <br />
        <label>
          30. Quan hệ gia đình: a) Về bản thân: Cha, Mẹ, Vợ (hoặc chồng), các
          con, anh chị em ruột
          <FamilyRelationshipTable
            onUpdateFamilyRelationships={updateFamilyRelationships1}
          />
        </label>{" "}
        <br />
        <label>
          a) Về bên vợ (hoặc chồng): Cha, Mẹ, anh chị em ruột
          <FamilyRelationshipTable
            onUpdateFamilyRelationships={updateFamilyRelationships2}
          />
        </label>{" "}
        <br />
        {/* <label>
          30. Quan hệ gia đình:
          
          <label>
            <label>
              Cha:
              <input
                type="text"
                name="quanHeGiaDinh.cha.hoTen"
                value={formValues.quanHeGiaDinh.cha.hoTen}
                onChange={handleChange}
              />
            </label> <br />
            <label>
              Mẹ:
              <input
                type="text"
                name="quanHeGiaDinh.me.hoTen"
                value={formValues.quanHeGiaDinh.me.hoTen}
                onChange={handleChange}
              />
            </label> <br />
            <label>
              Vợ (hoặc chồng):
              <input
                type="text"
                name="quanHeGiaDinh.voChong.hoTen"
                value={formValues.quanHeGiaDinh.voChong.hoTen}
                onChange={handleChange}
              />
            </label> <br />
          </label> <br />
        </label> <br /> */}
        <label>
          31. Diễn biến quá trình lương của cán bộ, công chức
          <SalaryHistoryTable onUpdateSalaryHistory={updateSalaryHistory} />
        </label>
        <button
          style={{
            margin: "100px 40px 10px 1000px",
            position: "absolute",
            top: "0" /* Đặt nút ở trên cùng */,
          }}
          className="submit-button"
          type="submit"
        >
          Gửi
        </button>
      </form>
    </div>
  );
};

export default SYLL;

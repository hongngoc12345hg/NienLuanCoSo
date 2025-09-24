- sửa sản phẩm :post http://localhost:8000/sanpham/suasp (không bao gồm ảnh)
    req:
        _id,
        sp_ten,
        sp_mota,
        sp_soluong,
        sp_dongia,
        sp_namsx,
        nsx_ma,
        sp_khuyenmai,
        loai_ma,


- thông tin sản phẩm: get http://localhost:8000/sanpham/:id (id: id sản phẩm)
    req:
    res:
        sp_hinhanh,
        sp_ten,
        sp_mota,
        sp_soluong,
        sp_dongia,
        sp_namsx,
        nsx_ma,
        sp_khuyenmai,
        loai_ma,
        sp_rate,
        luotban,
        sp_duongdan,
        sp_ngayfcapnhat,
        nsx_ten, //tên nhà sản xuất
        gia, //giá thực

- sửa ảnh sản phẩm : post http://localhost:8000/sanpham/suaanh 
    req:
        _id,
        file,
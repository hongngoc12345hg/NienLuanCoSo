const fs = require('fs');
const path = require('path');

/**
 * Xóa ảnh sản phẩm
 * @param {string} tenFile - Tên file ảnh, ví dụ: 'abc.jpg'
 * @returns {Promise<string>} - Thông báo kết quả bằng tiếng Việt
 */
exports.xoaAnhSP = function (tenFile) {
  const filePath = path.join(__dirname, '..', 'hinhanh/sanpham', tenFile);

  return new Promise((resolve) => {
    // Kiểm tra bảo mật
    if (!tenFile || tenFile.includes('..') || tenFile.includes('/')) {
      return resolve(' Tên file không hợp lệ');
    }

    // Kiểm tra file có tồn tại không
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          resolve(`Lỗi khi xóa ảnh: ${err.message}`);
        } else {
          resolve(`Đã xóa ảnh: ${tenFile}`);
        }
      });
    } else {
      resolve(`Ảnh không tồn tại: ${tenFile}`);
    }
  });
};
exports.xoaAnhQC = function (tenFile) {
  const filePath = path.join(__dirname, '..', 'hinhanh/quangcao', tenFile);

  return new Promise((resolve) => {
    // Kiểm tra bảo mật
    if (!tenFile || tenFile.includes('..') || tenFile.includes('/')) {
      return resolve(' Tên file không hợp lệ');
    }

    // Kiểm tra file có tồn tại không
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          resolve(`Lỗi khi xóa ảnh: ${err.message}`);
        } else {
          resolve(`Đã xóa ảnh: ${tenFile}`);
        }
      });
    } else {
      resolve(`Ảnh không tồn tại: ${tenFile}`);
    }
  });
};
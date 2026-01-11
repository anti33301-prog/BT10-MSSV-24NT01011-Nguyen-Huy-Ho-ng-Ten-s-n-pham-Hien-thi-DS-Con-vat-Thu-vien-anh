// 1. Danh sách con vật với ảnh nội bộ
const animals = [
    {
        name: "hươu cao cổ",
        thumb: "img/huou-cao-co-1.jpg", 
        thuVien: [
          "img/huou-cao-co-1.jpg",
           "img/huou-cao-co-3.jpg",
           "img/huou-cao-co-4.jpg",
           "img/huou-cao-co-5.jpg"
        ]
    },
    {
        name: "con vôi ",
        thumb: "img/anh-chu-voi-con_111942967.jpg",
        thuVien: [
           "img/anh-con-voi-de-thuong_111943060.jpg",
           "img/anh-chu-voi-con_111942967.jpg",
           "img/anh-dep-con-voi-hoang-da_111943123.jpg",
           "img/anh-voi-de-thuong_111943513.jpg"
        ]
    },
    {
         name: "sư tử",
        thumb: "img/su-tu-1.jpg",
        thuVien: [
           "img/su-tu-1.jpg",
           "img/su-tu-2.jpg",
           "img/su-tu-3.jpg",
           "img/su-tu-4.jpg"
        ]
    },
    {
         name: "đại bàng",
        thumb: "img/Hinh-anh-hinh-nen-dai-bang-san-bat-moi-800x533.jpg",
        thuVien: [
           "img/Hinh-anh-hinh-nen-dai-bang-san-bat-moi-800x533.jpg",
           "img/pexels-photo-15218807.jpeg",
           "img/Hinh-anh-nen-Dai-Bang-cuc-dep-1.jpg",
           "img/Hinh-nen-dai-bang-gan-dinh-nui-tuyet.jpg"
        ]
    }
];

const danhsachDiv = document.getElementById('danhsach');
const thuvienDiv = document.getElementById('thuvienanh');


function loadGallery(danhSachAnh) {
    thuvienDiv.innerHTML = ""; 
    
    danhSachAnh.forEach(duongDan => {
        const img = document.createElement('img');
        img.src = duongDan; 
        img.className = "gallery-img";
        
        
        img.onerror = function() {
            this.src = "https://via.placeholder.com/200?text=Loi-Anh";
        };

        thuvienDiv.appendChild(img);
    });
}

animals.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'animal-item';
    card.innerHTML = `
        <img src="${animal.thumb}" alt="${animal.name}">
        <h3>${animal.name}</h3>
    `;
    
    card.onclick = () => loadGallery(animal.thuVien);
    danhsachDiv.appendChild(card);
});
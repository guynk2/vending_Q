let course = [
    {
        courseID: "JK12X2",
        courseAvatar:
            "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/00008379_durex_invisible_3s_4527_5f51_large_61cae00c7d.jpg" ,
        courseName: "Bao cao su Durex Invisible",
        coursePrice:10000,
    },
    {
        courseID: "NS41KT",
        courseAvatar:
            "https://product.hstatic.net/200000713511/product/bao-cao-su-durex-fetherlite-ultima-hop-3-cai_e6e82b560cbc4e3d9b6ab3f5b47790a9.jpeg" ,
        courseName: "Bao cao su Durex màu đỏ Fetherlite Ultima",
        coursePrice:40000, 
    },
    {
        courseID: "NJSU92",
        courseAvatar:
            "https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00002672_durex_performa_3s_4130_62b5_large_8f866e4abb.jpg" ,
        courseName: "Bao cao su Durex màu đen Performa",
        coursePrice:70000,
    },
    {
        courseID: "KHA721",
        courseAvatar:
            "https://product.hstatic.net/200000078749/product/3008385_bvs_diana_ban_dem_29cm-4m_791f775746654cf1ac80bd10886ecc9d_ca9ec1078ef6463d8b8fb125f54f9d56.jpg" ,
        courseName: "Băng vệ sinh",
        coursePrice:25000,
    },
    {
        courseID: "NGJ92M",
        courseAvatar:
            "https://files.oaiusercontent.com/file-FObb5vxLZeYMVQTYE3Xne1Tw?se=2024-10-16T16%3A11%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4d2c7821-7e6c-486e-b9fd-005830fd8b4d.webp&sig=avlSIhN%2ByGeQMibFMKW713PTMhHCXK97TcAG/EgLcQU%3D" ,
        courseName: "Combo sát trùng vết thương (1 Povidine,1 băng gạt, 1 keo)",
        coursePrice:50000,
    },
    {courseID: "ISA312",
        courseAvatar:
            "https://bizweb.dktcdn.net/100/317/651/files/4547691783776-side.jpg?v=1576914195696" ,
        courseName: "Bao cao su Okamoto",
        coursePrice:80000,
    },
];
let My_Bank ={
    BANK_ID: "MB",
    ACCOUNT_NO: "0931896378",
}

document.addEventListener("DOMContentLoaded", () => {
    const courseInner = document.querySelector(".course_inner");
    let courseRenderUI = "";

    // Render each course item
    course.forEach((item, index) => {
        courseRenderUI += `
        <div class="course_item">
            <img src="${item.courseAvatar}" alt="${item.courseName}" />
            <p>${item.courseName}</p>
            <p>${item.coursePrice} VND</p>
            <a class="course_item_btn">Mua</a> 
        </div>
        `;
    });
    courseInner.innerHTML = courseRenderUI;

    // Add event listeners for buy buttons
    const buttons = document.querySelectorAll(".course_item_btn");
    const paidContent = document.getElementById("paid_content");
    const paidPrice = document.getElementById("paid_price");
    const course_qr_img = document.querySelector(".course_qr_img");
    buttons.forEach((item, index) => {
        item.addEventListener("click", () => {
        let QR = `https://img.vietqr.io/image/${My_Bank.BANK_ID}-${My_Bank.ACCOUNT_NO}-compact.png?amount=${course[index].coursePrice}&addInfo=${course[index].courseID}`
        course_qr_img.src = QR;
            paidContent.innerHTML = `${course[index].courseID}`;
            paidPrice.innerHTML = `${course[index].coursePrice} `;
        });
    });
});

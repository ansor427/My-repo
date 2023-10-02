//let namaSiswa1 = "Rizqul"
//let namaSiswa2 = "Putra"
//let namaSiswa3 = "Joko"

//console.log(namaSiswa1)
//console.log(namaSiswa2)
//console.log(namaSiswa3)
//Aray
//let namaSiswa = ["Rizqul","Ptra", "Joko"]
//console.log(namaSiswa);

//let nama = "ansor";
//let alamat = "cienteng";
//let umur = "20";

//console.log(nama);
//console.log(alamat);
//console.log(umur);

//let dataPersonal = {
   // nama: "babang",
  //  alamat: "Bandung",
   // umur: "20"
//}
//let dataPersonal = {
   // nama: "ansor",
    //alamat: "Bandung",
    //umur: "20"
//}
//let dataPersonal = {
//    nama: "adalah",
  //  alamat: "Bandung",
    //umur: "20"
//}
//console.log(dataPersonal);

//mk
/*let dataSiswa = [
    {
        nama: "ansor",
        alamat: "Bandung",
        umur: 20,
    },
    {
        nama: "ayawelah",
        alamat: "Bandung",
        umur: 20,
    },
    {
        nama: "pokonamah",
        alamat: "Bandung",
        umur: 20,
    },
];
console.log(dataSiswa);
console.log(dataSiswa[1]);
console.log(dataSiswa[2]);

let dataPersonal = 
    {
        nama: "ansor",
        alamat: "Bandung",
        umur: 20,
    };
console.log(dataPersonal);*/

// fungsi push memasukan data ke aray
/*let data = [];

function addData(e) {
    e.
}
*/
let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  // untuk membuat url gambar, agar image dapat ditampilkan
  image = URL.createObjectURL(image[0]);
  //   console.log(image);

  let blog = {
    title,
    content,
    image,
    postAt: "29 September 2023",
    author: "Abel Dustin",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a target="_blank" href="blog-detail.html">${dataBlog[index].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${dataBlog[index].postAt} | ${dataBlog[index].author}
                </div>
                <p>${dataBlog[index].content}</p>
            </div>
        </div>
    `;
  }
}




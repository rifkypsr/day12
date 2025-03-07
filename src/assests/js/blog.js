let dataBlog = [];

function submitBlog(event) {event.preventDefault();

  let inputTitle = document.getElementById("inputTitle").value;
  let inputContent = document.getElementById("inputContent").value;
  let inputImage = document.getElementById("inputImage").files;

  if (inputTitle == "") {
    alert("title harus diisi");
  } else if (inputContent == "") {
    alert("content harus diisi");
  } else if (inputImage == "") {
    alert("file harus diisi");
  }

 
  inputImage = URL.createObjectURL(inputImage[0]);
  const blog = {
    title: inputTitle,
    content: inputContent,
    image: inputImage,
    postAt: "06 juni 1996",
    author: "Rifky Alkhairi",
  };

  dataBlog.push(blog);
  console.log("ini memakai data blog", dataBlog);

  function renderBlog() {
  document.getElementById("content").innerHTML =  `
  <div class="blog-list-items">
      <div class="blog-image">
          <img src="${dataBlog[index].image}" alt="image upload" />
      </div>
      <div class="blog-content">
          <div class="btn-group">
              <button class="btn-edit"> Edit Blog </button>
              <button class="btn-post"> Post Blog </button>
          </div>
          <h1>
              <a href="blog-detail.html" target="_black">${dataBlog[index].title}</a>
          </h1>
          <div class="detail-blog">
              ${dataBlog[index].postAt} | ${dataBlog[index].author}
          </div>
          <p>
          ${dataBlog[index].content}
          </p>
      </div>
  </div>
`

} 
  }

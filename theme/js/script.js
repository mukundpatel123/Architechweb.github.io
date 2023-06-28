window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    if (header) {
      let headerClass = header.classList;
      if (window.scrollY > 30) {
        headerClass.add("stick-header");
      } else {
        headerClass.remove("stick-header");
      }
    }
  });
//Switch Project preview images
const preview = document.querySelector("#proj-preview");
const projects_lis = document.querySelectorAll("li.list__item");
//Projects
const sources = [
  // {
  //   name: "BLACKCHILD FAIRCHILD",
  //   color: "green",
  //   src:
  //     "https://res.cloudinary.com/swssr/image/upload/v1583928350/swssr/hnhvf9brga6lbiuttj20.jpg"
  // },
  {
    name: "BZN Technologies",
    subtext: "e-Commerce website & Inventory Manager",
    tags: ["React", "Node", "AdobeXD"],
    color: "green",
    href: "https://bzntechnologies.com",
    src:
      "https://res.cloudinary.com/swssr/image/upload/v1583928350/swssr/hnhvf9brga6lbiuttj20.jpg",
  },
  {
    name: "MERIT BRANDING",
    subtext: "Media company official website, ",
    tags: ["React", "AdobeXD"],
    color: "powderblue",
    href: "https://meritbranding.co.za",
    src:
      "https://res.cloudinary.com/swssr/image/upload/v1573785642/swssr/nj2mnb9nnz52usjeqmai.png",
  },
  {
    name: "TUMISONG.DJ",
    subtext: "Official website for DJ Tumisong",
    tags: ["AdobeXD", "PlainJS"],
    color: "navy",
    href: "https://tumi.now.sh",
    src:
      "https://res.cloudinary.com/swssr/image/upload/v1583929359/swssr/a86efj7azovw5uwffvxt.jpg",
  },
  {
    name: "MpiloTech",
    subtext: "Software company landing page",
    tags: ["AdobeXD"],
    color: "yellow",
    href: "https://www.behance.net/gallery/87868351/MpiloTech",
    src:
      "https://res.cloudinary.com/swssr/image/upload/v1583928910/swssr/b1tuf9kalvpzyqwwpib5.jpg",
  },
  {
    name: "FILR",
    subtext: "Content manager app concept",
    tags: ["AdobeXD", "Illustrator"],
    color: "pink",
    href: "https://www.behance.net/gallery/87867291/Filr",
    src:
      "https://res.cloudinary.com/swssr/image/upload/v1583929437/swssr/anwisltsyokejsfq9pai.jpg",
  },
];

//Default bg
switchImage(preview, 0);
//Default tags
setTags(sources[0]);
//Setup project previews
projects_lis.forEach((item, index, arr) => {
  //Populate project details
  item.querySelector(".item__name").textContent = sources[index].name;
  item.querySelector(".item__subtext").textContent = sources[index].subtext;
  item.querySelector(".link").setAttribute("href", sources[index].href);

  //Handlle switching preview image
  item.addEventListener("click", (e) => {
    toggleActive(e, arr, index);
    switchImage(preview, index);
    setTags(sources[index]);
    //Set project tags
  });
});

function toggleActive(e, arr, index) {
  //Toggle active
  projects_lis.forEach((li) => li.classList.remove("list__item--active"));
  e.currentTarget.classList.add("list__item--active");
}

function switchImage(target, index) {
  //Change preview image
  const { src } = sources[index];
  target.dataset.src = src;
  target.src = src;
}

function setTags(data, target_el) {
  const tags_el = document.querySelector(".tags");
  console.log({ tags_el });
  tags_el.innerHTML = data.tags
    .map((_tag) => `<div class="tags__item">${_tag}</div>`)
    .join("");
}
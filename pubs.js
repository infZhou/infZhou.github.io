// Modify the `PUBLICATIONS` object

const PUBLICATIONS = [

  {
    title:
      "F&F Attack: Adversarial Attack against Multiple Object Trackers by Inducing False Negatives and False Positives",
    authors:
      "Tao Zhou, Wenhan Luo, Qi Ye, Kaihao Zhang, Zhiguo Shi, Jiming Chen",
    image: "/resource/FnFAttack_Demo.gif",
    conference: "ICCV 2023",
    links: {
      "project page": "https://infzhou.github.io/FnFAttack/index.html",
      arxiv: "",
      pdf: "https://infzhou.github.io/folder/ZhouTao_F&F_Attack_ICCV2023_main_text+supp.pdf",
      supp: "",
      video: "https://infzhou.github.io/folder/Video_F&F_Attack_ICCV_2023.mp4",
      code: "https://github.com/infZhou/FnF_Attack",
    },
    badges: ["CCF A"],
  },
  {
    title:
      "APPTracker: Improving Tracking Multiple Objects in Low-Frame-Rate Videos",
    authors: "Tao Zhou, Wenhan Luo, Zhiguo Shi, Jiming Chen, Qi Ye",
    image: "https://infzhou.github.io/appTracker/resources/Fig2_pipeline.png",
    conference: "ACM MM 2022",
    links: {
      "project page": "https://infzhou.github.io/appTracker/",
      arxiv: "",
      pdf: "https://infzhou.github.io/folder/Zhou_APPTracker_Improving_Tracking_Multiple_Objects_in_Low-Frame-Rate_Videos_MM_2022.pdf",
      supp: "",
      video: "https://youtu.be/Rzbda9vJofs",
      code: "",
    },
    badges: ["CCF A"],
  },
  {
    title:
      "APPTracker+: Displacement Uncertainty for Occlusion Handling in Low-Frame-Rate Multiple Object Tracking.",
    authors:
      "Tao Zhou, Qi Ye, Yuyi Sun, Haizhou Ran, Zhiguo Shi, Jiming Chen",
    image: "/resource/APPTrack_Demo.gif",
    conference: "Submitted to IJCV, under review.",
    links: {
      "project page": "",
      arxiv: "",
      pdf: "",
      supp: "",
      video: "",
      code: "",
    },
    badges: ["Best Paper Award"],
  },
  {
    title:
      "Gateway Planning for Hybrid LoRa Networks.",
    authors:
      "Tao Zhou, Yuyi Sun, Shibo He, Zhiguo Shi, Jiming Chen, Zhen Tao",
    image: "",
    conference: "IEEE International Conference on Internet of Things (iThings), 2019",
    links: {
      "project page": "/resource/ithings_figure.png",
      arxiv: "",
      pdf: "https://ieeexplore.ieee.org/abstract/document/8875418",
      supp: "",
      video: "",
      code: "",
    },
    badges: ["Best Paper Award"],
  },

];

const HIGHLIGHT_NAME = "tao zhou";

// Do not touch the code below

// Convert PUBLICATIONS to HTML table
document.addEventListener("DOMContentLoaded", (ev) => {
  const tbody = document.createElement("tbody");
  const rows = PUBLICATIONS.map((data) => {
    const row = document.createElement("tr");
    row.append(createImageCell(data.image), createContentCell(data));
    return row;
  });
  tbody.append(...rows);
  document.querySelector("#pub-list").append(tbody);
});

// Functions to create HTML elements
function createImageCell(link) {
  const cell = document.createElement("td");
  cell.style.padding = "10px";
  cell.style.width = "30%";
  cell.style.verticalAlign = "middle";
  const img = document.createElement("img");
  img.src = link;
  img.style.width = "100%";
  cell.append(img);
  return cell;
}

function createContentCell({ title, authors, conference, links, badges }) {
  const cell = document.createElement("td");
  cell.style.padding = "20px";
  cell.style.width = "70%";
  cell.style.verticalAlign = "middle";
  const titleElem = document.createElement("papertitle");
  titleElem.textContent = title;
  const authorsElem = createAuthorElement(authors);
  const conferenceElem = document.createElement("em");
  conferenceElem.textContent = conference;
  const badgesElem = createBadgesElement(badges);
  const linksElem = createLinksElement(links);
  const elements = [
    titleElem,
    document.createElement("br"),
    authorsElem,
    document.createElement("br"),
    conferenceElem,
    badgesElem,
    document.createElement("br"),
    linksElem,
  ].filter((elem) => elem);
  cell.append(...elements);
  return cell;
}

function createAuthorElement(authors) {
  if (!authors) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const elements = authors.split(/[,;]/g).map((author) => {
    const authorText = author.trim();
    if (authorText.toLowerCase() === HIGHLIGHT_NAME) {
      const authorElem = document.createElement("strong");
      authorElem.textContent = authorText;
      return authorElem;
    }
    return authorText;
  });
  for (let i = 0; i < elements.length; i++) {
    frag.append(elements[i]);
    if (i !== elements.length - 1) {
      frag.append(", ");
    }
  }
  return frag;
}

function createBadgesElement(badges) {
  if (!badges) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const textElem = document.createElement("span");
  textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
  frag.append(textElem);
  frag.append(
    ...badges.map((badge) => {
      const badgeElem = document.createElement("span");
      badgeElem.classList.add("badge");
      badgeElem.textContent = badge;
      return badgeElem;
    })
  );
  return frag;
}

function createLinksElement(links) {
  if (!links) {
    return null;
  }
  const frag = document.createDocumentFragment();
  for (const [name, link] of Object.entries(links)) {
    if (!link) {
      continue;
    }
    const elem = document.createElement("a");
    elem.href = link;
    elem.textContent = "[" + name + "]";
    const textElem = document.createElement("span");
    textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
    frag.append(elem, textElem);
  }
  return frag;
}
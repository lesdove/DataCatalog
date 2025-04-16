/* Constructed mock-dataset to analyze AR utilization for anxiety self-soothing*/
let userSession = [
  {
    username: 1,
    socialMediaHours: 7,
    peakUsageTime: "Morning",
    usesCalm: true,
    usesBreatheApp: false,
    usesHeadspace: true,
    spectaclesUsePerWeek: 3,
    averageWalkTime: 40,
    spectaclesUse: "Landmarks",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "colorID",
    snapMapLocationType: "Urban",
    walkWithMusic: "true",
    walkWithFriend: "false"
    },

  {
    username: 2,
    socialMediaHours: 2,
    peakUsageTime: "Evening",
    usesCalm: false,
    usesBreatheApp: false,
    usesHeadspace: true,
    spectaclesUsePerWeek: 7,
    averageWalkTime: 80,
    spectaclesUse: "Plant ID",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "Breathing",
    snapMapLocationType: "Beach",
    walkWithMusic: "false",
    walkWithFriend: "true"
    },
  {
    username: 3,
    socialMediaHours: 5,
    peakUsageTime: "Afternoon",
    usesCalm: true,
    usesBreatheApp: false,
    usesHeadspace: false,
    spectaclesUsePerWeek: 10,
    averageWalkTime: 15,
    spectaclesUse: "ScanningArt",
    usesSnapChatSootheTools: false,
    preferredCopingTool: "Journal Vlog",
    snapMapLocationType: "Park",
    walkWithMusic: "false",
    walkWithFriend: "true"
    },
  {
    username: 4,
    socialMediaHours: 1,
    peakUsageTime: "Evening",
    usesCalm: false,
    usesBreatheApp: false,
    usesHeadspace: false,
    spectaclesUsePerWeek: 0,
    averageWalkTime: 20,
    spectaclesUse: "Landmarks",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "Journal Vlog",
    snapMapLocationType: "Suburban",
    walkWithMusic: "true",
    walkWithFriend: "false"
    },
  {
    username: 5,
    socialMediaHours: 5,
    peakUsageTime: "Evening",
    usesCalm: false,
    usesBreatheApp: true,
    usesHeadspace: false,
    spectaclesUsePerWeek: 5,
    averageWalkTime: 45,
    spectaclesUse: "Plant ID",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "Journal Vlog",
    snapMapLocationType: "Park",
    walkWithMusic: "false",
    walkWithFriend: "true"
    },      
  {
    username: 6,
    socialMediaHours: 7,
    peakUsageTime: "Morning",
    usesCalm: true,
    usesBreatheApp: false,
    usesHeadspace: true,
    spectaclesUsePerWeek: 3,
    averageWalkTime: 40,
    spectaclesUse: "Landmarks",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "colorID",
    snapMapLocationType: "Urban",
    walkWithMusic: "true",
    },
  {
    username: 7,
    socialMediaHours: 3,
    peakUsageTime: "Evening",
    usesCalm: true,
    usesBreatheApp: true,
    usesHeadspace: true,
    spectaclesUsePerWeek: 9,
    averageWalkTime: 60,
    spectaclesUse: "AR",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "AR",
    snapMapLocationType: "Urban",
    walkWithMusic: "true",
  },

  {
    username: 8,
    socialMediaHours: 2,
    peakUsageTime: "Evening",
    usesCalm: false,
    usesBreatheApp: false,
    usesHeadspace: true,
    spectaclesUsePerWeek: 2,
    averageWalkTime: 180,
    spectaclesUse: "Bitmoji",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "AR",
    snapMapLocationType: "Urban",
    walkWithMusic: "true",
  },
  {
    username: 9,
    socialMediaHours: 5,
    peakUsageTime: "Afternoon",
    usesCalm: true,
    usesBreatheApp: false,
    usesHeadspace: false,
    spectaclesUsePerWeek: 10,
    averageWalkTime: 15,
    spectaclesUse: "ScanningArt",
    usesSnapChatSootheTools: false,
    preferredCopingTool: "Journal Vlog",
    snapMapLocationType: "Park",
    walkWithMusic: "false",
    walkWithFriend: "true"
    },
  {
    username: 10,
    socialMediaHours: 5,
    peakUsageTime: "Evening",
    usesCalm: false,
    usesBreatheApp: true,
    usesHeadspace: false,
    spectaclesUsePerWeek: 5,
    averageWalkTime: 45,
    spectaclesUse: "Plant ID",
    usesSnapChatSootheTools: true,
    preferredCopingTool: "Journal Vlog",
    snapMapLocationType: "Park",
    walkWithMusic: "false",
    walkWithFriend: "true"
    },
]

/* Calling images loaded on Github Issues to store data card images */
const SUN_URL =
  "https://github.com/user-attachments/assets/6864a1a9-c9b6-48e5-be88-9e188f0579fc";
const SPECTACLES_URL =
  "https://github.com/user-attachments/assets/a0d2a654-69d7-45e4-8af1-82c798456a70";
const WALKING_MIN_URL =
  "https://github.com/user-attachments/assets/f46285bd-6bee-4b71-8d78-96568a1b3225";
  const SCANNER_URL =
  "https://github.com/user-attachments/assets/6e2a1e51-4702-4eaf-b24c-73bf9a0da958";
const COPING_URL =
  "https://github.com/user-attachments/assets/aa33ff9b-b107-4886-af7f-4e3601547284";
const SNAP_MAP_URL =
  "https://github.com/user-attachments/assets/336ff4f4-ddc1-4cc4-8829-31642b4f127b";

// mirror titles code to construct data log
let titles = [
  "Peak Social Media Usage",
  "Spectacles Use Per Week",
  "Average Walk Time in Minutes",
  "Spectacle Use",
  "Preferred Coping Tool",
  "Snap Map Location Type",

];
/* Extract data from mock data as object*/
let data = [
  userSession.map (session => session.peakUsageTime),
  userSession.map (session => session.spectaclesUsePerWeek),
  userSession.map (session => session.averageWalkTime),
  userSession.map (session => session.spectaclesUse),
  userSession.map (session => session.preferredCopingTool),
  userSession.map (session => session.snapMapLocationType),
]

// This function adds cards the page to display the data in the array along with their respective images and data
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    let imageURL = "";
    if (i == 0) {
      imageURL = SUN_URL;
    } else if (i == 1) {
      imageURL = SPECTACLES_URL;
    } else if (i == 2) {
      imageURL = WALKING_MIN_URL;
    } else if (i == 3) {
    imageURL = SCANNER_URL;
    } else if (i == 4) {
    imageURL = COPING_URL;
    } else if (i == 5) {
    imageURL = SNAP_MAP_URL;
  }

    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, title, imageURL, data[i]); // Perform data extraction
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, dataValues) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardText = card.querySelector("p");
  cardText.innerHTML = dataValues.map((val, index) => `User ${index + 1}: ${val}`).join("<br>");


  console.log("new card:", newTitle, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", showCards);

/* Call feature to sum walking and spectacle use to identify frequent users */
function quoteAlert() {
  const topUsers = userSession.filter(
    user => user.averageWalkTime + user.spectaclesUsePerWeek >= 65
  );
/*this feature can be made more complex with lenses, high value bonuses and collaboration features*/
  if (topUsers.length > 0) {
    const usernames = topUsers.map(user => `User ${user.username}`).join(", ");
    alert(`Users: ${usernames}`);
  } else {
    alert("No users to highlight.");
  }
}

/*two part function. First, removes any users who did not use Spectacles.*/

function removeNonSpectacles(arr) {
  return arr.filter(user => user.spectaclesUsePerWeek !=0);
}
/* Second function reconstructs the list without users that did not use Spectacles to self-soothe"*/

function handleRemovalAndUpdate() {

data = [
  userSession.map (session => session.peakUsageTime),
  userSession.map (session => session.spectaclesUsePerWeek),
  userSession.map (session => session.averageWalkTime),
  userSession.map (session => session.spectaclesUse),
  userSession.map (session => session.preferredCopingTool),
  userSession.map (session => session.snapMapLocationType),
]
userSession = removeNonSpectacles(userSession);
showCards();
}

let selectedOption = "";

function handleDropdownChange() {
  selectedOption = document.getElementById("dropdown").value;
  console.log("Selected:", selectedOption);
}

function pic1() {
  imgSource.src = "https://github.com/user-attachments/assets/8ab39d53-c8aa-437f-8985-daa376126ada";
  imgSource.alt = "mock meditation app";
  figElement.style.display = "block";
  figCap.textContent = "Popular Meditation Apps";
}

function pic2() {
  imgSource.src = "https://github.com/user-attachments/assets/2ac0e767-8812-45d7-97e3-811725d8ee88";
  imgSource.alt = "mock AR mindfulness technique overlap";
  figElement.style.display = "block";
  figCap.textContent = "AR X Mindfulness";
}



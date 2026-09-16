const findBtn = document.getElementById("findBtn");
const input = document.getElementById("usernameInput");
const message = document.getElementById("message");
const items = document.querySelector(".popular-boxes");

function resetShow() {
  document.querySelector("#userAvatar").src = "./images/avatar.png";
  document.querySelector("#username").textContent = "username";
  document.querySelector("#location").textContent = "Location";
  document.querySelector("#githubLink").textContent = "github.com/username";
  document.querySelector("#githubLink").href = "#";
  document.querySelector("#bio").textContent =
    "username bio Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  document.querySelector("#repositories").textContent = "--";
  document.querySelector("#followers").textContent = "--";
  document.querySelector("#following").textContent = "--";
  items.innerHTML = "";
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = "";

  if (text) {
    message.classList.add("show", type);
  }
}

findBtn.addEventListener("click", async () => {
  const inputUsername = input.value.trim();

  if (!inputUsername) {
    showMessage("Please enter a username.", "error");
    resetShow();
    return;
  }

  showMessage("Searching...", "loading");
  resetShow();

  try {
    const githubAPI = `https://api.github.com/users/${inputUsername}`;
    const reposAPI = `https://api.github.com/users/${inputUsername}/repos`;

    const githubResponse = await fetch(githubAPI);

    if (!githubResponse.ok) {
      resetShow();
      showMessage("User not found!", "error");
      return;
    }

    const githubData = await githubResponse.json();

    const reposResponse = await fetch(reposAPI);

    if (!reposResponse.ok) {
      resetShow();
      showMessage("Could not load repositories!", "error");
      return;
    }

    const reposData = await reposResponse.json();

    const avatar = githubData.avatar_url;
    const username = githubData.login;
    const location = githubData.location;
    const githubLink = githubData.html_url;
    const bio = githubData.bio;
    const repositories = githubData.public_repos;
    const followers = githubData.followers;
    const following = githubData.following;

    document.querySelector("#userAvatar").src = avatar;
    document.querySelector("#username").textContent = username;
    document.querySelector("#location").textContent = location || "No location";
    document.querySelector("#githubLink").textContent = githubLink;
    document.querySelector("#githubLink").href = githubLink;
    document.querySelector("#bio").textContent = bio || "No bio available";
    document.querySelector("#repositories").textContent = repositories;
    document.querySelector("#followers").textContent = followers;
    document.querySelector("#following").textContent = following;

    reposData.forEach((repos) => {
      if (repos.stargazers_count >= 300) {
        console.log(repos.name, repos.stargazers_count);
        const item = document.createElement("div");
        item.classList.add("repos-box");
        item.innerHTML = `
            <h3>${repos.name}</h3>
      
            <p>${repos.description}</p>
      
            <div class="popular-repos-info">
              <h4>🟡 ${repos.language || '--'}</h4>
              <h4>⭐ ${repos.stargazers_count}</h4>
              <h4>🍴 ${repos.forks_count}</h4>
            </div>
          `;

        items.append(item);
      }
    });

    showMessage("User found successfully.", "success");
  } catch (error) {
    console.log(error);

    resetShow();
    showMessage("Something went wrong. Please try again!", "error");
  }

  input.value = "";
});

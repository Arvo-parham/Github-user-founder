# GitHub User Finder

A web application built with HTML, CSS, and Vanilla JavaScript that allows users to search for GitHub users and explore their public profile information through the GitHub API.

## Preview

![GitHub User Finder Preview](./screenshot.png)
![GitHub User Finder Preview](./screenshot1.png)


## Source Code

[View Source Code](https://github.com/Arvo-parham/Github-user-founder.git)

---

## Features

* Search for GitHub users by username
* Fetch user data from the GitHub API
* Display GitHub profile information
* Display profile avatar and bio
* Display followers and following
* Display public repository count
* Display location and profile details when available
* Handle users that cannot be found
* Handle API/request errors
* Dynamic UI updates
* Responsive design

## Technologies

* HTML5
* CSS3
* Vanilla JavaScript
* Fetch API
* Async/Await
* REST API
* JSON

---

# Case Study

## Problem

After building my first three JavaScript projects, I wanted to continue working with real APIs but move beyond displaying a single type of information.

My Calculator introduced me to DOM manipulation and events.

My Todo App introduced state, CRUD operations, JSON, and Local Storage.

My Weather App introduced APIs and asynchronous JavaScript.

For my fourth project, I wanted to build something that combined those concepts while requiring me to work with a more structured set of real-world data.

The idea was simple:

Search for a GitHub username → request their profile → turn the response into a useful interface.

---

## Approach

I started by identifying the main user flow:

text
User enters username
        ↓
Validate input
        ↓
Send request to GitHub API
        ↓
Receive response
        ↓
Parse JSON
        ↓
Extract relevant data
        ↓
Render profile


The goal was to keep the application focused on one main task: finding and presenting a GitHub user's public profile information.

I separated the process into smaller responsibilities so that fetching the data, handling errors, and updating the UI were easier to reason about.

---

## Implementation

### User Search

The application accepts a GitHub username from the user.

When the form is submitted, JavaScript uses the entered username to construct a request to the GitHub API.

### GitHub API

The application communicates directly with the GitHub REST API to retrieve public user information.

The returned response contains many properties, so the application extracts only the information needed for the interface.

### Async/Await

The API request is handled asynchronously using async/await.

The general flow is:

js
const response = await fetch(API_URL);
const data = await response.json();


The application then checks the response and processes the returned data.

### Dynamic Rendering

After receiving the user data, JavaScript dynamically updates the interface.

Depending on the available information, the profile can display:

* Avatar
* Username
* Name
* Bio
* Followers
* Following
* Public repositories
* Location
* GitHub profile link

### Error Handling

The application also needs to handle unsuccessful searches.

For example, a username may not exist or the API request may fail.

Instead of displaying incomplete information, the application provides an appropriate error state.

---

## Challenges

One of the main challenges was working with a larger and more structured API response.

The API returns many different properties, but the interface only needs a subset of them.

I had to understand the response structure and decide which pieces of data were relevant to the user.

Another challenge was handling different states of the application.

The interface can be in several states:

text
Initial
  ↓
Loading
  ↓
Success
  ↓
Error


Thinking about these states made the application more predictable and helped me avoid simply assuming that every API request would succeed.

---

## What I Learned

This project helped me build on the API knowledge from my Weather App and work with a different type of external data.

I practiced:

# AID WEB Renewal

<a href="https://pnu-aid.github.io/homepage/"> <img alt="aid_logo" src="./Logo.png" style="background-color: white;"><br/> <span>Click to visit the website.</span> </a>

## Description

This project is a renewal of the official website for **AID**, the Artificial Intelligence club at **Pusan National University**.

## Features

- The site is statically built using **Next.js** and automatically deployed via **GitHub Pages**.
- Competition awards and recruitment information displayed on the website are managed through **Notion pages** maintained by the club and are fetched dynamically during the build process.

## ⚠️ Caution

-   When running locally, access the site via `localhost/homepage`.

## Requirements

-   node ^18
    -   next 14.2.3
    -   react ^18
    -   react-dom ^18
    -   prettier ^3.2.5
    -   tailwindcss ^3.4.1
    -   typescript ^5
    -   @notionhq/client ^2.2.15

## GitHub Action

1. **Scheduled Notion Data Fetch**
   - Updates static files using the Notion API and then triggers `Deploy Next.js site to Pages`.
2. **Deploy Next.js site to Pages**
   - Deploys the site to GitHub Pages.

## Development Log

-   Spring Semester 2024
    -   Initial creation and development
        -   <a href='https://github.com/bluelemon61'><img src='https://avatars.githubusercontent.com/u/67902252?s=12&v=6' alt='profile image'/> Donghoon Lee (bluelemon61)</a>
        -   <a href='https://github.com/KimCookieYa'><img src='https://avatars.githubusercontent.com/u/45006957?s=12&v=6' alt='profile image'/> Minseok Kim (KimCookieYa)</a>

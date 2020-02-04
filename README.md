<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tukno/githubApp">
    <img src="resources/images/logo/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">githubApp</h3>

  <p align="center">
    App built during the Rocketseat's bootcamp.
    <br />
    <a href="https://github.com/tukno/githubApp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tukno/githubApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/tukno/githubApp/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">

[![githubApp][product-screenshot]]()

</div>

This application was made for training purposes during the bootcamp to learn the core concepts of React Native.

This application allows a user to:

- Search for a github user, and if its successful, saves the user in a list;
- View the profile and the starred repositories of a user.
- Delete users from the list.

### Built With

Main libraries and CLI tools used to built the project:

- [Axios](https://github.com/axios/axios)
- [React native vector icons](https://github.com/oblador/react-native-vector-icons)
- [Reactotron](https://github.com/infinitered/reactotron)
- [Styled components](https://github.com/styled-components/styled-components)

To manage the code style and formatting:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [EditorConfig](https://editorconfig.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install NodeJS:

- [node](https://nodejs.org/en/)

Install a package manager:

- [yarn](https://classic.yarnpkg.com/lang/en/): Yarn 1.x (classic) was used in this project.

or

- npm

```sh
npm install npm@latest -g
```

- Configure React Native development environment following the [oficial facebook tutorial](https://facebook.github.io/react-native/docs/getting-started) or [Rocketseat tutorial (it is in portuguese)](https://docs.rocketseat.dev/ambiente-react-native/introducao).

### Installation

The following instructions are for Windows/Linux systems.

`Disclaimer: I dont have a Macbook to test in iOS, but most of the commands are supposed to be the same.`

1. Clone the repository:

```sh
Using ssh:
git clone git@github.com:tukno/githubApp.git

Or using https:
git clone https://github.com/tukno/githubApp.git
```

2. Install the project dependencies:

```sh
cd githubApp

yarn
```

or using npm:

```sh
cd githubApp

npm install
```

3. Well looks like you are done with configuration and ready to code! (I hope so :tada:), run the following commands to execute the metro bundler and deploy the development version of the app in your smartphone or emulator:

For Android:

```sh
react-native run-android
```

For iOS:

```sh
react-native run-ios
```

PS: If the metro bundler exits after running the above command, run `react-native start` to execute it again in a dedicated terminal window/tab.

PSS: If you get problems check [facebook troubleshooting](https://facebook.github.io/react-native/docs/troubleshooting#content) or open an issue ;)

(OPTIONAL): Install Reactotron to debug the app.
The instruction for installation and connection to the reactotron desktop client can be found [here](https://github.com/infinitered/reactotron).
The reactotron configuration can be found at `src/config/ReactotronConfig.js` and it is imported in the `src/index.js` file.

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

<!-- ## Roadmap

See the [open issues](https://github.com/tukno/githubApp/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

David Oliveira - oliveiradavid.dev@gmail.com

Project Link: [https://github.com/tukno/githubApp](https://github.com/tukno/githubApp)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [Pixabay/b3nj5m1n](https://pixabay.com/users/b3nj5m1n-5952967/): For the free Github icon
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/tukno/githubApp.svg?style=flat-square
[contributors-url]: https://github.com/tukno/githubApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tukno/githubApp.svg?style=flat-square
[forks-url]: https://github.com/tukno/githubApp/network/members
[stars-shield]: https://img.shields.io/github/stars/tukno/githubApp.svg?style=flat-square
[stars-url]: https://github.com/tukno/githubApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/tukno/githubApp.svg?style=flat-square
[issues-url]: https://github.com/tukno/githubApp/issues
[license-shield]: https://img.shields.io/github/license/tukno/githubApp.svg?style=flat-square
[license-url]: https://github.com/tukno/githubApp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tukno
[product-screenshot]: resources/images/app.gif

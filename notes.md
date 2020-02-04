Project bootstrap:

1 - Create the project using the react native command line:

```sh
npx react-native init githubApp
```

2 - Open the development project in the emulator/device:

```sh
react-native run-android
```

---

Configure code formatters/styles, linters:

1 - Install ESLint:

```sh
yarn add eslint -D
```

2 - Install Prettier:

```sh
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

---

Debug using Reactotron:

1 - Install the client app [https://github.com/infinitered/reactotron](https://github.com/infinitered/reactotron)

2 - Add reactotron as dependencie:

```sh
yarn add reactotron-react-native
```

3 - Create a reactotron configuration file at src/config/ReactotronConfig.js:

```js
```

---

React native navigation:

1 - Create a file src/routes.js

2 - Add the react navigation library:

```sh
yarn add react-navigation
```

- Install the dependencies:

```sh
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

- For stack navigation, install the libreary:
  ```sh
  yarn add react-navigation-stack @react-native-community/masked-view
  ```

---

Add Styled Components to the project:

1 - Install the library:

```sh
yarn add styled-components
```

---

Add Async storage library to store the users data:

```sh
yarn add @react-native-community/async-storage
```

---

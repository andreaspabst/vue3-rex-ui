# vue3-rex-ui
Tiny Vue JS 3 UI Framework based on Tailwind CSS and Vue JS 3

[![Vue JS Seminar](https://www.vuejs-seminar.de/img/VuejsSeminar/logo_color.png "Vue JS Seminar")](https://www.vuejs-seminar.de/)

## Why is there a package?
I have been working with Vue JS for a long time and have always been annoyed by the fact that there is no UI framework that is as easy to use as Bootstrap was. 
So I decided to create my own UI framework. I have been working with Tailwind CSS for a long time and I am very enthusiastic about it. 
That's why I've decided to create a tiny, small UI framework based on Tailwind CSS and Vue JS 3.

## Installation

Run npm or yarn installation of the vue3-head package:

### yarn
```bash
$ yarn add vue3-rex-ui
```

### npm
```bash
$ npm install vue3-rex-ui
```

### Set Up your Vue Application
It requires only one line to install the package in your Vue application.

```javascript
import { createApp } from 'vue'

import App from './App.vue'
import RexUI from 'vue3-rex-ui'

const app = createApp(App)

app.use(RexUI) // here the magic happens
app.mount('#app')
```

Every component is now available in your Vue application, because of automatic global registration.

## Usage

### App
This is the main component of the UI framework. It contains the header, main and footer components and is the main container for your application.
You don't have to use it if you don't build e.g. a Single Page App and just want to use the atomic components like buttons, inputs, etc.

```html
<rex-app>
  <rex-header>
    <rex-nav>
      <rex-nav-item>Home</rex-nav-item>
      <rex-nav-item>About</rex-nav-item>
      <rex-nav-item>Contact</rex-nav-item>
    </rex-nav>
  </rex-header>
  <rex-main>
    <rex-container>
      <rex-row>
        <rex-col>
          <rex-alert variant="success" size="md">This is a medium sized success alert</rex-alert>
        </rex-col>
      </rex-row>
      <rex-row>
        <rex-col>
          <rex-button variant="primary">Click me</rex-button>
        </rex-col>
      </rex-row>
      <rex-row>
        <rex-col>
          <rex-input-text placeholder="Enter your text here" v-model="yourTextVariable" />
        </rex-col>
      </rex-row>
    </rex-container>
  </rex-main>
  <rex-footer>
    <rex-nav>
      <rex-nav-item>Home</rex-nav-item>
      <rex-nav-item>About</rex-nav-item>
      <rex-nav-item>Contact</rex-nav-item>
    </rex-nav>
  </rex-footer>
</rex-app>
```

### Alert
This is a simple alert component. It has a variant and a size property. The variant property can be one of the following: primary, secondary, success, danger, warning, info, light, dark. The size property can be one of the following: sm, md, lg.

```html
<rex-alert variant="success" size="md">This is a medium sized success alert</rex-alert>
```

### Button
This is a simple button component. It has a variant property. The variant property can be one of the following: primary, secondary, success, danger, warning, info, light, dark.

```html
<rex-button variant="primary">Click me</rex-button>
```

### InputText
This is a simple input text component. It has a placeholder property and a v-model property. The placeholder property is the placeholder text of the input field. The v-model property is the variable that is bound to the input field.

```html
<rex-input-text placeholder="Enter your text here" v-model="yourTextVariable" />
```

## Future Updates
I will add more components in the future. If you have any suggestions, please let me know.
You can signup to the newsletter on my website [Vue JS Seminar](https://www.vuejs-seminar.de/) to get updates on the UI framework.

## License

MIT with Linkware License. You can use this package for free in your projects, but you have to link to my website [Vue JS Seminar](https://www.vuejs-seminar.de/) in your project.

## Resources

- [📺 IT Pabst YouTube](https://www.youtube.com/channel/UC2qIzllaHNtseSXwj18r-7w)
- [Vue JS Seminars and Coaching](https://www.vuejs-seminar.de/)
- [Vue JS 3 JSON LD Plugin](https://www.vuejs-seminar.de/packages/vue3-json-ld)
- [Vue JS 3 Head Plugin](https://www.vuejs-seminar.de/packages/vue3-head)
- [Vue JS 3 Form Helper Plugin](https://www.vuejs-seminar.de/packages/vue3-form-helper)
- [Laravel Seminars and Coaching](https://www.laravel-seminar.de/)
- [Andreas Pabst](https://www.andreaspabst.com)

## Software Tips

- [Funnerix Funnel Builder](https://www.funnerix.com/)
- [Linkrex Bio Page](https://www.linkrex.eu/)
- [apprex Online Course Platform](https://www.apprex.de/)
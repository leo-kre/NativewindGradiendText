# Nativewind Gradiend Text

Easily generate gradiend texts in nativewind.

<img width="316" height="406" alt="image" src="https://github.com/user-attachments/assets/1fb689ca-647f-440b-ba72-0ba73dd2022b" />


## Install the required packages

Before using the GradientText component you need to install the required packages using npm or yarn

```bash
npm install @react-native-masked-view/masked-view react-native-svg
```
or
```bash
yarn add @react-native-masked-view/masked-view react-native-svg
```
## Using GradiendText

To create a GradiendText add GradientText to your page and change the settings to your liking

```js
import GradientText from 'components/GradientText';

export default function App() {
  <GradientText
            text="Text"
            textClassName="text-9xl font-bold"
            containerClassName="bg-white"
            gradientColor="default">
</GradientText>
}
```

``` text ``` Sets the text

``` textClassName ``` Sets the styling of the text using nativewind

``` containerClassName ``` Sets the styling of the <Text> container

``` gradientColor ``` Sets the color of the gradient according to the configuration

GradiendText supports the following colors: default, purple, teal, blue, red, green, orange

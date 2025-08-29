# Nativewind Gradiend Text

Easily generate gradiend texts in nativewind.

<img width="441" height="899" alt="image" src="https://github.com/user-attachments/assets/94daf7af-41fa-4dce-a7c8-9fa410c9df3f" />

## Install the required packages

Before using the gradiend text component you need to install the required packages using npm or yarn

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

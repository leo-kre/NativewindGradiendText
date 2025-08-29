# Nativewind Gradiend Text

Easily generate gradiend texts in nativewind.

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

```react
import GradientText from 'components/GradientText';

export default function App() {
  <GradientText
            text="Text"
            textClassName="text-[12rem] font-bold text-justify text-center"
            containerClassName="h-[190px] mt-[-25px] w-full"
            gradientColor="default">
</GradientText>
}
```

``` text ``` Sets the text
``` textClassName ``` Sets the styling of the text using nativewind
``` containerClassName ``` Sets the styling of the <Text> container
``` gradientColor ``` Sets the color of the gradient according to the configuration

GradiendText supports the following colors: default, purple, teal, blue, red, green, orange

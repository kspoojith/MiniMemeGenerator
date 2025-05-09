In this project, let's build a **Meme Generator** app
URL: <a href="https://suryasmemegen.ccbp.tech/">suryasmemegen.ccbp.tech</a>
### Design Files

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, values in the inputs elements should be empty and the selected value in the select element should be the first item in the given fontSizesOptionsList
- When non-empty values are provided for **Image Url**, **Top Text**, **Bottom Text**, and **Font Size** and the **Generate** button is clicked
  - The Image URL that has been provided should be applied as a background-image for the generated meme
  - The given Top and Bottom text values should be at the top and bottom of the generated meme
  - The selected font size value should be applied for both top and bottom text of the generated meme

</details>

<details>

<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/MemeGenerator/index.js`
- `src/components/MemeGenerator/styledComponents.js`

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The HTML container element for the generated meme should have `data-testid` attribute value as **meme**
- When Styled Components are used, `data-testid` attribute should be used instead of `testid` attribute

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nature-img.png](https://assets.ccbp.in/frontend/react-js/nature-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #35469c; width: 150px; padding: 10px; color: black">Hex: #35469c</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: black">Hex: #7e858e</div>
<div style="background-color: #5a7184; width: 150px; padding: 10px; color: black">Hex: #5a7184</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: black">Hex: #1e293b</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: black">Hex: #0b69ff</div>

</details>

<details>
<summary>Font-families</summary>

- Open Sans

</details>

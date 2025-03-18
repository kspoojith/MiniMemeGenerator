import {Component} from 'react'
import {
  Input,
  Label,
  Form,
  MemeGeneratorContainer,
  FormItem,
  Select,
  Button,
  Meme,
  Content,
} from './styledComponents'

const fontSizesOptionsList = [
  {optionId: '8', displayText: '8'},
  {optionId: '12', displayText: '12'},
  {optionId: '16', displayText: '16'},
  {optionId: '20', displayText: '20'},
  {optionId: '24', displayText: '24'},
  {optionId: '28', displayText: '28'},
  {optionId: '32', displayText: '32'},
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    memeGenerated: false,
    formData: {imgUrl: '', topText: '', bottomText: '', fontSize: 8}, // Temporary form state
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: name === 'fontSize' ? parseInt(value, 10) : value,
      },
    }))
  }

  submit = event => {
    event.preventDefault()
    this.setState(
      prevState => ({
        imgUrl: prevState.formData.imgUrl,
        topText: prevState.formData.topText,
        bottomText: prevState.formData.bottomText,
        fontSize: prevState.formData.fontSize,
        memeGenerated: true,
      }),
      () => console.log(this.state),
    )
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, memeGenerated, formData} =
      this.state
    return (
      <MemeGeneratorContainer>
        <Form onSubmit={this.submit}>
          <h1>KSP Meme Generator</h1>
          <FormItem>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="text"
              id="imageUrl"
              name="imgUrl"
              onChange={this.handleChange}
              placeholder="Enter the Image Url"
              value={formData.imgUrl}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="text"
              id="topText"
              name="topText"
              onChange={this.handleChange}
              placeholder="Enter the Top Text"
              value={formData.topText}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              type="text"
              id="bottomText"
              name="bottomText"
              onChange={this.handleChange}
              placeholder="Enter the Bottom Text"
              value={formData.bottomText}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="fontSize">Font Size</Label>
            <Select
              id="fontSize"
              name="fontSize"
              onChange={this.handleChange}
              value={formData.fontSize}
            >
              {fontSizesOptionsList.map(each => (
                <option value={parseInt(each.optionId, 10)} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Select>
          </FormItem>
          <Button type="submit">Generate</Button>
        </Form>
        {memeGenerated ? (
          <Meme backgroundImg={imgUrl} data-testid="meme">
            <Content fontSize={fontSize} data-testid="top-text">
              {topText}
            </Content>
            <Content fontSize={fontSize} data-testid="bottom-text">
              {bottomText}
            </Content>
          </Meme>
        ) : null}
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator

import styled from 'styled-components'

export const Input = styled.input`
  padding: 10px;
  width: 90%;
  margin-top:5px;
`
export const Select = styled.select`
  padding: 5px;
  width: 90%;
  margin-top:5px;
`
export const Label = styled.label`
  color: #7e858e;
  display: block;
`
export const Form = styled.form`
  width:50%;
  @media screen and (max-width:767px){
    width:80%;
  }
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
  @media screen and (min-width:768px){
    margin-right: 100px;
    margin-left: 100px;
    margin-top: 100px;
  }
  @media screen and (max-width:767px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const FormItem = styled.div`
  margin-top:15px;
`
export const Button = styled.button`
  color: white;
  background-color: #0b69ff;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  height: 38px;
  border-width: 0px;
  margin-top: 15px;
`
export const Meme = styled.div`
  width: 50%;
  height: 300px;
  background-image: url('${props => props.backgroundImg}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media screen and (max-width:767px){
    margin-top: 20px;
    width:80%;
  }
`
export const Content = styled.p`
  margin-top: 15px;
  font-size: ${({fontSize}) => `${fontSize}px`};
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
  word-break: break-word;
`

import React from 'react'
import { Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import './style.css';
import { ContainerWrap,FooterWrap,GridWrap,ButtonForgot, ButtonRegister, ButtonEnter } from './styled';
import logo from '../../assets/images/agua.svg';

const LoginForm = () => (
  <ContainerWrap>
  <GridWrap textAlign='center'  verticalAlign='middle' centered>
    <Grid.Column style={{ maxWidth: '400px' }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logo} />
      </Header>
      
      <Form size='large'>
        <Segment basic>
          <Form.Input style={{ fontFamily:'Roboto'}} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <ButtonForgot> Esqueci minha senha </ButtonForgot>
          <ButtonEnter fluid size='large'>
            Entrar
          </ButtonEnter>
          <Grid.Row className='rowButton'>
            Não tem uma conta? <ButtonRegister>Registre-se</ButtonRegister>
            </Grid.Row>
        </Segment>
      </Form>

    </Grid.Column>
  </GridWrap>
  <FooterWrap centered>
  <Grid.Column style={{ maxWidth: '400px' }}>
  <Grid.Row style={{textAlign:'center',fontSize: '14px' ,fontWeight:'bold',fontFamily:'Roboto'}}>DashBoard Emasa version 1.1.0</Grid.Row>
  <Grid.Row style={{textAlign:'center',fontSize: '14px',fontWeight:'bold', fontFamily:'Roboto'}}>by: Gabrielcerqueira96@hotmail.com </Grid.Row>
  </Grid.Column>
  </FooterWrap>
  </ContainerWrap>
)

export default LoginForm
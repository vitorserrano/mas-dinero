import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { Heading, Paragraph } from 'src/components'

import {
  Container,
  Banner,
  LogoIcon,
  LogoText,
  Illustration,
  Form,
  Input,
  ForgotPassword,
  Button,
  ButtonText,
} from './styles'
import savingsImg from '../../assets/savings.png'

export const SignIn = (): JSX.Element => {
  return (
    <Container>
      <StatusBar style="dark" translucent />

      <Banner>
        <LogoIcon>
          +<LogoText>dinero</LogoText>
        </LogoIcon>

        <Paragraph size="small">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla
          provident cumque
        </Paragraph>

        <Illustration source={savingsImg} resizeMode="contain" />
      </Banner>

      <Form>
        <Heading>Sign In</Heading>

        <Input placeholder="E-mail" />
        <Input placeholder="Password" />

        <ForgotPassword>Forgot password?</ForgotPassword>

        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>
      </Form>
    </Container>
  )
}

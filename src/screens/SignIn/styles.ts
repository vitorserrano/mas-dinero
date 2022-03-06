import { styled } from 'src/styles'

export const Container = styled('View', {
  flex: 1,
  backgroundColor: '$gray100',
})

export const Banner = styled('View', {
  padding: '$lg',
})

export const LogoIcon = styled('Text', {
  fontSize: '$xl',
  fontWeight: 'bold',
  color: '$purple400',
  marginBottom: '$md',
})

export const LogoText = styled('Text', {
  fontSize: '$xl',
  fontWeight: 'bold',
  color: '$gray600',
  marginBottom: '$md',
})

export const Illustration = styled('Image', {
  width: 240,
  height: 220,
  alignSelf: 'center',
  marginTop: '$md',
})

export const Form = styled('View', {
  flex: 1,
  backgroundColor: '$gray200',
  borderTopEndRadius: 40,
  borderTopStartRadius: 40,
  padding: '$lg',
})

export const Input = styled('TextInput', {
  height: 48,
  borderWidth: 1,
  borderColor: '$gray300',
  backgroundColor: '$gray300',
  paddingHorizontal: '$md',
  borderRadius: '$lg',
  color: '$gray500',
  marginTop: '$md',
})

export const ForgotPassword = styled('Text', {
  textAlign: 'right',
  marginTop: '$sm',
  marginBottom: '$xl',
  color: '$gray500',
})

export const Button = styled('TouchableOpacity', {
  height: 48,
  backgroundColor: '$purple400',
  borderRadius: '$lg',
  marginTop: '$md',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ButtonText = styled('Text', {
  fontSize: '$sm',
  fontWeight: 'bold',
  color: '$gray050',
})

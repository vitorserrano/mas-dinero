import { styled } from 'src/styles'

export const Text = styled('Text', {
  lineHeight: 22,
  color: '$gray500',
  variants: {
    size: {
      extraSmall: { fontSize: '$xs' },
      small: { fontSize: '$sm' },
      medium: { fontSize: '$md' },
    },
  },
})

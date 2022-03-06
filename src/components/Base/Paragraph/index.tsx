import React from 'react'
import { TextProps } from 'react-native'

import { Text } from './styles'

type ParagraphProps = TextProps & {
  size: 'extraSmall' | 'small' | 'medium'
  children: string
}

export const Paragraph = ({
  size,
  children,
  ...rest
}: ParagraphProps): JSX.Element => (
  <Text size={size} {...rest}>
    {children}
  </Text>
)

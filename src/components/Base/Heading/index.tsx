import React from 'react'
import { TextProps } from 'react-native'

import { Text } from './styles'

type HeadingProps = TextProps & {
  children: string
}

export const Heading = ({ children, ...rest }: HeadingProps): JSX.Element => (
  <Text {...rest}>{children}</Text>
)

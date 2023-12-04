import styled from 'styled-components'

import { Props } from '.'

export const Tituloo = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
`

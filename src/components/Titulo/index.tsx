import { Tituloo } from './style'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  // <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>,
  <Tituloo>{props.children}</Tituloo>
)

export default Titulo

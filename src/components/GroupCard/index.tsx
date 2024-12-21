import {Container, Title, Icon} from './styles'
import { TouchableOpacityProps } from 'react-native' //exportando a tipagem de touchable opacity

type Props = TouchableOpacityProps & {
    title:string;
}

export function GroupCard({title, ...rest}: Props){
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}
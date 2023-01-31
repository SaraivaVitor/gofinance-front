import { Container } from './styles';

const DateInput = ({title}: { title: string}) => (
    <Container>
        <h1>{title}</h1>
        <input type="date"/>
    </Container>
)

export default DateInput;
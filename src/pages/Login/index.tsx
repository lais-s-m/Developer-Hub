import { Button } from "../../components/Button/style";
import { Container } from "../../components/Container/style";
import { Input } from "../../components/Input";

export const Login = () => {
    return (
        <>
            <h1>Kenzie Hub</h1>
            <Container>
                <h2>Login</h2>
                <Input 
                    label="Email"
                    name="email"
                    placeholder="Digite seu email"    
                />
                <Input
                    label="Senha"
                    name="password"
                    placeholder="Digite sua senha"
                    password = {true}
                />
                <Button
                    bgColor="pink"
                >Entrar</Button>
                <span>Ainda não possui uma conta?</span>
                <Button
                    bgColor="grey"
                >Cadastre-se</Button>
            </Container>
        </>
    )
}
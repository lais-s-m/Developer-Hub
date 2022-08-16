import { useState } from "react"
import { Button } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import { HorizontalBox } from "../../components/HorizontalBox/style"
import { Input } from "../../components/Input"

export const Register = () => {
    const [ isEnabled, setIsEnabled ] = useState(false);

    return (
        <>
            <HorizontalBox>
                <h1>Kenzie Hub</h1>
                <Button
                    bgColor="black"
                    size="sm"
                >Voltar</Button>
            </HorizontalBox>
            <Container>
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa</span>
                <Input
                    name="name"
                    label="Nome"
                    placeholder="Digite aqui seu nome"
                />
                <Input
                    name="email"
                    label="Email"
                    placeholder="Digite aqui seu email"
                />
                <Input
                    name="password"
                    label="Senha"
                    placeholder="Digite aqui uma senha"
                    password={true}
                />
                <Input
                    name="confirmPassword"
                    label="Confirmar senha"
                    placeholder="Digite novamente a senha criada"
                    password={true}
                />
                <Input
                    name="bio"
                    label="Bio"
                    placeholder="Fale sobre você"
                />
                <Input
                    name="contact"
                    label="Contato"
                    placeholder="Opção de contato"
                />
                <Input
                    name="course_module"
                    label="Selecionar módulo"
                    select={true}
                />
                { isEnabled ? (
                    <Button
                        bgColor="pink"
                    >Cadastrar</Button>
                ) : (
                    <Button
                        bgColor="pink-negative"
                    >Cadastrar</Button>
                )}
            </Container>
        </>
    )
}
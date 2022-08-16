import { Button } from "../../components/Button/style"
import { HorizontalBox } from "../../components/HorizontalBox/style"
import { Header } from "./styles"

export const Dashboard = () => {
    return (
        <>
            <HorizontalBox>
                <h1>Kenzie Hub</h1>
                <Button
                    bgColor="black"
                    size="sm"
                >Sair</Button>
            </HorizontalBox>
            <Header>
                <hr/>
                <div>
                    <h2>Olá, name</h2>
                    <p>módulo curso</p>
                </div>
                <hr/>
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </Header>
        </>
    )
}
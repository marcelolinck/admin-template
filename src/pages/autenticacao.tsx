import { useState } from "react"
import AuthInput from "../components/auth/AuthInput"

export default function Autenticacao() {

    //Usando o useState dessa forma, ele irá aceitar somente dois modos conforme abaixo, mas pode ser quantos forem necessarios
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div>
            <h1>Autenticacao</h1>
            <AuthInput
                label="E-mail"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
            />

            <AuthInput
                label="Senha"
                valor={senha}
                tipo="password"
                valorMudou={setSenha}
            />

        </div>
    )
}
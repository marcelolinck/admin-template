import { useState } from "react"
import AuthInput from "../components/auth/AuthInput"

export default function Autenticacao() {

    //Usando o useState dessa forma, ele irá aceitar somente dois modos conforme abaixo, mas pode ser quantos forem necessarios
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submeter() {
        if (modo === 'login') {
            console.log('login')
        } else {
            console.log('cadastrar')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2">
                <img src="https://source.unsplash.com/random" alt="Imagem da tela de Autenticação" className="h-screen w-full object-cover" />
            </div>

            <div className="m-10 w-1/2">
                <h1 className="text-xl font-bold mb-5">
                    {modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se na Plataforma'}
                </h1>
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

                <button onClick={submeter}
                    className={`w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6`}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className="my-6 border-gray-300 w-full" />
                <button onClick={submeter}
                    className={`w-full bg-red-500 hover:bg-red-400
            text-white rounded-lg px-4 py-3 mt-6`}>
                    Entrar com o Google
                </button>

            </div>
        </div>
    )
}
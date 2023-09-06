import { useState } from "react"
import AuthInput from "../components/auth/Authinput"
import { IconeAtencao } from "../components/Icons/Index"

export default function Autenticacao() {

    //Usando o useState dessa forma, ele irá aceitar somente dois modos conforme abaixo, mas pode ser quantos forem necessarios
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(null)


    function exibirErro(msg, tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000);
    }

    function submeter() {
        if (modo === 'login') {
            console.log('login')
            exibirErro('Ocorreu um erro no login!')
            
        } else {
            console.log('cadastrar')
            exibirErro('Ocorreu um erro no cadastro!')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-2/3 lg:w-3/4">
                <img src="https://source.unsplash.com/featured/?truck" alt="Imagem da tela de Autenticação" className="h-screen w-full object-cover" />
            </div>

            <div className="m-10 w-full md:w-1/3 lg:w-1/4">
                <h1 className="text-2xl font-bold mb-5">
                    {modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se na Plataforma'}
                </h1>
                {erro ? (
                    <div className={`flex item-center bg-red-400 text-white py-3 px-5 my-2
                border border-red-700 rounded-lg
                `}>{IconeAtencao()}
                        <span className="ml-3">{erro}</span>

                    </div>
                ) : false}


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

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}> Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já tem uma conta conosco?
                        <a onClick={() => setModo('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}> Entre com seus e-mail e senha</a>
                    </p>
                )}

            </div>
        </div>
    )
}
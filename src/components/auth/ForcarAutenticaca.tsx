import Script from 'next/script'
import Image from "next/image"
import loading from '../../../public/images/loading.gif'
import useAuth from "../../data/hook/useAuth"
import router from "next/router"

export default function ForcarAutenticacao(props: any) {

    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {
        return (
            <>
                {/* Dessa forma ele verifica se o cookie existe, ele vai manter a sessao a pagina que estiver, caso contrário, irá para a pagina de autenticacao */}
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `
                    if(!document.cookie?.includes("admin-template-controlCar-auth")){
                        window.location.href = "/autenticacao"
                    }
                    `
                    }}
                />
                {props.children}
            </>
        )
    }
    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image alt="Carregando" src={loading} priority={true}/>

            </div>
        )
    }
    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        router.push("/autenticacao")
        return null
    }
}
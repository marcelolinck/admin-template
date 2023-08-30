import { IconeAjustes, IconeCasa, IconeSino } from "../Icons"
import MenuItem from "./MenuItem"

export default function MenuLateral() {
    return (
        <aside>
            <ul>
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/Ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
        </aside>
    )
}
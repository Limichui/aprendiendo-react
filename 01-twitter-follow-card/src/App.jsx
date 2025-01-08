import './App.css'
import { TwitteFollowCard } from './components/TwitterFollowCard'

export function App () {
    return (
        <>
            <TwitteFollowCard userName="@micadev" name="Micaela Gonzales Guzmán" avatar="@micadev.jpg" />
            <TwitteFollowCard userName="@alvaro59" name="Alvaro de la Fuente Lopez" avatar="@alvaro59.jpg" />
            <TwitteFollowCard userName="@luisadesing" name="Luisa Olmedo Ramirez" avatar="@luisadesing.jpg" />
        </>
    )
}

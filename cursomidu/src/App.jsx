import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
{
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
},
{
    userName: 'LuuxDD',
    name: 'Luisina Bender',
    isFollowing: false
},
{
    userName: 'Camilu',
    name: 'Camila Moser',
    isFollowing: true
},
{
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
}
]

export function App () {
return (
    <section className='App'>
    {
        users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
        >
            {name}
        </TwitterFollowCard>
        ))
    }
    </section>
)
}
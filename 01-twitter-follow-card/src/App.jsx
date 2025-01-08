import './App.css'

export function App () {
    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar" src="/assets/images/avatars/user1.jpg" />
                <div className='tw-followCard-info'>
                    <strong>Micaela Godines Durán</strong>
                    <span className='tw-followCard-infoUserName'>@micadev</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}

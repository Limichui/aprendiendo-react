export function TwitteFollowCard ({ userName, name, avatar, isFollowing}) {
    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    alt="Avatar" 
                    src={`/assets/images/avatars/${avatar}`} />
                <div className='tw-followCard-info'>
                    <strong>{ name }</strong>
                    <span className='tw-followCard-infoUserName'>{ userName }</span>
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
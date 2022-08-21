import "./friend.css"

export default function Friend({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="friend"/>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
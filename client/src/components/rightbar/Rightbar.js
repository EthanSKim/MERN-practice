import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.jpeg" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Jinsol</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.PNG" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">NewYork</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Texas</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/person/5.jpeg" />
                        <span className="rightbarFollowingName">John Paige</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar /> }
            </div>
        </div>
    )
}
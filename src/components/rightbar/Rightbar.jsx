import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Abdullah Al Zawad</b> and <b>3 others friends</b> have a birthday today.</span>
        </div>
        <img src="assets/ads.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg"/>
          <div className="rightbarFollowingName">Daniel</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg"/>
          <div className="rightbarFollowingName">Daniel</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/7.jpg" alt="" className="rightbarFollowingImg"/>
          <div className="rightbarFollowingName">Daniel</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpg" alt="" className="rightbarFollowingImg"/>
          <div className="rightbarFollowingName">Daniel</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg"/>
          <div className="rightbarFollowingName">Daniel</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg"/>
          <div className="rightbarFollowingName">Daniel</div>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

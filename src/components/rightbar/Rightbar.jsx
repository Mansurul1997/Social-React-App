import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Abdullah Al Zawad</b> and <b>3 others friends</b> have a birthday today.</span>
        </div>
        <img src="assets/ads.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Zawad.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Abdullah Al Zawad</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Shifat.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Md. Mostafizur Rahman</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Rakib.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Md. Rakibul Islam</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Sharar.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Ahsan Yasir Sharar</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Ayan.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Muntasir Ayan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Rifat.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Md. Robayet Ahasan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Mohobbat.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mohobbat Rana</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Masum.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Abdullah Al Masum</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Roky.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mahamudur Rahman Roky</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Naim.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Naim Ishtiaq</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/Athar.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Athar Ishtiaq</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

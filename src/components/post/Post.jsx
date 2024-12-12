import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Mansurul Haque</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Assalamualaikum. It's my first post:)</span>
                <img src="/assets/person/7.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/care.png" alt="" />
                    <img className="likeIcon" src="/assets/heart.png" alt="" />
                    <img className="likeIcon" src="/assets/like.png" alt="" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

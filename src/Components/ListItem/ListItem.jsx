import "./ListItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1607034772941-bf678db55bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJhbWF0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
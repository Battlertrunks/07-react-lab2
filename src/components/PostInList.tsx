import { useState } from "react";
import "./PostInList.css";
import Post from "../models/Post";

interface Props {
  information: Post;
  onKey: number;
  onDelete: (key: number) => void;
}

const PostInList = ({ information, onKey, onDelete }: Props) => {
  information.key = onKey;
  return (
    <li className="PostInList">
      <div>
        <h2>{information.title}</h2>
        <p>{information.thought}</p>
      </div>
      <p className="trash-icon" onClick={() => onDelete(information.key)}>
        <i className="fa-solid fa-trash-can"></i>
      </p>
    </li>
  );
};

export default PostInList;

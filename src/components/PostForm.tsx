import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";
import SocialPosts from "./SocialPosts";

interface Props {
  onAddPost: (thought: Post) => void;
  onClose: () => void;
}

const PostForm = ({ onAddPost, onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [key, setKey] = useState(3);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setKey((prev) => prev++);
    onAddPost({ title, thought, key });
    setTitle("");
    setThought("");
    closeModal();
  };

  const closeModal = (): void => {
    onClose();
  };

  return (
    <section className="PostForm">
      <form onSubmit={submitHandler}>
        <p>
          <i
            className="fa-solid fa-circle-xmark"
            onClick={() => closeModal()}
          ></i>
        </p>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="thought">Thought:</label>
        <textarea
          name="thought"
          id="thought"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>
        <button>Add Post</button>
      </form>
    </section>
  );
};

export default PostForm;

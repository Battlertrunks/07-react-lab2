import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [thoughts, setThoughts] = useState<Post[]>([
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool.",
      key: 1,
    },
    {
      title: "React",
      thought: "React give me power!",
      key: 2,
    },
    {
      title: "Beatrice",
      thought: "My friend Beatrice has mad skills. she made the top 10!",
      key: 3,
    },
  ]);
  const [formModal, setFormModal] = useState(false);

  const deleteThought = (key: number): void => {
    const index: number = thoughts.findIndex((thought) => thought.key === key);
    setThoughts((prev) => {
      const copy = prev.map((item) => ({ ...item }));
      copy.splice(index, 1);
      return copy;
    });
  };

  const addThought = (thought: Post): void => {
    setThoughts((prev) => [...prev, thought]);
  };

  const onClose = (): void => {
    setFormModal((prev) => !prev);
  };

  return (
    <section className="SocialPosts">
      <button
        className="new-thought-btn"
        onClick={() => setFormModal((prev) => !prev)}
      >
        New Thoughts
      </button>
      {formModal && (
        <div className="modal">
          <PostForm onAddPost={addThought} onClose={onClose} />
        </div>
      )}

      <ul className="thoughts-container">
        {thoughts.map((thought, index) => (
          <PostInList
            information={thought}
            key={`${thought.title}${index}`}
            onKey={index + 1}
            onDelete={deleteThought}
          />
        ))}
      </ul>
    </section>
  );
};

export default SocialPosts;

//const deletePost = (index: number) => {
//     setPosts((prev) => {
//       return [...prev.slice(0, index), ...prev.slice(index + 1)];
//     });
//   };

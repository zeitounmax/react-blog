import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/2126389/pexels-photo-2126389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="jkt"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Musica</span>
          <span className="postCat">3615CodeMyLife</span>
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        exercitationem debitis impedit, placeat ad sequi! Magnam, placeat
        tempora. Incidunt vitae sed reiciendis enim molestias natus architecto
        quaerat magnam quo nihil. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptates exercitationem debitis impedit, placeat ad
        sequi! Magnam, placeat tempora. Incidunt vitae sed reiciendis enim
        molestias natus architecto quaerat magnam quo nihil.
      </p>
    </div>
  );
}

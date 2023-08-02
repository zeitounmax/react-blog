import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">A propos de moi</span>
        <img
          className="sidebarTitlepp"
          src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/358108873_3400626970249902_1336435954474381557_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fdU11C8xv-8AX_fB5m2&_nc_ht=scontent-cdg4-2.xx&oh=00_AfA6qBpqRsBDqrK7T53CSyKWPimhkM10p4DLK2RhrpVEvQ&oe=64CEEDC4"
          alt="MePP"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime
          necessitatibus, nesciunt blanditiis sequi pariatur modi labore
          incidunt fugit placeat aliquid dolore beatae quos iure illum magni.
          Beatae, pariatur commodi.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebaTitle">Catégories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">3615CodeMyLife</li>
          <li className="sidebarListItem">Dev</li>
          <li className="sidebarListItem">Ciné</li>
          <li className="sidebarListItem">Musica</li>
          <li className="sidebarListItem">Weeb</li>
          <li className="sidebarListItem">Autres</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Me Suivre</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-mastodon" />
          <i className=" sidebarIcon fa-brands fa-linkedin" />
          <i className="sidebarIcon fa-brands fa-twitter" />
        </div>
      </div>
    </div>
  );
}

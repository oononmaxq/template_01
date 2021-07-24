const Nav = () => {
  return (
    <nav id="mainnav">
      <p id="menuWrap">
        <a id="menu">
          <span id="menuBtn"></span>
        </a>
      </p>
      <div className="panel">
        <ul>
          <li>
            <a href="#top">TOP</a>
          </li>
          <li>
            <a href="#vision">VISION</a>
          </li>
          <li>
            <a href="#message">MESSAGE</a>
          </li>
          <li>
            <a href="#service">SERVICE</a>
          </li>
          <li>
            <a href="#story">STORY</a>
          </li>
          <li>
            <a href="#profile">PROFILE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

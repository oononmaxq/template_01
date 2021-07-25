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
            <a href="#top">
              <p className="text-gray-50">TOP</p>
            </a>
          </li>
          <li>
            <a href="#vision">
              <p className="text-gray-50">VISION</p>
            </a>
          </li>
          <li>
            <a href="#message">
              <p className="text-gray-50">MESSAGE</p>
            </a>
          </li>
          <li>
            <a href="#service">
              <p className="text-gray-50">SERVICE</p>
            </a>
          </li>
          <li>
            <a href="#story">
              <p className="text-gray-50">STORY</p>
            </a>
          </li>
          <li>
            <a href="#profile">
              <p className="text-gray-50">PROFILE</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

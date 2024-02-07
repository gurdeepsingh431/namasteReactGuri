const Header = () => {
  return (
    <div className="header-comp">
      <img
        className="header-logo-user"
        src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png"
        alt="Logo image"
      ></img>
      <div className="nav-items">
        <ul>
          <li>Offers </li>
          <li>Home </li>
          <li>Help </li>
          <li>Cart</li>
        </ul>
      </div>
      <img
        className="header-logo-user"
        src="https://github.com/chetannada/Namaste-React/blob/main/Chapter%2003%20-%20Laying%20the%20Foundation/Coding/user%20icon.png?raw=true"
        alt="User image"
      ></img>
    </div>
  );
};
export default Header;

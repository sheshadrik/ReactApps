import './Header.css';


const Header = () => {
    const navItems = ["Home","About Us","Services","Contact us","Careers"];

    const prepareNavItems = () => {
        return navItems.map(name => {
            return <li key={name}><a href="#">{name}</a></li>;
        })
    }

    return (<div className='header'>
    <nav>
      <ul>
      {prepareNavItems()}        
      </ul>
    </nav>
    </div>);
}

export default Header;
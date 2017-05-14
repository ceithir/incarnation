import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, MenuItem, Modal } from 'react-bootstrap';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "showSettings": false,
    };
  }

  showSettings = () => {
    this.setState({ "showSettings": true });
  }

  hideSettings = () => {
    this.setState({ "showSettings": false });
  }

  render() {
    return (
      <div>
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>{this.props.title}</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown title={`Options`} id="option-dropdown">
                <MenuItem onSelect={this.showSettings} key="settings">
                  {`Configuration`}
                </MenuItem>
                <MenuItem divider/>
                {this.props.items.map((item) => {
                  if (!item.action) {
                    return (
                      <MenuItem header key={item.key}>{item.text}</MenuItem>
                    );
                  }

                  return (
                    <MenuItem onSelect={item.action} key={item.key}>{item.text}</MenuItem>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.showSettings} onHide={this.hideSettings}>
          <Modal.Header closeButton>
            <Modal.Title>
              {`Configuration`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.settings}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  settings: PropTypes.element.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;

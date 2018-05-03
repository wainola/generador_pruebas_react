import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='datos'
                    active={activeItem === 'datos'}
                    onClick={this.handleItemClick}>
                    Ingresar datos
                </Menu.Item>

                <Menu.Item
                    name='pruebas'
                    active={activeItem === 'pruebas'}
                    onClick={this.handleItemClick}>
                    Pruebas generadas
                </Menu.Item>
                <Menu.Item position="right"
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleItemClick}>
                    Logout
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navbar;
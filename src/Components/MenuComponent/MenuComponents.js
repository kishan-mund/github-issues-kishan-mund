import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { anchorEl } = this.state;
        const MenuItems = this.props.sortArr.map((arg, e) => {
            return <MenuItem key={e} onClick={() => this.props.click(arg)}>{arg}</MenuItem>

        });
        return (

            < div >
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    {this.props.name}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {MenuItems}
                </Menu>
            </div >
        );
    }
}

export default SimpleMenu;
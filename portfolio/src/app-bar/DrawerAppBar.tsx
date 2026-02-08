import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './DrawerAppBar.css';
import CustomFlexBox from '../FlexBox/CustomFlexBox';
import CustomFlexBoxItem from '../FlexBoxItem/CustomFlexBoxItem';


const DrawerAppBar: React.FC<any> = () => {

  const item1Props = {
    id: 'portfolio',
    name: 'portfolio',
    order: 1,
    flex: 1,
    colWidth: 1,
    text: 'Portfolio',
    style: { color: 'red'},
    onClick: (e: MouseEvent) => {
      console.log('nothing');
    }
  }

  const siteHeading: string = 'Portfolio';
  return (
    <div>
      <Button>heeee</Button>
      <div className='navBarParent'>
        {/* <CustomFlexBox> */}
          {/* <CustomFlexBoxItem {...item1Props} /> */}
        {/* </CustomFlexBox> */}
        <div className={'heading'}>
          { siteHeading}
        </div>
      </div>
    </div>
    // <Box sx={{ display: 'flex' }}>
    //   <Box component="main" sx={{ p: 3 }}>
    //     <Toolbar />
    //     <Typography>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     </Typography>
    //   </Box>
    // </Box>
  );
}

export default DrawerAppBar;
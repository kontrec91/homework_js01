import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../styles/library.css";


const getGQL = (url, headers = {}) => (query = "", variables = {}) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());
  
  let gql = getGQL("/graphql");

// const CategoryItem = ({category: {_id, name}}) =>
// <li>
//     <Link to={`/category/${_id}`}>{name}</Link>
// </li>

// const Aside = () => {
//     const [categories, setCategories] = useState([])
//     console.log(categories)
//     useEffect(async () => {
//         let data = await getGQL('http://shop-roles.asmer.fs.a-level.com.ua/graphql')
//               (`query MainCategories{
//                   CategoryFind(query: "[{\\"parent\\":null}]"){
//                     _id name
//                   }
//                 }`)
//         setCategories(data.CategoryFind)
//     },[])

//     return (
//         <aside >
//             <ul>
//                 {categories.map(category => <CategoryItem category={category}/>)}
//             </ul>
//         </aside>
//     )
// }

export default ({history}) => {
//   const List = ({track: {_id, url, originalFileName}}) =>
// <li>
//     <p>{_id} {url} {originalFileName}</p>
// </li>
  // const data = [];
  // const List = ({data: {_id, url, originalFileName}}) =>
  // <li>
  //     <p><span>{_id}</span> 
  //         <span>{url}</span> 
  //         <span>{originalFileName}</span></p>
  // </li>
  const TrackList = () => {
    const [tracks, setTracks] = useState([]);
    console.log(tracks);
    useEffect( async () => {
      // {debugger}
      let data = await getGQL("/graphql")
      (`query tracksFind($query: String){
                TrackFind(query: $query){
                    _id
                    url
                    originalFileName
                }
        }`,{query: JSON.stringify([{}])})
        console.log(data)
        setTracks(data.TrackFind);

        console.log(data.TrackFind);
    },[])

        return (
        <div>
            <ul>
              {console.log(tracks)}
                {/* {tracks.map(track => <List track={track}/>)} */}
                {/* {tracks.map(track => <li>{track}</li>)} */}
            </ul>
        </div>
    )
}
    // let data = await getGQL("/graphql")
    //   (`query trackFind{
    //             TrackFind(query: "[{}]"){
    //                 _id
    //                 url
    //                 originalFileName
    //             }
    //           }`).then(data => console.log(data));

        // }`).then(data.map(data => console.log(data)));
      // }`).then((data) => data = data).then(data.map(data => console.log(data));
          // return(
          //   <>
          //   <div className="allTracks">
          //         <ul>
          //              {data.map(data => <List data={data}/>)}
          //         </ul>
          //   </div>
          //   </>
          // );
// };


  // TrackList()
  const Header = () => {
    return (
      <div className="header">
        <ul className="mainMenu">
          <li>
            <h2>gRomkoPlayer</h2>
          </li>
          <li>
            <h2>Библиотека</h2>
          </li>
          <li>
            <h2>Плейлист</h2>
          </li>
          <li>
            <h2>Поиск</h2>
          </li>
          <li>
            <h2>Пользователь</h2>
          </li>
        </ul>
      </div>
    );
  };

  return (
      <>
        <Header />
        <TrackList />
      </>
  );
};

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// const options = [
//   'Show some love to Material-UI',
//   'Show all notification content',
//   'Hide sensitive notification content',
//   'Hide all notification content',
// ];

// export default function SimpleListMenu() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleClickListItem = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className={classes.root}>
//       <List component="nav" aria-label="Device settings">
//         <ListItem
//           button
//           aria-haspopup="true"
//           aria-controls="lock-menu"
//           aria-label="when device is locked"
//           onClick={handleClickListItem}
//         >
//           <ListItemText primary="When device is locked" secondary={options[selectedIndex]} />
//         </ListItem>
//       </List>
//       <Menu
//         id="lock-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {options.map((option, index) => (
//           <MenuItem
//             key={option}
//             disabled={index === 0}
//             selected={index === selectedIndex}
//             onClick={(event) => handleMenuItemClick(event, index)}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }

// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

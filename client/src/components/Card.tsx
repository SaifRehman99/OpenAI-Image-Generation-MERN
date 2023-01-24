import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { downloadImage } from '../helpers/uils';


const Card:React.FC<any> = ({posts}) => {
  return (
    <ImageList sx={{ width: '70%', height: '100%', padding: '0 300px'}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">View amazing posts created by he community</ListSubheader>
      </ImageListItem>
      {posts.map((item:any, index:number) => (
        <ImageListItem key={index}>
          <img
            src={`${item.photo}?w=248&fit=crop&auto=format`}
            srcSet={`${item.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item?.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item?.prompt}
            subtitle={item?.name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item?.prompt}`}
                onClick={() => downloadImage(index, item.photo)}
              >
                <DownloadForOfflineIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Card;
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import classNames from 'classnames';
import React, { createRef, useEffect, useState } from 'react';
import './newsCard.css'

export const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticles,
  index,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop-50);
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (activeArticles === index + 1 && elRefs[activeArticles]) {
      scrollToRef(elRefs[activeArticles]);
    }
  }, [index, activeArticles, elRefs]);
  
    return (
      <Card
        ref={elRefs[activeArticles]}
        className={classNames(
          'news-card',
          activeArticles === index + 1 ? 'news-activeCard' : null
        )}
      >
        <CardActionArea href={url} target='_blank'>
          <CardMedia className={'news-media'} image={urlToImage || 'https://i.pinimg.com/originals/a1/16/72/a1167211bffbc81f616db1ef850aee2d.png'} />
          <div className={'news-details'}>
            <Typography variant='body2' color='textSecondary' component='h2'>
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='h2'>
              {source.name}
            </Typography>
          </div>
          <Typography className={'news-title'} gutterBottom variant='h5'>
            {title}
          </Typography>
          <CardContent>
            <Typography variant='' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={'news-cardActions'}>
          <Button size='small' color='primary' href={url} target='_blank'>
            Learn more
          </Button>
          <Typography variant='h5' color='textSecondary'>
            {index + 1}
          </Typography>
        </CardActions>
      </Card>
    );
};

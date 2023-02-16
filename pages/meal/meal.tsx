import React from 'react';
import ResponsiveAppBar from '@/components/AppBar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';
import Image from 'next/image';
import starImage from '../../images/star.svg';

const tags = new Array(4).fill('Tag');
const stars = new Array(5).fill('');

export default function MealPage() {
  return (
    <>
      <ResponsiveAppBar />
      <article className="article">
        <div className="article__container">
          <div className="article__box">
            <div className="article__title-actions">
              <a href="/" className="article__title-actions--link">
                <ArrowBackIosIcon className="article__title-actions--arrow" />
              </a>
              <h1 className="article__title-actions--title">Item name</h1>
            </div>
            <div className="article__title-actions">
              <Button variant="text" color="inherit">
                <EditIcon sx={{ fontSize: 25 }} />
              </Button>

              <Button variant="text" color="inherit">
                <DeleteForeverIcon sx={{ fontSize: 25 }} />
              </Button>
            </div>
          </div>

          <div className="article__image">
            <img alt="IMG" />
          </div>
          <div className="article__box article__rate">
            <div className="article__tags">
              {tags.map((tag, i) => (
                <Button key={i} className="article__tags--tag">
                  {' '}
                  {tag}{' '}
                </Button>
              ))}
            </div>

            <div className="article__stars stars">
              {stars.map((star, i) => (
                <Image key={i} src={starImage} alt="star" />
              ))}
            </div>
          </div>
          <div className="article__info">
            <div className="article__box">
              <h2>
                Category: <span className="article__category">Category</span>
              </h2>
              <div className="article__time">
                <AccessTimeIcon color="disabled" sx={{ fontSize: 30 }} />
                <span className="article__time--text">hr</span>
              </div>
            </div>
            <div className="article__ingredients">
              <h2>Ingredients:</h2>
              <ul className="article__ingredients-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <hr className="article__line" />
            <p className="article__recipe">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              egestas tincidunt odio non vehicula. Maecenas pulvinar accumsan
              ligula et cursus. Vestibulum at lacinia dui, ac vestibulum magna.
              Fusce sed dolor rhoncus, dapibus nibh at, ornare arcu. Phasellus
              id sollicitudin felis, non egestas mauris. Etiam eu ultrices
              justo. Integer pulvinar at libero quis consequat. Nullam non metus
              blandit, malesuada diam quis, gravida sapien. Nam at pellentesque
              neque. Ut tristique lorem eget elementum convallis. In sed neque
              eu ante feugiat auctor. Duis vel lorem sagittis, viverra arcu
              euismod, laoreet erat. Phasellus finibus sollicitudin dignissim.
              Proin id urna nec ligula congue scelerisque. Aliquam eu diam a
              erat commodo rhoncus. Praesent odio lectus, dictum mattis pharetra
              nec, commodo vel diam. Nulla maximus orci laoreet turpis aliquet
              auctor. Cras sit amet malesuada leo. Proin tempus id odio quis
              aliquam. Etiam ornare egestas felis, id consequat leo imperdiet
              ut. Sed at mauris nec diam luctus laoreet. Nulla facilisi. Sed vel
              mauris nunc. Suspendisse eu pellentesque sem. Etiam turpis mauris,
              faucibus quis sapien tempor, sodales condimentum felis. Nullam
              consectetur nisi eu tempus dictum. Sed sit amet iaculis nibh. Sed
              vel magna non purus aliquam suscipit nec a lorem. Curabitur tortor
              lectus, mollis a fringilla eget, accumsan ac sapien.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

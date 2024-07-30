import React from 'react';
import descriptionAndTextImage from '../assets/6883.jpg';

export default function DescriptionAndPhotoHome() {
  return (
    <>
      <div className="description-and-photo-content-wrapper">
        <img src={descriptionAndTextImage} className="description-photo-home"></img>

        <div className="description-text-container">
            <h1>Welcome To Keso Pictures!</h1>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quae numquam quis
            possimus nisi quibusdam incidunt quo debitis nesciunt nostrum a ad, reprehenderit porro
            asperiores, at iusto aspernatur minus dicta. Modi eveniet tempore minima exercitationem
            quibusdam! Itaque aliquam earum necessitatibus quisquam, nesciunt aperiam quo maxime
            numquam non cum quidem adipisci illum. Dicta doloremque, sint modi accusantium harum
            magni maiores voluptate.
          </h1>
        </div>
      </div>
    </>
  );
}

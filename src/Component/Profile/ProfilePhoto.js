import ProfilePhoto from "./photo.jpg";

function fetchPhoto() {
    return (
      <div>
        <img src={ProfilePhoto} className="photo" width ="300px"  alt="Profile Photo"/>
      </div>
    );
  }
  
  export default fetchPhoto;
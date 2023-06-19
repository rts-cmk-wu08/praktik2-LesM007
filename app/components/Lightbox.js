import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Lightbox = ({ sources }) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <FsLightbox toggler={toggler} sources={sources} />
    </>
  );
};

export default Lightbox;

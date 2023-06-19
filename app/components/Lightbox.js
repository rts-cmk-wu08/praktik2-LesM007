import { useState } from "react";
import FsLightbox from "fslightbox";

const Lightbox = ({ sources }) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox toggler={toggler} sources={sources} />
    </>
  );
};

export default Lightbox;

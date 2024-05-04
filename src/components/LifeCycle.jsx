import { useState, useEffect } from "react";

// Understanding the lifecycle for the below component
const SampleComponent = () => {
  const [mounted, setMounted] = useState(false);

  // Like State
  const [like, setLike] = useState(true);

  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  // Executing few statment based on the state of the component

  useEffect(() => {
    // Mounted --> No Dependencies
    // Statements to be executed right after mounting( load the jsx into DOM ) goes here
    alert("Sample Component is mounted");
    console.log("Sample Component is mounted");

    // update the state which tracks the mounted state inside the component
    setMounted(true);

    // Unmount
    return () => {
      // Statements to be executed right after unmountinig ( JSX syntax gettiing removed from the DOM ) goes here\
      alert("Sample Component is unmounting");
      console.log("Sample Component is unmounting");
    };
  }, []);

  // updating with the help of like
  useEffect(() => {
    // Statements below will get executed for both mounted and updated phase

    if (mounted) {
      if (like) {
        alert("Super, You liked Me");
      } else {
        alert("Sorry, will improve");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [like]);

  return (
    <>
      {console.log("Sample Component", "rendering")}
      <h2>
        I am a sample component to understand the Life Cycle of a component
      </h2>
      <i
        onClick={handleLike}
        className={`fa-${like ? "solid" : "regular"} fa-thumbs-up fa-3x`}
      ></i>
      <br />
    </>
  );
};

const LifeCycle = () => {
  const [mount, setMount] = useState(false);

  const handleMount = () => {
    if (mount) {
      setMount(false);
    } else {
      setMount(true);
    }
  };

  return (
    <>
      {mount && <SampleComponent />}
      <button onClick={handleMount}>
        {mount ? "Unmount" : "Mount"} the Component
      </button>
    </>
  );
};

export default LifeCycle;

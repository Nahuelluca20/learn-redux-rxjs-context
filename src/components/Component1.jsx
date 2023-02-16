import {useEffect} from "react";

function Component1() {
  useEffect(() => {
    sharingIformationService.getSubject();
  }, []);

  return <div />;
}

export default Component1;

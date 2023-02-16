import {useEffect, useState} from "react";

import {sharingInformationService} from "../../services/sharing-information.service";

function Component2() {
  const [count, setCount] = useState(0);
  const subcription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subcription$.subscribe((data) => {
      if (!!data) {
        setCount(count + 1);
      }
    });
  });

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Component2;

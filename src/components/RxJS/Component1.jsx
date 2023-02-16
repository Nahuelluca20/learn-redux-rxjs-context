import {sharingInformationService} from "../../services/sharing-information.service";

function Component1() {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  };

  const handleClickNo = () => {
    sharingInformationService.setSubject(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Send Information</button>
      <button onClick={handleClickNo}>NO Send Information</button>
    </div>
  );
}

export default Component1;

import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-center text-13xl text-seagreen-200 font-plus-jakarta-sans">
      <b className="absolute top-[110px] left-[37px] flex items-center justify-center w-[262px] h-[73px]">
        Choose Language
      </b>
      <Button
        className="w-[189px] absolute top-[660px] left-[87px] cursor-pointer"
        variant="outline-primary"
        onClick={onFrameButtonClick}
      >
        Submit
      </Button>
      <img
        className="absolute top-[240px] left-[25px] w-[307px] h-[341px] object-cover"
        alt=""
        src="/untitled-1@2x.png"
      />
      <div className="absolute top-[-271px] left-[390px] rounded-[50%] bg-greenyellow-200 w-[543px] h-[543px] opacity-[0.2]" />
    </div>
  );
};

export default Language;

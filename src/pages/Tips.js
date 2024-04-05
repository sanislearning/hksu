import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Tips = () => {
  const navigate = useNavigate();

  const onMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onIconHomeSimpleDoorClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onStackOfCoinsClick = useCallback(() => {
    navigate("/coin");
  }, [navigate]);

  const onImageRemovebgPreview401Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[2417px] overflow-hidden text-center text-13xl text-seagreen-200 font-poller-one">
      <a
        className="[text-decoration:none] absolute top-[981px] left-[-27px] w-[383px] h-[191px] overflow-hidden"
        href={`https://www.youtube.com/watch?v=Bqr5fGxJg5E&pp=ygUpbWFseW55YW0gYmhhc2hhbmFtYWtraSBhYWRpdmFzaSBtYWxheWFsYW0%3D`}
      >
        <img
          className="absolute top-[0px] left-[17px] rounded-3xs w-[381px] h-[191px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
      </a>
      <div className="absolute top-[35px] left-[8px] w-[341px] h-[97px] overflow-hidden">
        <div className="absolute top-[24px] left-[35px] flex items-center justify-center w-[262px] h-[73px]">{`Tips & News`}</div>
        <img
          className="absolute top-[-8px] left-[2px] w-[31.8px] h-[30px] object-cover cursor-pointer"
          alt=""
          src="/menu2@2x.png"
          onClick={onMenuIconClick}
        />
        <img
          className="absolute top-[-3px] left-[309.2px] w-[31.8px] h-[30px] object-cover"
          alt=""
          src="/alarm2@2x.png"
        />
      </div>
      <a
        className="[text-decoration:none] absolute top-[143px] left-[-2px] w-[370px] h-[267px] overflow-hidden"
        href={`https://www.youtube.com/watch?v=cIe1ma57uXE&pp=ygUgcHVsbCBlbHVwYXRoaWwga2FsYXlhbSBtYWxheWFsYW0%3D`}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[365px] h-[267px] object-cover"
          alt=""
          src="/whatsapp-image-20240322-at-1221-1@2x.png"
        />
      </a>
      <a
        className="[text-decoration:none] absolute top-[711px] left-[1px] w-[364px] h-[246px] overflow-hidden"
        href={`https://www.youtube.com/watch?v=SWJMg-38x_s&pp=ygUya2VyYWxhIHJlYWR5IHRvIGJlIGluZGlhcyBmaXJzdCBnYXJiYWdlIGZyZWUgc3RhdGU%3D`}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[360px] h-[246px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
      </a>
      <a
        className="[text-decoration:none] absolute top-[422px] left-[3px] rounded-3xs w-[360px] h-[265px] bg-[url('/public/whatsapp-image-20240322-at-1221-2@2x.png')] bg-cover bg-no-repeat bg-[top]"
        href={`https://www.youtube.com/watch?v=7fdvcA289iU&pp=ygUkcGFjaGFrYXJpIGtyaXNoaSBwYWRpcGljaGkgbWFsYXlhbGFt`}
      />
      <a
        className="[text-decoration:none] absolute top-[1195px] left-[-1px] w-[362px] h-[211px] overflow-hidden"
        href={`https://www.youtube.com/watch?v=6JCgBhQQg0Q&pp=ygUZa3VkdW1iYXNocmVlIGJhY2sgdG8gcGxhbg%3D%3D`}
      >
        <img
          className="absolute top-[0px] left-[1px] rounded-3xs w-[361px] h-[211px] object-cover"
          alt=""
          src="/68365642-1@2x.png"
        />
      </a>
      <a
        className="[text-decoration:none] absolute top-[1438px] left-[0px] rounded-3xs w-[360px] h-[190px] bg-[url('/public/maxresdefault-1@2x.png')] bg-cover bg-no-repeat bg-[top]"
        href={`https://www.youtube.com/watch?v=0ev3nsZZq88&pp=ygUYaGFyaXRoYWtlcmFsYW0gbWFsYXlhbGFt`}
      />
      <a
        className="[text-decoration:none] absolute top-[1668px] left-[0px] w-[360px] h-[202px] bg-[url('/public/maxresdefault1-1@2x.png')] bg-cover bg-no-repeat bg-[top]"
        href={`https://www.youtube.com/watch?v=ezkqhieE6pk&pp=ygUcaGFyaXRoYSBrYXJtYSBzZW5hIG1hbGF5YWxhbQ%3D%3D`}
      />
      <a
        className="[text-decoration:none] absolute top-[1898px] left-[0px] rounded-3xs w-[360px] h-[202px] bg-[url('/public/maxresdefault-2@2x.png')] bg-cover bg-no-repeat bg-[top]"
        href={`https://www.youtube.com/watch?v=iUquLqFcWyA&pp=ygUcaGFyaXRoYSBrYXJtYSBzZW5hIG1hbGF5YWxhbQ%3D%3D`}
      />
      <a
        className="[text-decoration:none] absolute top-[2139px] left-[0px] rounded-3xs w-[360px] h-[200px] bg-[url('/public/hq720-1@2x.png')] bg-cover bg-no-repeat bg-[top]"
        href={`https://www.youtube.com/watch?v=VXz4FfXCdcA&pp=ygUcaGFyaXRoYSBrYXJtYSBzZW5hIG1hbGF5YWxhbQ%3D%3D`}
      />
      <footer className="absolute top-[2354px] left-[-6px] w-[363px] h-[61px]">
        <img
          className="absolute top-[8px] left-[131.9px] w-[38.6px] h-[38px] object-contain"
          alt=""
          src="/group-25@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-[363px] h-[61px]">
          <div className="absolute top-[0px] left-[0px] rounded-6xl bg-base-white w-[363px] h-[61px]" />
          <img
            className="absolute h-[58.85%] w-[7.96%] top-[20.98%] right-[12.42%] bottom-[20.16%] left-[79.61%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="/vector@2x.png"
            onClick={onVectorIconClick}
          />
          <img
            className="absolute h-[53.93%] w-[8.65%] top-[21.15%] right-[82.78%] bottom-[24.92%] left-[8.57%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="/-icon-home-simple-door@2x.png"
            onClick={onIconHomeSimpleDoorClick}
          />
          <img
            className="absolute top-[10px] left-[185.7px] w-[61.3px] h-[42px] object-cover cursor-pointer"
            alt=""
            src="/stack-of-coins2@2x.png"
            onClick={onStackOfCoinsClick}
          />
          <img
            className="absolute top-[12px] left-[109.7px] w-[39.6px] h-[42px] object-cover cursor-pointer"
            alt=""
            src="/imageremovebgpreview-40-1@2x.png"
            onClick={onImageRemovebgPreview401Click}
          />
        </div>
      </footer>
    </div>
  );
};

export default Tips;

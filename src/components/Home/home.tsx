import { useEffect, useRef, useState } from "react";
import Dots from "./dots";
import Image from 'next/image'
import gogo from "../no-background.png"

const Main = () => {
  const outerDivRef = useRef<any>();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.preventDefault();
      const DIVIDER_HEIGHT = 5;
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
    return(
  <>
      <div ref={outerDivRef} className="outer">
      
      <Dots scrollIndex={scrollIndex} />
      <div className="bg-first">
          <div className="kid">
          <Image className="kid" src={gogo} alt="kid"></Image>
          </div>
        <div className="text" img src="../balloon2.png">"오늘 뭐 먹지?"<br/>고민할 것도 많은데<br/>식단까지? </div>
      </div>
      <div className="divider"></div>
      <div className="inner2 bg-second">Test Page 2</div>
      <div className="divider"></div>
      <div className="inner2 bg-third">Test Page 3</div>
           <style jsx>{`
                      .outer {
                        height: 100vh;
                        overflow-y: auto;
                      }
                      .bg-first {
                        position : relative;
                        background-color:#4ab379;
                        height : 100vh;
                                  }
                      /* 화면에서 스크롤바 안보이게 */
                      .outer::-webkit-scrollbar {
                        display: none;
                      }
                      .text {
                        font-size : 100px;
                        font-family : 'Nanum Brush Script';
                        position : absolute;
                        top: 200px;
                        left: 500px;
                        color : white;
                        background-image : url("../balloon2.png");
                      }
                      .kid {
                        position : relative;
                        object-fit: fill;
                        overflow: hidden;
                        top: 50%;
                        left : 50%;
                      }
                      .balloon2{
                        position : relative;
                        object-fit: fill;
                        overflow: hidden;
                        top: -200px;
                        left : 500px;
                      }
                      .ballon2 Image{

                      }
                      .inner2 {
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        text-align : center;
                        align-items: center;
                        font-size: 100px;
                        font-family : 'Yeon Sung'
                      }
                      
                      .bg-second {
                        background-color: #b6d8f2;
                      }
                      .bg-third {
                        background-color: #f4cfdf;
                      }
                      .divider {
                        width: 10%;
                        height: 1px;
                        background-color: gray;
                      }
                      `} 
         </style>
      </div>
  </>
  );   
}
export default Main;
import { useEffect, useRef, useState } from "react";
import Dots from "./dots";
import Image from 'next/image'
import gogo from "../TooMuchCoder.png"

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
      <div className="bg-yellow">
        <div className="text">5분도 아까운 때에<br/>개인 식단까지 짜야한다고?</div>
      </div>
      <div className="divider"></div>
      <div className="inner2 bg-blue">Test Page 2</div>
      <div className="divider"></div>
      <div className="inner2 bg-pink">Test Page 3</div>
           <style jsx>{`
                      body {
                        margin: 0;
                        overflow-y: hidden;
                      }
                      .outer {
                        height: 100vh;
                        overflow-y: auto;
                      }
                      /* 화면에서 스크롤바 안보이게 */
                      .outer::-webkit-scrollbar {
                        display: none;
                      }
                      .text{
                        font-size : 80px;
                        font-family : 'Nanum Brush Script';
                        position: relative;
                        top: 250px;
                        left: 250px;
                        color : white;
                      }
                      .inner {
                       
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
                      .bg-yellow {
                        background-color:#31945d;
                        height : 100vh;
                        
                      }
                      .bg-blue {
                        background-color: #b6d8f2;
                      }
                      .bg-pink {
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
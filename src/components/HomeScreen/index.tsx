import { ReactNode} from 'react';


interface HomeScreenProps {
  children : ReactNode;
  title? : string;
}

const HomeScreen =({children} : HomeScreenProps)=> {
  return (
    <body>
      <div id="HomeScreen">
        <div id="contents">
          <h1>메인화면</h1>
          <a href='foodSchedule/foodScheduleMake'>식단 짜기</a>
        </div>
       <style jsx>{`
        html, body{
        margin: 0;
        padding: 0;
        }
        h1, p {
        margin: 0;
        }
        a{
          color : inherit;
          text-decoration: none;
        }
        #HomeScreen{
        background: url(https://pixabay.com/get/ge70115902974dffc87a0751430eeed01065ce9938c5f3c0248d0adabaf2013632f0c71520c82819e159ad8c3f4c1c65814f1a07bb65e8604325191d9607a4626e966aeb06bf06f0e87602d14e1374d86_1920.jpg) no-repeat;
        background-size: cover;
        background-position: center center;
        width : 100vw;
        height : 100vh;
      } 
      #contents{
          position : absolute;
          top:50%;
          transform: translateY(-50%);
          width: 100%;
          color : white;
          text-align : center;
        }
      #contents h1{
        font-size: 70px;
        margin-bottom:50px;
      }
      #contents p{
        font-size : 50px;
        margin-bottom:80px;
      }
      #contents a{
        display : inline-black;
        border : 3px solid white;
        border-radius : 20px;
        padding : 20px 40px;
        font-size : 30px;
        font-weight : bold;
        margin-bottom:30px;
        transition : all 0.5s;
      }

      #contents a:hover{
        background-color : #fde5e543;
      }
       `}
      </style>
      </div>
    
    </body>
    
  );
};

export default HomeScreen;
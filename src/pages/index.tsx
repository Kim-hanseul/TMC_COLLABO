import Style from '@/styles/Video.module.css'
const Home = () => {
 
    return(
        
        <div id="boom">
        <div id="contents">
        <h1>Main Screen</h1>
        <a href='foodSchedule/foodScheduleMake'>식단 짜기</a>
       </div>
       <style jsx>{`
        html, body{
        margin: 0;
        padding: 0;
        }
        h1{
        margin: 0;
        }
        a{
          color : inherit;
          text-decoration: none;
        }
        #boom{
        background: url(https://pixabay.com/get/g268fd734b82a3a6c7b56a72bfabf0fc4daadd2c1ad23ae54b0ff35cf53b9ce18ccb738c0098819c3b4939bb0171ac299c7e7f26b9011881d51f21f59550332f191e7712fc913419b6cc4b523ff78dd7c_1920.jpg) no-repeat;
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
          color : #000000;
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
        border : 3px solid black;
        border-radius : 20px;
        padding : 20px 40px;
        font-size : 30px;
        font-weight : bold;
        margin-bottom:30px;
        transition : all 0.5s;
      }

      #contents a:hover{
        background-color : #111010b4;
      }
       `}
        
      </style>
    </div>
  
  );

        
}
export default Home
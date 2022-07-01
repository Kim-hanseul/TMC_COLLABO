import Layout from '@components/layout';

const Home = () => {
  return (
    <body>
    <div id="main">
    <Layout title="Home">
    </Layout>
    <div id="contents">
        <h1>테스트 메인화면</h1>
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
        #main{
        background: url(https://pixabay.com/get/g9e2e3731f8e46cc1f2b855ecc7cad945353f4676af5bf8d777165188b89d64f0610bd0add434e44c5be55f3f7cd66794a3b06c002f0265c12938999657658b1ae65f637457eeb5dfec4b72ae2549b196_1920.jpg) no-repeat;
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
          color : #000000de;
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
        background-color : #fde5e5b9;
      }
       `}
        
      </style>
          </div>
          </body>
  );
};

export default Home;

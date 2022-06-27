import Layout from '@components/layout';



const Home = () => {
  return (
    <body>
    <div id="main">
    <Layout title="Home">
    </Layout>
    <div id="contents">
        <h1>메인화면 1</h1>
        <p>Scroll</p>
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
        #main{
        background: url(https://pixabay.com/get/gb9d3c419b9e4eba5b0b2afef6d7744d728dd41336ac2ff1d794c847d10c5df9db7b6f095b4a5f10b8f17c6da4a0b77335bcfbe8d9f5129bef1636ea94761325eef3ee890653f01b473ef83a37e612a32_1920.jpg) no-repeat;
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

export default Home;

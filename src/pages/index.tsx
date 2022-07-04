import Style from '@/styles/Video.module.css'
import Layout from '@/components/Layout';
import styled from 'styled-components';
const Home = () => {
 
    return(
        <>
      <div id="wrap">
      <div className="page" style={{backgroundColor:'black'}}>PAGE 1</div>
      <div className="page" style={{backgroundColor:'blueviolet'}}>PAGE 2</div>
      <div className="page" style={{backgroundColor:'brown'}}>PAGE 3</div>
      <div className="page" style={{backgroundColor:'blue'}}>PAGE 4</div>
      <div className="page" style={{backgroundColor:'violet'}}>PAGE 5</div>
      </div>
       <style jsx>{`
          #wrap {
            width: 100%;
            height: 100;
            overflow: auto;
            scroll-snap-type: mandatory;
                        }

          #wrap .page {
            scroll-snap-align: center;
            display: inline-block;
            width: 100%;
            height: 100vh;
            padding: 100px;
            font-size: 70px;
            top:50%;
            box-sizing: border-box;
            color: #fff;
            text-align:center;
            
                        }
       `}
      </style>
      </>
  );   
}
export default Home;
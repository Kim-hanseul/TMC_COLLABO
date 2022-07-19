import React from 'react';
import { Nav2 } from '@/components/Nav';

const About = () => {
 
  return (
    <>
    <Nav2/>
      <div className="container">
        <table>
                <tbody>
                    <tr>
                        <td><img src="https://i.kym-cdn.com/photos/images/original/000/401/612/c11.png" width="400" height="400"/>
                         </td>
                        <td><img src="https://i.ytimg.com/vi/tdwqVX-IVFQ/maxresdefault.jpg" width="400" height="400"/>
                        </td>
                        <td><img src="https://images.ctfassets.net/23wh7e5ryr18/photo-43604/d02a6cd68116e7215d641f962fb92a60/43604-simpsons.jpg?fm=jpg&fl=progressive&w=900&q=50" width="400" height="400"/>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td><a href="https://github.com/JeongMyeongHong">홍 정 명</a></td>
                        <td><a href="https://github.com/Kim-hanseul">김 한 슬</a></td>
                        <td><a href="https://github.com/sol2kwon">권 솔 이</a></td>
                    </tr>
                </tbody>
                <style jsx>{`
                td{
                  top:50%;
                }`}
                </style>
            </table>
        </div>
      </>
  );
};


export default About;

import 'bootstrap/dist/css/bootstrap.css'
import React, {useEffect, useState} from 'react'
import Home from '@/components/Home/home'
import JoinPage from '@/pages/users/join';
import LoginPage from '@/pages/users/login';
import LogoutPage from '@/pages/users/logout';
import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
import gogo from "./TooMuchCoder.png";

    
export function Nav() {
    const [item, setItem] = useState(null)
    useEffect (()=> {
        let item : any = localStorage.getItem('loginSuccessUser');    
        setItem(item)
    },[])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        나의 식단 짜기
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><Link href="/foodSchedule/foodScheduleCalendar"><a className="dropdown-item" >나의 식단 캘린더</a></Link></li>
        <li><a className="dropdown-item" href="/foodSchedule/foodScheduleMake">나만의 식단 짜기</a></li>
        </ul>
        </li>


        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        커뮤니티
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/boards/addArticle">게시물 올리기</a></li>
        <li><a className="dropdown-item" href="/boards/myPage">나의 게시물</a></li>
        <li><a className="dropdown-item" href="/boards/boardList">게시글 목록</a></li>
        </ul>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        나의 페이지
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/users/remove">계정 탈퇴</a></li>
        <li><a className="dropdown-item" href="/users/update">계정 정보 수정</a></li>
        <li><a className="dropdown-item" href="/users/findAccount">계정 찾기</a></li>
    </ul>
    </li>
        </ul>
            <div>
                {item === null ?
                <div>
                <button  type = 'button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal1">
                <h5>회원가입</h5>
                </button>
                <div className="modal fade" id="modal1"tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">JOIN</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                     <JoinPage/>
                 </div>
                </div>
            </div>
            </div>
            
            &nbsp;
            &nbsp;
            <button type ='button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal2">
                <h5>로그인</h5>
                </button>
                <div className="modal fade" id="modal2"tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel2">LOGIN</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                     <LoginPage/>
                 </div>
                </div>
            </div>
            </div>
            &nbsp;
            </div>:
            <div>
                <LogoutPage/>
            </div>
            }
        </div>
        </div>
    </div>
    </nav>
    )
}
import 'bootstrap/dist/css/bootstrap.css'
import React, {useEffect, useState} from 'react'
import JoinPage from '@/pages/users/join';
import LoginPage from '@/pages/users/login';
import LogoutPage from '@/pages/users/logout';

export function Nav() {
    const [item, setItem] = useState(null)
    useEffect (()=> {
        let item : any = localStorage.getItem('loginSuccessUser');
        //let googleItem: any = windo.getItem()
        setItem(item)
    },[])
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">    
        { item !== null ? 
        <><li className="nav-item dropdown">
                        </li><li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    UserPage
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/users/mypage">My Page</a></li>
                                    <li><a className="dropdown-item" href="/users/findAccount">Find Account</a></li>
                                </ul>
                            </li></> : null}
        </ul> 
                
        <div>
            {item === null ?

            <div>
            <button type ='button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal1">
            <h5>Register</h5>
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
        <button  type = 'button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal2">
            <h5>Login</h5>
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


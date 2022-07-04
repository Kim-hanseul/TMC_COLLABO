import React, { CSSProperties, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { fetchBoardAPI } from '@/apis/boardApi'

export interface Board {
  articleId? : string,
  title: string,
  writtenDate? : string,
  open? : string,
  content: string,
  picture? : any,
  comment? : string
}
/** 
const RecStyle: CSSProperties = {
  width: "80%",
  height: "300px",
  borderRadius: "21px 21px 0 0"
}
*/

const AllBoardList: React.FC = () => {
  const [boardList, setBoardList] = useState<Array<Board>>([])
  
  useEffect (() => { fetchBoardAPI().then(data => {
    setBoardList(data)
  })}, [])

  return (
    <div className='container'>
    <div text-align = "center">
      <h1>USE POWER</h1>
    </div>
    {boardList.map((board: Board) => 
    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            <h5>iqeq1219</h5>
            </strong>
          <h3 className="mb-0">
            {board?.title}
          </h3>
          <div className="mb-1 text-muted">
          <h5> Nov 12 </h5>
          </div>
          <p key={board.content} className="card-text mb-auto">{board?.content}</p>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="5%" y="50%" fill="#eceeef" dy=".3em">사진 데이터 들어갈 예정</text></svg>
        </div>
      </div>
      </div>
      </div>
      )}
    </div>
  )
}

export default AllBoardList;
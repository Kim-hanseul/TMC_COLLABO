import React from 'react'

type Props = {
  onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
  onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
}

const AddBoard: React.FC<Props> = ({onChange, onSubmit}) => {
  return (
    <div>
<div className='container'>
    <div text-align = "center">
        <h3>upload article</h3>
    </div>
      <div>
          <h4>나만의 음식 사진을 올려보세요</h4><br/>
      </div>
        </div>
    <form onSubmit={onSubmit}>
        <div className='container'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            <h5>제목</h5>
            </span>
          <input onChange = {onChange} name = "title" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

          <div className="input-group mb-3">
            <h3>
              <input onChange = {onChange} name = "picture" type="file" className="form-control" id="inputGroupFile02" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </h3>
          </div>
          <br/>
          <div className="input-group">
              <span className="input-group-text">
              <h5>
                글 내용
              </h5>
              </span>
              <textarea name = "content" onChange = {onChange} className="form-control" aria-label="With textarea"></textarea>
            </div>            
          </div>    
            
          <button  className="w-50 btn btn-lg btn-outline-secondary" type="submit">
          업로드
          </button>
          </form>
          </div>
    
  )
}

export default AddBoard;
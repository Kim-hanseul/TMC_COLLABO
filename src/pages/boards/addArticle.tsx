import { Nav } from '@/components/Nav';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'hooks'
import { NextPage } from 'next';
import { writeBoard } from 'modules/boards';
import AddBoard from 'components/boards/addArticle';


export interface ArticleWrite {
  title: string,
  content: string,
  picture?: any | undefined,
}

const AddArticle: NextPage = () =>  {
  const [write, setWrite] = useState<ArticleWrite>({
    title: '', content: '', picture: null
  })
  const dispatch = useAppDispatch()
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setWrite({...write, [name]: value})
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`page useState에 입력된 게시판 저장 ${JSON.stringify(write)}`)
    dispatch(writeBoard(write))
  }

  return (
    <>
      <div className="container">
      <AddBoard onChange={onChange} onSubmit = {onSubmit}/>
      </div>
    </>
  );
};


export default AddArticle;
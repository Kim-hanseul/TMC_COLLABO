import Update from '@/components/users/Update'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'


export interface fetchData{
  username: string,
  name: string,
  phone: string,
  email: string,
  nickname: string,
  weight : string,
  height: string,
  gender: string
}

const updatePage : NextPage = () => {
  const [data, setData] = useState<fetchData>({
    username : '', name: '',  phone: '',  email: '', nickname:'', weight:'',height:'', gender:''  })

  // 스토어 내 로그인 정보 가져오겠음.
  const { userInfo } = useAppSelector(state => state.login);
  console.log(JSON.stringify(userInfo))
  useEffect(() => {setData(userInfo)})

  return (
    <Update data = {data}/>
  )
}

export default updatePage
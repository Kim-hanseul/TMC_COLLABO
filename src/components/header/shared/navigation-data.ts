export interface NavigationItem {
  title: string;
  link: string;
  active?: string[];
  subMenu?: { title: string; link: string }[];
}

const data: NavigationItem[] = [
  {
    title: '홈으로',
    link: '/',
  },
  {
    title: '나의 식단',
    link: '/foodSchedule/foodScheduleMake', 
    active: ['/foodSchedule/foodScheduleMake', '/foodSchedule/foodScheduleCalendar'],
    subMenu: [
      { title: '나만의 식단 짜기', link: '/foodSchedule/foodScheduleMake' },
      { title: '식단 캘린더', link: '/foodSchedule/foodScheduleCalendar' },
    ],
  },
  {
    title: '커뮤니티',
    link: '/boards/addArticle',
    active: ['/boards/addArticle', '/boards/boardList','/boards/mypage' ],
    subMenu: [
      { title: '게시글 올리기', link: '/boards/addArticle' },
      { title: '글 목록', link: '/boards/boardList' },
      { title: '나의 게시글', link: '/boards/myPage' },
    ],
  },
  { title: '팀', link: '/team/team', active: [] },
  { title: '로그인', link: '/users/login', active: [] },
  { title: '회원가입', link: '/users/join', active: [] },
];

export default data;
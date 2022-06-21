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
    active: ['/homepages/'],
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
    link: '/community/boardList',
    active: ['/community/write', '/community/ranking','/community/checkout' ],
    subMenu: [
      { title: '게시글 올리기', link: '/community/write' },
      { title: '랭킹 조회', link: '/community/ranking' },
      { title: '나의 게시글', link: '/community/myPage' },
    ],
  },
  { title: '팀', link: '/team/team', active: [] },
];

export default data;

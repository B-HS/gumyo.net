import { POST } from '../posts'

export const airreview = {
    pid: 'airreview',
    title: '에어리뷰',
    thumbnail: './portfolio/airreview.avif',
    description: `
    - 역할 : 팀장<br>
    ㄴ vue, spring boot 기본 템플릿 작성, 글에 관련된 페이지, 랭킹, 마이페이지, 좋아요, 저장된 목록,<br>
    계정 설정페이지, 어드민페이지, 전체 레이아웃 담당 및 수정, 세부 일정 하달 및 조정 등 전반적 관리<br>
<br>
    저에게는 첫 팀프로젝트인 아주 중요한 프로젝트입니다<br>
<br>
    팀원간의 회의와 기능에 대한 토의, 그리고 구현에 있어서의 문제점 토의, 때로는<br>
<br>
    팀원 분들의 pull request의 코드를 보며 공부하는 등 많은 체험을 할 수 있었습니다<br>
<br>
<br>
    다만 아쉬운 점은 처음 만드는 프로젝트여서 그런지 코드의 비효율성이 보이는게 아쉽습니다.<br>
    다음에 똑같은 프로젝트를 한다면 구현하는데 급급하는게 아닌<br>
    조금 더 여유를 가지고 쿼리를 얼마나 잘 쓸 수 있는지, 백엔드에서는 어느정도,<br>
    어떤 것만 선출하여 보내 주는게 좋은지, 웹페이지에서의 처리가 나누어진다면<br>
<br>
    어떻게 구성할지를 잘 생각하고 짤 수 있을 것 같습니다<br>
    `,
    stack: ['vue3', 'spring boot', 'vuex', 'sass', 'bootstrap'],
    github: 'https://github.com/DS-Pirate/-AIRREVIEW',
    link: 'https://hyns.co.kr/',
    from: new Date('2022-08-01 00:00:00.000000'),
    to: new Date('2022-10-01 00:00:00.000000'),
} as POST

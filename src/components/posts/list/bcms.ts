import { POST } from '../posts'

export const bcms = {
    pid: 'bcms',
    title: 'B_CMS',
    thumbnail: './portfolio/bcms.png',
    description: `
    실무에서 vue를 쓰던 와중 아예 처음부터 작성을 하면 어느정도까지의 기능을<br>
    구현할 수 있을지 궁금함과 이미 알던 내용들도 다시 복습하자는 느낌으로 시작한 프로젝트입니다 <br>
    기본적인 레이아웃을 잡고 백엔드의 주도하의 메뉴, 국제화등을 적용하여 <br>
    최대한 실무에서 쓰이던 CMS의 느낌을 살렸습니다 <br>
    몇몇 기능들을 더 추가하고 페이지 예제등을 추가하여 내년 3월까지 완성하는 것이 목표입니다 <br>
    `,
    stack: ['vue', 'daisy ui', 'spring boot'],
    github: 'https://github.com/B-HS/B_CMS',
    from: new Date('2023-11-12 00:00:00.000000'),
    to: new Date('2023-11-19 00:00:00.000000'),
} as POST

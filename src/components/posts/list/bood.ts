import { POST } from '../posts'

export const bood = {
    pid: 'BOOD',
    title: 'BOOD',
    thumbnail: './portfolio/bood.png',
    description: `
    어느날 자주 애용하던 구내식당 식단표가 사라져버렸습니다<br>
    사라진 김에 평소에 아쉬웠던 카카오 알람만 하던 식단표 페이지를<br>
    이번 기회에 웹 푸시를 포함하여 더 깔끔하게 작성하자는 목표가 생겼습니다 <br>
    `,
    stack: ['nextjs', 'express', 'chakra ui', 'prisma'],
    github: 'https://github.com/B-HS/BOOD',
    link: 'https://food.gumyo.net/',
    from: new Date('2023-11-12 00:00:00.000000'),
    to: new Date('2023-11-19 00:00:00.000000'),
} as POST

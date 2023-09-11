import { aco } from './list/aco'
import { airreview } from './list/airreview'
import { burrency } from './list/burrency'
import { naverwebtoonbookmarker } from './list/naverwebtoonbookmarker'
import { tistoryskin } from './list/tistoryskin'
export interface POST {
    pid: string
    thumbnail: string
    title: string
    description: string
    stack: string[]
    github?: string
    link?: string
    from?: Date
    to?: Date
}

export const post = [burrency, naverwebtoonbookmarker, airreview, aco, tistoryskin] as POST[]

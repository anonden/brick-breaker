export interface XYPair {
    x: number,
    y: number
}

export type BaseModeType = 'normal' | 'catch' 

export interface Brick {
    exists: boolean,
    type: string
}
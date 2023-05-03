import { XYPair } from "@/components/interfaces"

export function clamp(value: number, maxValue: number, minValue = 0){
    const clampedValue = Math.max(Math.min(maxValue, value), minValue)
    return {value: clampedValue, clampNeedeed: clampedValue !== value}
}

export function valueInRange(value: number, topValue: number, bottomValue: number){
    return value >= bottomValue && value <= topValue
}

export function distanceBetweenPoints(x1: XYPair, x2: XYPair){
    return Math.sqrt(Math.pow(x1.x - x2.x, 2) + Math.pow(x1.y - x2.y, 2)) 
}

export function calculateAngleFromCos(a: number, b: number, c: number){
    const cos = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) ) / (2 * a * b)
    const inRadian = Math.acos(cos)
    return inRadian
}
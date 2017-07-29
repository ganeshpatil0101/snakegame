export interface SnakeConfiguration{
    fps: number;
    size: number;    
}
export declare class Game{
   public static Snake(element:HTMLCanvasElement, conf:SnakeConfiguration):void;
}

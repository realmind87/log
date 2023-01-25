//declare module 'react-drawer';

declare module '*.png' {
    const content: import('../public/images').StaticImageData
    export default content
}
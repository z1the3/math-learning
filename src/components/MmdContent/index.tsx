import { MathpixMarkdown, MathpixLoader } from 'mathpix-markdown-it';


const MmdContent = () => {


    return (
        <MathpixLoader>
            <MathpixMarkdown text="\\(ax^2 + bx + c = 0\\)" />
            <MathpixMarkdown text="$x = \frac { - b \pm \sqrt { b ^ { 2 } - 4 a c } } { 2 a }$" />
            ...这是一行普通文字
        </MathpixLoader>
    );
}


export default MmdContent
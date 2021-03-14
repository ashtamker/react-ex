const data = ['Hello', 'world'];
const num1 = 5;
const num2 = 6;
const str = "I love React!";

const Basic = () => {
    return (
        <div>
            {`${data[0]} ${data[1]}`}
            <br />
            {num1 + num2}
            <br />
            {'str length:'+ str.length}
        </div>
    )
}


export default Basic;
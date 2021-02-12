
function Binding() {

    function hellofn1() {
        console.log("first function")
    }
    const hellofn2 = () => {
        console.log("second function")
    }
    function hellofn3() {
        console.log("third function")
    }

    return(
        <div>
            <button onClick={hellofn1()} >button1</button>
            <button onClick={hellofn2} >button2</button>
            <button onClick={()=>hellofn3()} >button3</button>
        </div>
    )
}
export default Binding
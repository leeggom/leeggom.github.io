import React, { useState } from 'react';

const Main = function() {

    /*
    let myName = 'walnutPlum';
    function changeName() {
        myName = myName === "walnutPlum"?"plumNut":"walnutPlum";
        document.getElementById("name").innerText = myName;
        
    }
    return (
        <div>
            <h2>mains_<span id="name">{myName}</span></h2>
            <button onClick={changeName}>change</button>
        </div>
    );
    */

    /*
    const [myName, setMyName] = useState("walnutPlum");

    function changeName() {
        setMyName(myName === "walnutPlum"?"plumWalnut":"walnutPlum");
    }
    return (
        <div>
            <h2>main_{myName}</h2>
            <button onClick={changeName}>변경</button>
        </div>
    )
    */

    /*
    const [cnt, setCnt] = useState(0);
    const updateCnt = () => setCnt(cnt + 1);
    const clearCnt = () => setCnt(0);
    return (
        <div>
            클릭한 횟수{cnt}
            <div>
                <button onClick={updateCnt}>증가</button>
                <button onClick={clearCnt}>초기화</button>
            </div>
        </div>
    )
    */

    //이거뭐야
    /*
    const [ state, setState ] = useState({cnt:0});
    
    //const updateCnt = val =>
    //    setState({
    //        ...state,[val] : state[val] + 1
    //    })
    function updateCnt(val) {
        setState({
            ...state,
            [val]: state[val] + 1
        });
    }
    console.log(state);
    const { cnt } = state;
    return (
        <div>
            클릭한 횟수는 {cnt}
            <div>
                <button onClick={updateCnt.bind(null, 'cnt')}>증가</button>
            </div>
        </div>
    )
    */


    const [cnt, setCnt] = useState(0);
    //const updateCnt = () => setCnt(cnt + 1);
    //const clearCnt = () => setCnt(0);
    return (
        <div>
            클릭한 횟수 {cnt}
            <div>
                <button onClick={() => setCnt(prevCnt => prevCnt + 1)}>클릭</button>
                <button onClick={() => setCnt(0)}>초기화</button>
            </div>
        </div>
    )



}

export default Main;
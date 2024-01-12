import React, { useState } from 'react';
import dummy from '../db/data.json';

//--------------------------------------------------------------
//----반복문 더미데이터 사용하기 map()  https://goddaehee.tistory.com/303
//--------------------------------------------------------------
const Main = (props) => {
    return (
        <div>
            {
                dummy.actors.map(people => (
                    <h3 key={actors.}></h3>
                ))
            }
        </div>
    )
}


//--------------------------------------------------------------
//----반복문 map()  https://goddaehee.tistory.com/303
//--------------------------------------------------------------
/*
const Main = (props) => {
    return (
        <div>
            <h3>mains_{props.name} / {props.age}</h3>
        </div>
    )
}
*/




/*
const Main = function() {
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

    //--------------------------------------------------------------
    //----이벤트 핸들러 기본  https://goddaehee.tistory.com/302 Start
    //--------------------------------------------------------------

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

    /*
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
    */
    
    /*
    const [ myName, setMyName ] = useState("walnutPlum");
    function changeName(e){
        e.preventDefault();
        setMyName(myName === "walnutPlum"?"plumWalnut":"walnutPlum");
    }
    return (
        <div>
            <h2>mains_{myName}</h2>
            <a href="#" onClick={changeName}>button</a>
        </div>
    )
}
*/
export default Main;
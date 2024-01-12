import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Wrapper from './component/Wrapper';
import { v4 as uuidv4 } from 'uuid';

function App() {
    /*기본 map 사용법 */
    //map 사용시 key가 설정되지 않았다면 가상 DOM을 순차적으로 비교하면서 감지하기 때문에 key가 없을때 보다 속도가 느리다
    //key는 고유값을 사용하거나 index로 사용한다 --index는 배열의 순서가 바뀌면 index도 바뀌기 때문에 권장X
    /*
    const names = [
        {userName : "app", age : 19},
        {userName : "plum", age : 2},
        {userName : "system", age : 400}
    ];
    let nameList = names.filter(v=> v.age < 30);    
    
    nameList = nameList.map((v) => (<Main key={v.userName} name={v.userName} age={v.age}/>))
    return (
        <div className="App">
        <Headers />
            <Wrapper>
            <div>
                {nameList}
            </div>
            </Wrapper>
        <Footer />
        </div>
    );
    */
   
    /*더미데이터 사용하기*/
    return (
        <div>
            <Main />
        </div>
    )

}

export default App;

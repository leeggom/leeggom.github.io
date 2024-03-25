import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { fetchDataFromDatabase } from "./dbCon"; // 데이터 가져오는 함수를 import

class Header extends Component {
    render(){
        return(
            <div>
                <header>
                    <h2>H~~~ad</h2>
                </header>
            </div>
        )
    }
}

export default Header;
import React, { Component } from "react";
import "./style.scss";
import Name from "../../name/index";
import ProfileImg from "../../profile-img/index";




export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            userList: [],
            companyAd: {},
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?delay=3")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        userList: result.data,
                        companyAd: result.ad
                    });
                    console.log("result from api", result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    navigation(){
        this.props.navigation.navigate('UserProfile')
    }

    render() {
        return (
            <div className="row">
                {this.state.userList.map(obj => (
                    <div className="card" onClick={ () => this.props.navigation.navigate('UserProfile')}>
                        <div>
                            <Name firstName={obj.first_name} lastName={obj.last_name}/>
                        </div>
                        <div>
                            <ProfileImg imgUrl={obj.avatar}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
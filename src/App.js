import React from 'react';
import Home from './home/index'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserProfile from './screen/user-profile';

// const Stacks = StackNavigator({
//   UserProfile: {
//     screen: UserProfile
//   },
// });


function App() {
  return (
    <div>
      <Home/>
      <Loader
         type="Oval"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
      />
    </div>
  );
}


export default App;

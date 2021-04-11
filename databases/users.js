import React from 'react';

class Database_User extends React.Component{

  static userInfo = {
    user_firstName: "",
    user_lastName: "",
    user_Email: "",
    user_Password: "",
    user_Gender: "",
    user_BloodType: "",
  }

  static getUserInfo = () => {
    return userInfo;
  }
}

export default Database_User;

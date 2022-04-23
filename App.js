import React from "react";
import Toast from "react-native-toast-message";

import { GlobalContext } from "./contexts/Global";
import AppContainer from "./routes";

import { toastConfig } from "./utils/toastConfig";

import { ApiManager } from "./api/ApiManager";
import { SymptomApi } from "./api/SymptomApi";
import { DiseaseApi } from "./api/DiseaseApi";
import { AssessmentApi } from "./api/AssessmentApi";
import { AccountApi } from "./api/AccountApi";
import { FeedbackApi } from "./api/FeedbackApi";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let token = false;
    // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkxODc5NTcsImV4cCI6MTY0OTE4ODg1NywiZGF0YSI6eyJpZCI6NX19.alA7Qd5bzUadtvO1c3mXf0odAzDBtrvrF51W-nVCC6A";
    // TODO
    // Load UserConfig from LocalStorage
    // Initiate ApiManager with token if available
    // Pass Other configurations to AppContainer e.g. Theme, Lang, isRtl, etc...
    const apiManager = ApiManager({
      baseUrl: "http://192.168.1.208/", // your pc local ip address --Open CMD and type-> netsh interface ip show address | findstr "IP Address"
      token,
      activeTokenChangedCallback: this.setToken,
    });
    SymptomApi(apiManager);
    DiseaseApi(apiManager);
    AssessmentApi(apiManager);
    AccountApi(apiManager);
    FeedbackApi(apiManager);

    this.state = {
      isLoggedIn: !!token,
      // isRtl: true,
      // languageCode: "ar"
    };
  }

  setToken = token => {
    // TODO: save token into local storage
    this.setState({
      isLoggedIn: !!token, // convert token into boolean
    });
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        <AppContainer />
        <Toast config={toastConfig} />
      </GlobalContext.Provider>
    );
  }
}
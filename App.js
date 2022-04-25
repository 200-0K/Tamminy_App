import React from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GlobalContext } from "./contexts/Global";
import AppContainer from "./routes";

import { toastConfig } from "./utils/toastConfig";
import { COLORS } from "./utils/colors";

import { ApiManager } from "./api/ApiManager";
import { SymptomApi } from "./api/SymptomApi";
import { DiseaseApi } from "./api/DiseaseApi";
import { AssessmentApi } from "./api/AssessmentApi";
import { AccountApi } from "./api/AccountApi";
import { FeedbackApi } from "./api/FeedbackApi";
import LoadingIndicator from "./components/LoadingIndicator";

getToken = async () => {
  try {
    return (await AsyncStorage.getItem("Token"))
  } catch (e){return null}
}

updateToken = async token => {
  try {
    await AsyncStorage.setItem("Token", token ?? "");
    return true;
  } catch (e){return null}
}

export default class App extends React.Component {
  state = {
    _loading: true,
    isLoggedIn: null,
    // isRtl: true,
    // languageCode: "ar"
  };

  async componentDidMount() {
    const token = await getToken() ?? false;

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

    this.setState({
      _loading: false,
      isLoggedIn: !!token,
    })
  }

  setToken = async token => {
    await updateToken(token);

    this.setState({
      isLoggedIn: !!token, // convert token into boolean
    });
  };

  render() {
    const {_loading} = this.state;

    if (_loading) return <LoadingIndicator color={COLORS.primaryText} />;

    return (
      <GlobalContext.Provider value={this.state}>
        <AppContainer />
        <Toast config={toastConfig} />
      </GlobalContext.Provider>
    );
  }
}
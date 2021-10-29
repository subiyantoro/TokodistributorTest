import React from "react";
import {Provider} from "react-redux";
import {store} from "./src/configs/store";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import Router from "./src/configs/router";
import {Provider as PaperProvider} from "react-native-paper"

const App = () => {
  return(
      <PaperProvider>
          <Provider store={store}>
              <SafeAreaProvider>
                  <Router />
              </SafeAreaProvider>
          </Provider>
      </PaperProvider>
  )
}

export default App
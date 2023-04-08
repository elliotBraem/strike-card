import "@near-wallet-selector/modal-ui/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "error-polyfill";
import { useState } from "react";
import "./App.scss";
import EditorPage from "./EditorPage";
import { Widgets } from "./data/widgets";

const App = () => {
  const [connected, setConnected] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [signedAccountId, setSignedAccountId] = useState(null);
  const [availableStorage, setAvailableStorage] = useState(null);
  const [widgetSrc, setWidgetSrc] = useState(null);

  const passProps = {
    setWidgetSrc,
    signedAccountId,
    signedIn,
    connected,
    availableStorage,
    widgetSrc,
    widgets: Widgets,
    tos: {
      checkComponentPath: Widgets.tosCheck,
      contentComponentPath: Widgets.tosContent,
    },
  };

  return <EditorPage {...passProps} />;
};

export default App;

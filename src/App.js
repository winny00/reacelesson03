import React from 'react';
import {Button} from 'antd'
import 'antd/dist/antd.css';
import '@ant-design/compatible/assets/index.css';
import HocPage from "./pages/HocPage";
import FormPage from './pages/FormPage';
import FormPageAntd from './pages/FormPageAntd';
import MyFormPage from './pages/MyFormPage';
import DialogPage from './pages/DialogPage';
import TreePage from './pages/TreePage';
import CommentListPage from './pages/CommentListPage';
import PureComponentPage from './pages/PureComponentPage';
import ReactMemoPage from './pages/ReactMemoPage';

function App() {
  return (
    <div className="App">
        {/* <Button type="primary">Button22</Button> */}
        {/* <HocPage /> */}
        {/* <FormPage/> */}
        {/* <FormPageAntd /> */}
        {/* <MyFormPage /> */}
        <DialogPage />
        {/* <TreePage /> */}
        {/* <CommentListPage /> */}
        {/* <PureComponentPage/> */}
          {/* <ReactMemoPage /> */}
    </div>
  );
}

export default App;

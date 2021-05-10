/* eslint-disable react-hooks/exhaustive-deps */
import  {useEffect} from 'react';
import './App.css';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypeSelector';


function App() {
  const {getPostsAction} = useActions();
   useEffect(() => {
    getPostsAction()
  },[])
  const { loading} = useTypedSelector((state) => state.repositoryReducer)

  return (
    <div className="App">
      {loading || `Not loading`}
    </div>
  );
}

export default App;

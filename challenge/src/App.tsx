import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Form from "./components/Form";
import CardsList from "./components/CardsList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Form />
      <CardsList />
    </>
  );
}

export default App;

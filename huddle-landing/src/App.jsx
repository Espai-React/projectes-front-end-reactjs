import { ThemeProvider } from "styled-components";
import { THEME } from "./lib/constants/theme";
import { GlobalStyles } from "./components/styles/Global";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { content } from "./lib/constants/content";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

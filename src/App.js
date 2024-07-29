import { PostProvider } from "./PostContext";
import DarkModeButton from "./DarkModeButton";
import { DarkModeProvider } from "./DarkModeProvider";
import Header from "./Header";
import Main from "./Main";
import Archive from "./Archive";
import Footer from "./Footer";

function App() {
  return (
    <section>
      <DarkModeProvider>
        <DarkModeButton />
      </DarkModeProvider>
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;

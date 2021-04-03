import CssStylesheet from "./css-stylesheet/CssStylesheet";
import CssModule from "./css-modules/CssModule";
import InlineStyle from "./inline-style/InlineStyle";
import StyledComponents from "./styled-components/StyledComponents";

function App() {
  return (
    <div>
      <InlineStyle />

      <div className="container">
        <h2 className="header">stylesheet bu divi etkiledi</h2>
      </div>

      <CssStylesheet />
      <CssModule />
      <StyledComponents />
    </div>
  );
}

export default App;

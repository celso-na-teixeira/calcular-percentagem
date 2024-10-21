import logo from "./logo.svg";
import "./App.css";
import CalculatorComponent from "./component/CalculatorComponent.js";

function App() {
  const msg = "Valor inválido";
  const calculatePercentage = (percentage, value) => {
    return (percentage / 100) * value || msg;
  };

  const calculatePercentageTwoNumbers = (value, total) => {
    if (total === 0) {
      return 0; // To avoid division by zero
    }
    return (value / total) * 100 || msg;
  };

  const calculatePercentageChange = (startingValue, finalValue) => {
    if (startingValue === 0) {
      return finalValue > 0 ? Infinity : finalValue < 0 ? -Infinity : 0;
    }

    return ((finalValue - startingValue) / startingValue) * 100 || msg;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Calcular Percentagem</h1>
        </div>
      </header>
      <body className="App-body">
        <p>
          Calcular Percentagem é uma ferramenta gratuita para calcular
          percentagens.
        </p>
        <CalculatorComponent
          calculate={calculatePercentage}
          label1="Quanto é"
          label2="% de"
          label3="?"
          resultPlaceholder="Result"
          unit=""
        />
        <br></br>
        <CalculatorComponent
          calculate={calculatePercentageTwoNumbers}
          label1=""
          label2="é quanto percentual de"
          label3="?"
          resultPlaceholder="Result"
        />
        <br></br>
        <CalculatorComponent
          calculate={calculatePercentageChange}
          label1="Qual o aumento/diminuição percentual de"
          label2="para "
          label3="?"
          resultPlaceholder="Result"
        />
        <br></br>
        <h3>O que é uma percentagem?</h3>
        <p>
          A porcentagem é uma maneira de representar um valor como parte de um
          total de 100. É amplamente usada para mostrar proporções ou comparar
          quantidades. O símbolo "%" é utilizado para indicar percentagens. Por
          exemplo, se em uma turma de 30 alunos, 12 são meninas, podemos afirmar
          que 40% dos alunos são meninas.
        </p>
        <h3>Como calcular uma percentagem?</h3>
        <p>
          Para calcular uma percentagem, divida a parte (o número mais pequeno)
          pelo todo (o número maior) e multiplique o resultado por 100. Isto
          dar-lhe-á um valor percentual entre 0 e 100. Por exemplo, se tiver 80
          brinquedos e Se quiser saber qual a percentagem de carros, e tem 32
          carros, dividiria 32 por 80 para obter 0,4. Depois, multiplique 0,4
          por 100 para descobrir que 40% dos brinquedos são carros.
        </p>
      </body>
      <footer className="App-footer">
        <nav>
          <ul>
            <a href="#" target="_blank">
              <b>Cookies</b>
            </a>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;

import { Segment } from 'semantic-ui-react';
import './App.css';
import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import FormProduto from './views/produto/FormProduto';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <FormCliente />
      <FormEntregador/>
      <FormProduto/>
      <div style={{ marginTop: '6%' }}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2026 - Projeto WEB IV - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;

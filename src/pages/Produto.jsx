import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";

function Produto() {
  return (
    <div>
      <NavBar />
      <ListaProdutos />
    </div>
  );
}

export { Produto };

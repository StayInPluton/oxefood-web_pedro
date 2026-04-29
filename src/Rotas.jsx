import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import { ProtectedRoute } from './views/util/ProtectedRoute';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FormLogin />} />


                <Route path="/home" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>} />


                <Route path="form-cliente" element={<FormCliente />} />


                <Route path="list-cliente" element={
                    <ProtectedRoute>
                        <ListCliente />
                    </ProtectedRoute>} />


                <Route path="form-produto" element={<FormProduto />} />
                <Route path='list-produto' element={<ListProduto />} />
                <Route path="form-entregador" element={<FormEntregador />} />
                <Route path="list-entregador" element={<ListEntregador />} />
            </Routes>
        </>
    )
}

export default Rotas

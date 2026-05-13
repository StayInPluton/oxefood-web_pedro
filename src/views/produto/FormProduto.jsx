// TODO: Ajustar tela de produto com back

import InputMask from 'comigo-tech-react-input-mask';
import { Button, Container, Divider, Form, FormField, Icon, Image, TextArea } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto() {
    const { state } = useLocation();

	const [idProduto, setIdProduto] = useState();
	const [codigo, setCodigo] = useState();
	const [titulo, setTitulo] = useState();
	const [descricao, setDescricao] = useState();
	const [valorUnitario, setValorUnitario] = useState();
	const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
	const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
	const [listaCategoria, setListaCategoria] = useState([]);
	const [idCategoria, setIdCategoria] = useState();
	const [imagem, setImagem] = useState(null);
  	const [preview, setPreview] = useState(null);

    useEffect(() => {

       if (state != null && state.id != null) {

           axios.get(ENDERECO_API + "api/produto/" + state.id)
           .then((response) => {
               setIdProduto(response.data.id)
               setCodigo(response.data.codigo)
               setTitulo(response.data.titulo)
               setDescricao(response.data.descricao)
               setValorUnitario(response.data.valorUnitario)
               setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
               setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
               setIdCategoria(response.data.categoria.id)
               setImagem(response.data.imagem);
           })
       }

       axios.get(ENDERECO_API + "api/categoriaproduto")
       .then((response) => {

           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

   }, [state])

const handleImagemChange = (event) => {

       const file = event.target.files[0];
       setImagem(file);

       // Gera uma URL para visualização da imagem
       if (file) {
           const reader = new FileReader();
           reader.onloadend = () => {
               setPreview(reader.result);
           };
           reader.readAsDataURL(file);
       } else {
           setPreview(null);
       }
};

function atualizaImagem(idProduto) {

		let formData = new FormData();
		formData.append('imagem', imagem);

		axios.post("http://localhost:8080/api/produto/" + idProduto, formData)
		.then((response) => {
			notifySuccess('Imagem cadastrada com sucesso.')
		})
		.catch((error) => {
			if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
			} else {
				notifyError(mensagemErro)
			}
		})
	}

    function salvar() {

let produtoRequest = {
idCategoria: idCategoria,
codigo: codigo,
titulo: titulo,
		descricao: descricao,
		valorUnitario: valorUnitario,
		tempoEntregaMinimo: tempoEntregaMinimo,
		tempoEntregaMaximo: tempoEntregaMaximo
	}

	if (idProduto != null) { //Alteração:

		axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
		.then((response) => { 
			console.log('Produto alterado com sucesso.') 
			atualizaImagem(idProduto);
		})
		.catch((error) => { 
			if (error.response) { 
				notifyError(error.response.data.errors[0].defaultMessage)
               		} else { 
			if (error.response.data.errors != undefined) {
	for (let i = 0; i < error.response.data.errors.length; i++) {
		notifyError(error.response.data.errors[i].defaultMessage)
	}
} else {
    notifyError(error.response.data.message)
}
			}			
		})
	} else { //Cadastro:
		axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => { 
			notifySuccess('Produto cadastrado com sucesso.')
			atualizaImagem(response.data.id);
		})
		.catch((error) => { 
if (error.response) { 					notifyError(error.response.data.errors[0].defaultMessage)
               	} else { 
if (error.response.data.errors != undefined) {
	for (let i = 0; i < error.response.data.errors.length; i++) {
		notifyError(error.response.data.errors[i].defaultMessage)
	}
} else {
    notifyError(error.response.data.message)
}
		}
		})
	}
}



    return (

        <div>
            <MenuSistema tela={'produto'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>
                            <Form.Input
                               label="Imagem do Produto"
                               type="file"
                               accept="image/*"
                               onChange={handleImagemChange}
                           />

                           {preview && (
                               <Image src={preview} size="small" bordered style={{ marginTop: '1em' }} />
                           )}
                           {!preview && imagem && (
                               <Image src={`imagens_cadastradas/${imagem}`} bordered style={{ marginTop: '1em' }} />
                           )}

                           <br/>


                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    width={12}
                                    maxLength="50"
                                >
                                    <InputMask
                                        placeholder="Informe o título do produto"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Código do Produto'
                                >
                                    <InputMask
                                        placeholder="Informe o código do produto"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <FormField
                                control={TextArea}
                                label='Descrição'
                                placeholder='Informe a descrição do produto'
                            />

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    required
                                    label='Valor Unitário'
                                    width={6}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}>
                                    <InputMask
                                        placeholder="30"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                >
                                    <InputMask
                                        placeholder="40"
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );
}
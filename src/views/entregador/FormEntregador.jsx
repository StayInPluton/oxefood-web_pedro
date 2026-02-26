import InputMask from 'comigo-tech-react-input-mask';
import { useState } from 'react';
import { Button, Container, Divider, Dropdown, Form, Icon, Radio } from 'semantic-ui-react';

const options = [
    { key: 'AC', text: 'Acre', value: 'AC' },
    { key: 'AL', text: 'Alagoas', value: 'AL' },
    { key: 'AP', text: 'Amapá', value: 'AP' },
    { key: 'AM', text: 'Amazonas', value: 'AM' },
    { key: 'BA', text: 'Bahia', value: 'BA' },
    { key: 'CE', text: 'Ceará', value: 'CE' },
    { key: 'DF', text: 'Distrito Federal', value: 'DF' },
    { key: 'ES', text: 'Espírito Santo', value: 'ES' },
    { key: 'GO', text: 'Goiás', value: 'GO' },
    { key: 'MA', text: 'Maranhão', value: 'MA' },
    { key: 'MT', text: 'Mato Grosso', value: 'MT' },
    { key: 'MS', text: 'Mato Grosso do Sul', value: 'MS' },
    { key: 'MG', text: 'Minas Gerais', value: 'MG' },
    { key: 'PA', text: 'Pará', value: 'PA' },
    { key: 'PB', text: 'Paraíba', value: 'PB' },
    { key: 'PR', text: 'Paraná', value: 'PR' },
    { key: 'PE', text: 'Pernambuco', value: 'PE' },
    { key: 'PI', text: 'Piauí', value: 'PI' },
    { key: 'RJ', text: 'Rio de Janeiro', value: 'RJ' },
    { key: 'RN', text: 'Rio Grande do Norte', value: 'RN' },
    { key: 'RS', text: 'Rio Grande do Sul', value: 'RS' },
    { key: 'RO', text: 'Rondônia', value: 'RO' },
    { key: 'RR', text: 'Roraima', value: 'RR' },
    { key: 'SC', text: 'Santa Catarina', value: 'SC' },
    { key: 'SP', text: 'São Paulo', value: 'SP' },
    { key: 'SE', text: 'Sergipe', value: 'SE' },
    { key: 'TO', text: 'Tocantins', value: 'TO' },
]

export default function FormEntregador() {
    const [ativo, setAtivo] = useState(true);

    return (
        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    width={9}
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    width={5}
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    width={4}
                                    fluid
                                    label='RG'>
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={4}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={5}
                                >
                                    <InputMask
                                        mask="(99) 99999-9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={5}
                                >
                                    <InputMask
                                        mask="(99) 9999-9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={4}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={4}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={16}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={4}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={9}
                                    maxLength="30"
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={9}
                                    maxLength="30"
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={3}
                                >
                                    <InputMask
                                        mask="99999-999"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Select
                                label="UF"
                                placeholder="Selecione"
                                options={options}
                                fluid
                                selection
                            />

                            <Form.Input
                                fluid
                                label='Complemento'
                                maxLength="150"
                            >
                            </Form.Input>

                            <Form.Field>
                                <label>Ativo:</label>

                                <Form.Group inline>
                                    <Form.Field>
                                        <Radio
                                            label="Sim"
                                            name="ativo"
                                            value="sim"
                                            checked={ativo === true}
                                            onChange={() => setAtivo(true)}
                                        />
                                    </Form.Field>

                                    <Form.Field>
                                        <Radio
                                            label="Não"
                                            name="ativo"
                                            value="nao"
                                            checked={ativo === false}
                                            onChange={() => setAtivo(false)}
                                        />
                                    </Form.Field>
                                </Form.Group>
                            </Form.Field>

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
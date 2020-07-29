import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
     const StartValues = {
          nome: '',
          descricao: '',
          cor: '#000'
     }
     const [values, setValues] = useState(StartValues);
     const [categorias, setCategorias] = useState([]);

     function setValue(key, value) {
          setValues({
               ...values,
               [key]: value
          })
     }

     function handleChange(infos) {
          setValue(
               infos.target.getAttribute('name'),
               infos.target.value
          );
     }

     return (
          <PageDefault>
               <h1>CADASTRO DE CATEGORIA: {values.nome}</h1>
               <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    setCategorias([
                         ...categorias, values
                    ])

                    setValues(StartValues);
               }}>


                    <FormField
                         label='Nome da categoria'
                         type='text'
                         name='nome'
                         value={values.nome}
                         onChange={handleChange}
                    />
                    <FormField 
                         label='Descrição'
                         type='text'
                         name='descricao'
                         value={values.nome}
                         onChange={handleChange}
                    />
                    <FormField
                         label='Cor'
                         type='color'
                         name='cor'
                         value={values.nome}
                         onChange={handleChange}
                    />


                    <button>
                         Cadastrar
                    </button>
               </form>

               <ul>
                    {categorias.map((categoria, indice) => {
                         return (
                              <li key={`${categoria}${indice}`}>
                                   {categoria.nome}
                              </li>
                         )
                    })}
               </ul>
               <Link to='/'>
                    Ir para Home
               </Link>
          </PageDefault>
     );
}

export default CadastroCategoria;
import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() { 
        const { paises, pais, local, meta, edit, handleInput, handleAdd, handleChange } = this.props;
        return ( 
            <section className='search'>
                <label className='label'>
                    Pais
                   {!edit ?
                 <select name="pais" className='input search-pais' onChange={ handleInput } value={ pais } >
                     <option>Selecione....</option>
                     {paises.map((pais) => <option key={ pais.translations.pt } value={ pais.translations.pt } >{ pais.translations.pt }</option>)}
                 </select> 
                 :
                 <select name="pais" className='input search-pais' disabled onChange={ handleInput } value={ pais } >
                     <option>Selecione....</option>
                     {paises.map((pais) => <option key={ pais.translations.pt } value={ pais.translations.pt } >{ pais.translations.pt }</option>)}
                 </select> 
                }
                </label>
                <label className='label'>
                    Local
                    <input 
                        className='input search-local'
                        value={ local }
                        name="local"
                        onChange={ handleInput }
                        type='text'
                        placeholder='Digite o local que deseja conhecer' 
                    />
                </label>
                <label className='label'>
                    Meta
                    <input name="meta" value={ meta } onChange={ handleInput } className='input search-data' type='date' />
                </label>
                {!edit ? <button 
                            className='search-btn'
                            type='submit'
                                 onClick={ handleAdd }
                         >Adicionar</button> 
                       : <button className='search-btn' type='submit' onClick={ handleChange } > Editar </button>}
            </section>
         );
    }
}
 
export default Search;

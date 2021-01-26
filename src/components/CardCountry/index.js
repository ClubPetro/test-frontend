import React, { Component } from 'react';
import './Card.css';
import edit from '../../assets/edit.png';
import del from '../../assets/del.png';

class CardCountry extends Component {


    dateToBR(date) {	
	return date.split('-').reverse().join('/');
}

    render() { 
        const { cards, handleEdit, handleDel } = this.props;
        return ( 
            <main className="main" >
                {cards.map((card, index) => (
                    <div className="card-content" key={ index }  >
                        <div className="card-icons">
                            <img src={ edit } alt="edit" className='edit' name={ index } onClick={ handleEdit } />
                            <img src={ del } className='del' alt="del" name={ index } onClick={ handleDel } />
                            
                        </div>
                        <div className="card-top">
                            <img className="flag" src={ card.flag } alt="Flag" />
                            <h1>{card.name}</h1>
                        </div>
                        <hr />
                        <div className="card-info" >
                            <p> Local: {card.local} </p>
                            <p> Meta: {this.dateToBR(card.meta)} </p>
                        </div>
                    </div> 
                ))}
            </main>
         );
    }
}
 
export default CardCountry;
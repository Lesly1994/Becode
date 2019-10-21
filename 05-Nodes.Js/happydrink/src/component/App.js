import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
// On n'oublie pas d'importer nos établissements
import { establishments } from './fixtures'
import  Establishment  from './establishments/establishment'

// Le paramètre title est ajouté aux props que nous fournit la classe Component
const listEstablishment = establishments.map( (establishment) => {
            return (
                // L'attribut "key" permet à React d'identifier les éléments.
                // Cela améliore les performances lors de l'ajout,
                // la modification et la suppression d'un élément.
                <li key = { establishment.id } className = 'establishment'>
                    <h3>{ establishment.name }</h3>
    
                    { establishment.description }
    
                </li>
            )
        })

class App extends Component {

    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            pseudo  : "Inconnu",
            //Ici ce trouve la valeur de l'input
            searchStringUser: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
     // Fonction qui recupère l'event de l'input et recupére sa valeur pour la mettre dans le state
     handleChange(e){
        this.setState({searchStringUser: e.target.value});
    }

    // On définit la fonction appelée lors d'un clic sur le lien "Changer le pseudo !"
    // la syntaxe  " nomFonction = () => {} " nous permet de conserver le contexte `this` du scope courant. (Ici, la classe App)
    randomPseudo = () => {
        // On s'amuse un peu ;)
        let randomPseudo    = ""
        const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const size          = Math.floor(Math.random() * 10) + 5
        for( let i=0; i < size; i++ ){
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        // On met à jour le state via la fonction "setState" héritée de la classe Component
        this.setState({
            pseudo : randomPseudo
        })
    }// On définit la fonction appelée lors d'un clic sur le lien "Changer le pseudo !"
    // la syntaxe  " nomFonction = () => {} " nous permet de conserver le contexte `this` du scope courant. (Ici, la classe App)
    randomPseudo = () => {
        // On s'amuse un peu ;)
        let randomPseudo    = ""
        const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const size          = Math.floor(Math.random() * 10) + 5
        for( let i=0; i < size; i++ ){
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        // On met à jour le state via la fonction "setState" héritée de la classe Component
        this.setState({
            pseudo : randomPseudo
        })
    }
    
    render() {

        const listEstablishment = establishments.map( (establishment) => {
            return (
                <Establishment
                    key={ establishment.id }
                    establishment={ establishment } // on n'a pas oublié la props "establishment" :)
                />
            )
        })

        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
                </header>
                <div className="App-intro">
                    <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>
                    <div>
                        
                        <input
                            type="text"
                            placeholder="search"
                            value={this.state.searchStringUser}
                            onChange={this.handleChange}
                        />
                    </div>
                    <Fragment>
                        { listEstablishment }
                    </Fragment>
                </div>
            </div>

        );
                    /*- l'input contient deux attribut spéciaux :
                     - value (vous avez compris ce que ça vaut maintenant)
                     - onChange ( fonction qui va être lancée à chaque changement de l'input.
                     Cette fonction en appel un autre qui recupère donc la value et la modifie dans le state)*/
    }
}

export default App;

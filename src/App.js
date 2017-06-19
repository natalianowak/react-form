import React, {Component} from 'react';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueName: '',
            valueSurname: '',
            selectedSex: '',
            selectedBrowser: '',
            selectedFruit:[]
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setGender=this.setGender.bind(this);
        this.setBrowser=this.setBrowser.bind(this);
        this.setFruit=this.setFruit.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }

    handleChangeName(event) {
        this.setState({...this.state, valueName: event.target.value});
    }

    handleChangeSurname(event) {
        this.setState({...this.state, valueSurname: event.target.value});
    }

    setGender(event) {
        this.setState({...this.state, selectedSex: event.target.value});
        //console.log(event.target.value);
    }

    setBrowser(event){
        this.setState({...this.state, selectedBrowser: event.target.value});
       // console.log(event.target.value);
    }
    setFruit(event){
        this.state.selectedFruit.push(event.target.value);
        this.setState(this.state);
    }

    handleSubmit(event) {
        alert('Imie: ' + this.state.valueName + ' Nazwisko: ' + this.state.valueSurname + " plec: "+ this.state.selectedSex + " przegladarka inetrnetowa: "+ this.state.selectedBrowser + " ulubione owoce "+ this.state.selectedFruit);
        event.preventDefault();
    }
    handleReset(event){
        this.setState({valueName: '',valueSurname: '',selectedSex: '',selectedBrowser: '',selectedFruit:[]});
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Wypelnij formularz</h2>
                    <br />
                    <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                        <label>
                            Imie:
                            <input type="text" value={this.state.valueName} onChange={this.handleChangeName}/>
                        </label>
                        <br />
                        <label>
                            Nazwisko:
                            <input type="text" value={this.state.valueSurname} onChange={this.handleChangeSurname}/>
                        </label>
                        <br />
                        <br />
                        <br />
                        <p>Podaj swoją płeć:</p>
                        <div onChange={this.setGender}>
                            <input type="radio" checked={this.state.selectedSex === 'Kobieta' } name="Płeć" value="Kobieta"/>Kobieta
                            <input type="radio" checked={this.state.selectedSex === 'Mężczyzna' } name="Płeć" value="Mężczyzna"/>Mężczyzna
                        </div>
                        <br />
                        <br />
                        <p>Jakiej przeglądarki internetowej używasz?</p>
                        <select onChange={this.setBrowser} name="Przeglądarka">
                            <option value="Internet Explorer" selected="selected">Internet Explorer</option>
                            <option value="Netscape">Netscape</option>
                            <option value="Opera">Opera</option>
                            <option value="Mozilla">Mozilla</option>
                            <option value="Inna">Inna</option>
                        </select>
                        <br />
                        <br />
                        <br />
                        <p>Ulubione owoce?</p>
                        <div onChange={this.setFruit} name="Fruit">
                            <input type="checkbox" name="friut" value="apples" checked={this.state.selectedFruit.indexOf('apples') >=0 } /> Apples<br />
                            <input type="checkbox" name="friut" value="oranges" checked={this.state.selectedFruit.indexOf('oranges') >=0 } /> Oranges<br />
                            <input type="checkbox" name="friut" value="pears" checked={this.state.selectedFruit.indexOf('pears') >=0 } /> Pears<br />
                            <input type="checkbox" name="friut" value="peaches" checked={this.state.selectedFruit.indexOf('peaches') >=0 } /> Peaches<br />
                        </div>
                        <br />
                        <br />
                        <br />
                        <input type="submit" value="Wyślij formularz"/>
                        <input type="reset" value="Wyczyść dane"/>
                    </form>
                </div>

            </div>
        );
    }
}

export default App;

import React from 'react';
import { STOCKNAMES, STOCKS } from '../data/StockData';
import '../css/AutoCompleteText.css'
import { LanguageContext } from '../Apps';

function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }

export default class AutoCompleteText extends React.Component {
    constructor (props){
        super(props);
        this.items = Object.values(STOCKS);
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
            
            if(suggestions.length!=0){
                var x = value.toLowerCase();
                var y = suggestions[0].toLowerCase();
                if(x==y){
                    {this.props.onSubmit(STOCKNAMES[value])}; // Converting the name into symbol for api
                }
            }
            
        }
        
        this.setState(() => ({suggestions, text: value}));
    }
    suggestionSelected (value){
        this.setState(()=> ({
            text: value,
            suggestions: [],
        }))
        {this.props.onSubmit(STOCKNAMES[value])};
    }
    renderSuggestions(){
        const { suggestions } = this.state;
        if(suggestions.length ===0){
            return null;
        }
        return (
            <ul className='stock-suggestions'>
                {suggestions.map((item) =><li onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }
    render() {
        const {text} = this.state;
        return (
            <LanguageContext.Consumer>{(language)=>(
                <div className='AutoCompleteText'>
                <input value={text} placeholder={language==='En'?"Rechercher des actions par nom":'Search stock by name'} onChange={this.onTextChanged} type="text" />
                <div className='suggestion-container'>
                {this.renderSuggestions()}
                </div>
             </div>
            )}</LanguageContext.Consumer>
        )
    }
}
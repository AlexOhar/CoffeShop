import { Component } from 'react';
// import React, { useState } from 'react';

import './filter.scss';


class Filter extends Component {
    constructor(props) {
        super(props);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.state = {
            term: ''
        }
    }

    

    onFilterSelect(e) {
        const btn = e.target;
        const btns = document.querySelectorAll('.filter_tabs_tab');

        if(btn.classList.contains('active')) {

            btns.forEach((item, i) => {
                if(item.classList.contains('active')) {
                    item.classList.remove('active')
                }
            })
            btn.classList.remove('active');
        } else {
            btns.forEach((item, i) => {
                if(item.classList.contains('active')) {
                    item.classList.remove('active')
                }
            })
            btn.classList.add('active');
        }
        if (btn.classList.contains('active')) {
            const filter = e.target.getAttribute('data-filter');
            // this.setState({filter});
            this.props.onFilterSelect(filter);
        } else {
            const filter = 'all';
            this.props.onFilterSelect(filter);
        }
       
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        // this.setState({term});
        this.setState({ term }, () => {
            console.log(this.state.term);
        });
        this.props.onUpdateSearch(term);
    }


    render() {
    
        return(
            <div className='filter'>
                <div className="filter_inputBlock">
                    <label htmlFor="search">Lookiing for</label>
                    <input label='search' 
                            type="text" 
                            placeholder='start typing here...' 
                            value={this.state.term} 
                            onChange={this.onUpdateSearch}/>
                </div>
                <div className="filter_tabs">
                    <h4>Or filter</h4>
                    {/* {buttons} */}
                    <button onClick={this.onFilterSelect} className='filter_tabs_tab' data-filter='Brazil' type="button">Brazil</button>
                    <button onClick={this.onFilterSelect} className='filter_tabs_tab' data-filter='Kenya' type="button">Kenya</button>
                    <button onClick={this.onFilterSelect} className='filter_tabs_tab' data-filter='Columbia' type="button">Columbia</button>
                </div>

            </div>
        )
    }
}

export default Filter;
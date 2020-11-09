import React, { Component } from 'react';
import './App.css';
import Header from './Component/header';
import Footer from './Component/footer';
import './App.css';
import $ from 'jquery';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      paras : 4,
      text : '',
      showscroll:false,
    }
    this.myRef = React.createRef() 
  }

  componentDidUpdate(){
    window.scrollTo({top:-10,behavior:'smooth'});
  }
  componentDidMount(){
    this.getdata();
    window.scrollTo({top:-10,behavior:'smooth'});
    // this.myRef.current.scrollTo(0, 0);
  }
  scrollTop = () =>{
      window.scrollTo({top:0,behavior:'smooth'});
      // $('html, body').animate({scrollTop:0}, 'slow');
  }
  getdata(){
      this.setState({
        text:'Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.'
      },
      ()=>{
        console.log(this.state.text);
      })
  }
  render(){
    return (
      <div className="App">
        <Header />
        <div onClick={this.scrollTop.bind(this)}><i class="fa fa-angle-up scrollup"></i>
         </div>
        <Footer />
     </div>
    )
  }
}


export default App;

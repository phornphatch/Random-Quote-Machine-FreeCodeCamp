var colors = [
  "#feae51", "#98b2d1", "#b35f44", "#f3df4d",     "#3078b4", "#ec8b83", "#00a779", "#9369a8", "#cd4a77", "#434852", "#e0b589", "#9d915a", "#96999b"
  ]
  var quotes = [
    {quote: "The difference between stupidity and genius is that genius has its limits.", author: "Albert Einstein"},
    {quote: "If you think you are too small to make a difference, try sleeping with a mosquito.", author: "Dalai Lama"},
    {quote: "Remember, today is the tomorrow you worried about yesterday.", author: "Dale Carnegie"},
    {quote: "Education is learning what you didn’t even know you didn’t know.", author: "Daniel J. Boorstin"},
    {quote: "Whoever said money can’t buy happiness didn’t know where to shop.", author: "Gertrude Stein"},
    {quote: "Everything is funny, as long as it’s happening to somebody else.", author: "Will Rogers"},
    {quote: "The average dog is a nicer person than the average person.", author: "Andy Rooney"},
    {quote: "Money is not the most important thing in the world. Love is. Fortunately, I love money.", author: "Jackie Mason"},
    {quote: "If you think you have it tough, read history books.", author: "Bill Maher"},
    {quote: "The road to success is always under construction.", author: "Lily Tomlin"},
  ]
  
  class QuoteOfTheDay extends React.Component {
    constructor(props) {
      super(props);
      const randomQuote = quotes[Math.round(Math.random() * (quotes.length - 1))]
      this.state = {
        quoteText: randomQuote.quote,
        author: randomQuote.author,
        color: colors[Math.round(Math.random() * (colors.length - 1))]
      }
      this.newQuote = this.newQuote.bind(this)
    }
    componentDidMount() {
      document.body.style.backgroundColor = this.state.color
    }
    newQuote() {
      const randomQuote = quotes[Math.round(Math.random() * (quotes.length - 1))]
      const color = colors[Math.round(Math.random() * (colors.length - 1))]
      document.body.style.backgroundColor = color
      this.setState({
        quoteText: randomQuote.quote,
        author: randomQuote.author,
        color: color
      })
    }
    render() {
      return (
              <div className="container">
            <h1 className="title">Quote of the Day</h1>
            <div className="quote-container">
              <div>
                <div id="quote-box">
              <div id="text" className="quote-text" style={{color: this.state.color}}><i class="fa fa-quote-left"></i>&nbsp;&nbsp;{this.state.quoteText}&nbsp;&nbsp;<i class="fa fa-quote-right"></i></div>
              <div id="author" className="author-text" style={{color: this.state.color}}>-&nbsp;{this.state.author}</div>
              <div className="actionBar">
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quoteText}&hashtags=quoteofthedaybyzumo`} target="_top"><i class="fa fa-twitter" style={{color: this.state.color}}></i></a>
                <button id="new-quote" style={{backgroundColor: this.state.color}} onClick={this.newQuote}>New Quote</button>
              </div>
            </div>
                <div className="footer">by ZUMO</div>
              </div>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<QuoteOfTheDay />, document.getElementById('root'));
  
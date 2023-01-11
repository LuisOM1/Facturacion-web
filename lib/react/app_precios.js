'use strict';

const e = React.createElement;


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "hola";
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Mensual'
    );
  }
}

const domContainer = document.querySelector('#precios');
const root = ReactDOM.createRoot(domContainer);

root.render(
    e(LikeButton )
);

reportWebVitals();
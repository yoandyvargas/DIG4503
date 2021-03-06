class NameSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  readName = event => {
    event.preventDefault();
    let input = document.getElementById("pokemonName").value;

    fetch(`/api/pokemon/name/${input}`)
      .then(res => {
        return res.json();
      })
      .then(results => {
        this.setState({ pokemon: results });
      });
  };

  pokemonResultArea() {
    if (this.state.pokemon.error) {
      return <h1>{this.state.pokemon.error}</h1>;
    } else {
      return <h1>ID: {this.state.pokemon.id}</h1>;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.readName}>
          <input
            type="text"
            id="pokemonName"
            defaultValue="Enter Pokemon Name"
          />
          <br></br>
          <button>Enter</button>
        </form>
        {this.pokemonResultArea()}
      </div>
    );
  }
}
export default NameSearch;

/* import { useEffect, useState } from "react"


const Contacto = () => {

    const [isMobile, setIsMobile] = useState(false)
    
    const checkIsMobile = () => {
        console.log(window.visualViewport.width)

        if (window.visualViewport.width <= 552) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        checkIsMobile()

        window.addEventListener('resize', checkIsMobile)

        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }
    }, [])

    return (
        <div>
            <h2>Contacto</h2>
            <hr/>

            {
                isMobile
                ? <h4>Lorem Ips</h4>
                : <h4>Lorem Ips</h4>
            }
        </div>
    )
}

export default Contacto */

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
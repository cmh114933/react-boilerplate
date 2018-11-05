import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import { LOCAL_IP_ADDRESS } from '../secret'

export default Reactotron.configure({ host: LOCAL_IP_ADDRESS }) // controls connection & communication settings
  .use(reactotronRedux())
  .connect() // let's connect!

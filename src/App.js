import {Box} from "@material-ui/core";
import FormAuthLogin from "./client/components/FormAuthLogin/FormAuthLogin";
import Header from "./client/components/Header/Header";
import Sidebar from "./client/components/sidebar/components/Sidebar";
import Routes from "./shared/routes/routes";
import './shared/styles/styles.scss';

function App() {

    return (
        <>
            <Header />
            {/* <FormAuthLogin /> */}
                <Sidebar/>
                <Routes/>
        </>
    );
}

export default App;

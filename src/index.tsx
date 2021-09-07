import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { Developers } from './pages/Developers';
import { Team } from './pages/Team';
import { Advanced } from './pages/Advanced';
import { Investors } from './pages/Investors';
import { useStore } from '@/store/index';
import { customTheme } from './lib/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Enterprise from "./pages/Enterprise";
import Faq from "./pages/Faq/Faq";
import { Research } from './pages/Research'
import MediaCenter from "./pages/MediaCenter";
import Pebble from "./pages/Pebble";
import { EmailPopup } from './components/EmailPopup'
import { hotjar } from 'react-hotjar';
import {Ucam} from "@/pages/Ucam";
import Policy from "@/pages/Policy";
import Cookie from "@/components/Cookie";
import Iopay from '@/pages/Iopay'
import CmcStarterPack from "@/pages/CmcStarterPack";
import StarterPack from "@/pages/StarterPack";
import Hackathon from "@/pages/Hackathon";
import CmcStake from "@/pages/CmcStake";
import Vita from "@/pages/Vita";

// hotjar.initialize(2494554, 6);

export const App = observer(() => {
	const { lang } = useStore();
  let routes = [
    { path: '/', component: Home},
    { path:'/developers', component: Developers},
    { path: '/faq', component: Faq},
    { path: '/team', component: Team},
    { path: '/enterprise', component: Enterprise},
    { path: '/research', component: Research},
    { path: '/press', component: MediaCenter},
    { path: '/pebble', component: Pebble},
    { path: '/advanced', component: Advanced},
    { path: '/for-investors', component: Investors},
    { path: '/ucam', component: Ucam},
	  { path:'/policy', component:Policy},
	  { path: '/cmc', component: CmcStarterPack},
	  { path: '/iopay', component: Iopay},
	  { path: '/start', component: StarterPack},
	  { path: '/hackathon-india', component:Hackathon},
	  { path: '/cmc-staking', component:CmcStake},
	  { path: '/vita', component: Vita}
  ]
	useEffect(() => {
		lang.init();
	}, []);
	return (
    <ChakraProvider theme={customTheme}>
      <EmailPopup />
	    {/* <Cookie/> */}
      <Router>
        <Switch>
          {
            routes.map(item => {
              return  <Route path={item.path} exact key={item.path} component={item.component} />
            })
          }
	        <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </ChakraProvider>
	);
});

export default App;

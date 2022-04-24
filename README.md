<!-- 
Allow Routing in Application
index.js 
-->

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

<!-- App.js -->
<!-- import Route to add path -->
<!-- This will allow http://www.site-url.com/welcome to laod Welcome Component-->
import { Route } from "react-router-dom"; 
<Route path={"/welcome"}>
    <Welcome/>
</Route>

import Sidebar from '../Sidebar/index';
import './index.scss'
import { Outlet } from 'react-router-dom';

const Layouts = ()=>{
    return(
    <div className='App'>
        <Sidebar/>
        <div className="page">
            <span className='tags top-tags'>
                &lt; html &gt;
                <br />
                <span className='body-tag'>
                    &lt; body &gt;
                </span>
            </span>
            <Outlet/>
            <span className='tags bottom-tags'>
                &lt; /body &gt;
                <br />
                <span className='bottom-tag-html'>
                    &lt; /html &gt;
                </span>
            </span>
        </div>
    </div>
    );
}
export default Layouts;
import React, {useState} from 'react';

interface Props {
  isOpen: boolean;
  toggleSidebar: string;
  title: string;
}

//https://dev.to/jealousgx/build-a-responsive-sidebar-with-react-and-styled-components-4e9e
// https://github.com/JealousGx/snippets/blob/sidebar/src/components/Data.js
// https://react.dev/learn/adding-interactivity
export const Sidebar: React.FC<Props> = ({ isOpen, toggleSidebar ,title }) => {  
  //const [isOpen, setOpen] = useState(false);
  //const toggleOpen = () => setOpen(!isOpen);  
  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        
      </button>

      {isOpen ?
        (
        <div>
        <h2>{title}</h2> 
        </div>
        ):null
      }
    </div>
  )
};

/* alternatve way by including the Content section separately, from a constant
{isOpen ? <Content title={title}/>: null }
...
const Content = ({title}) => (
  <div>
    <h2>{title}</h2> 
  </div>  
)
*/
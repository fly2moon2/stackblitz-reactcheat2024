import React, {useState} from 'react';

interface Props {
  title: string;
  subtitle: string;
  text: string;
  url: string;
  url_label: string;
  css_class: string;
  css_class_focus: string;
}

// react hover toggle class
// https://stackoverflow.com/questions/38045836/toggle-css-class-in-react
//
// https://stackoverflow.com/questions/44575727/react-js-toggle-adding-a-class-on-hover
export const Card: React.FC<Props> = ({ title, subtitle, text, url, url_label, css_class, css_class_focus }) => {  
  const [isHover, setIsHover] = useState(false);
  const toggleHover = () => setIsHover(!isHover);
  var className=(isHover?css_class_focus:css_class);
  return (
    <card className={className}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div>
        <h2>{title}</h2>        
        <h3>{subtitle}</h3>
        <p>{text}</p>
        <a href={url}>{url_label}</a>
      </div>
    </card>
  )
};
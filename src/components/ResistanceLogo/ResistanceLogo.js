import React, { PropTypes } from 'react';

import styles from './ResistanceLogo.sass';

const ResistanceLogo = (props) => {
  const image = '../static/img/Logo-large.png';

  // you can add your own CSS class to ResistanceLogo.sass for any
  // time you use this component, and simply reference that class name in
  // the "customClassName" property of the component's tag.
  // ex: <ResistanceLogo customClassName="footerLogo "/> tag.
  styles.customClassName = props.customClassName;

  return (
    <div className={styles.customClassName}>
      <img src={image} alt="Logo for the Resistance Calendar" />
    </div>
  );
};

ResistanceLogo.defaultProps = {
  customClassName: styles.defaultLogoStyle
};

ResistanceLogo.propTypes = {
  customClassName: PropTypes.string
};

export default ResistanceLogo;

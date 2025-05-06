import React from 'react';
import { Icon } from "@iconify/react";
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import useBaseUrl from '@docusaurus/useBaseUrl';

function BetaFeatureAdmonition(props) {
  return (
	<div className="theme-admonition beta alert--experimental">
	  <div className="admonitionHeading_Gvgb">
	    <span className="admonitionIcon_Rf37">
          <img src={useBaseUrl('/img/BetaBadge.svg')} style={{ width: '28px' }} alt="Experimental icon" />
        </span>
        {props.title}
      </div>
      <div className={'content'}>{props.children}</div>
    </div>
  );
}

function OpenTelemetryTipAdmonition(props) {
  return (
	<div className="theme-admonition experimental alert--experimental">
	  <div className="admonitionHeading_Gvgb">
	    <span className="admonitionIcon_Rf37">
          <img src={useBaseUrl('/img/ExperimentalBadge.svg')} style={{ width: '28px' }} alt="Experimental icon" />
        </span>
        {props.title}
      </div>
      <div className={'content'}>{props.children}</div>
    </div>
  );
}


const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'opentelemetry-tip': OpenTelemetryTipAdmonition,
  'beta': BetaFeatureAdmonition,
};

export default AdmonitionTypes;

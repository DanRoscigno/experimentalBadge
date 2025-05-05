import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import useBaseUrl from '@docusaurus/useBaseUrl';
//import MyCustomExperimentalIcon from '@site/static/img/ExperimentalBadge.svg';

function MyCustomAdmonition(props) {
  return (
    <div style={{border: 'solid red', padding: 10}}>
      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

function OpenTelemetryTipAdmonition(props) {
  return (
    <div className={'admonition-otel'}>
      <div className={'icon-container'}>
        <img src={useBaseUrl('/img/ExperimentalBadge.svg')} alt="OpenTelemetry icon" />
        </div>
      <div>
        <div className={'heading'}>{props.title}</div>
        <div className={'content'}>{props.children}</div>
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'my-custom-admonition': MyCustomAdmonition,
  'opentelemetry-tip': OpenTelemetryTipAdmonition,
};

export default AdmonitionTypes;
import React from 'react';
import { Icon } from "@iconify/react";
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import useBaseUrl from '@docusaurus/useBaseUrl';
//import MyCustomExperimentalIcon from '@site/static/img/ExperimentalBadge.svg';

function MyCustomAdmonition(props) {
  return (
    <div style={{border: 'solid white', padding: 10}}>
      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

function OpenTelemetryTipAdmonition(props) {
  return (
    <div className={'admonition-otel'}> 
      <div className={'icon-container'}>
        <img src={useBaseUrl('/img/ExperimentalBadge.svg')} alt="Experimental icon" />
      </div>
      <div>
        <div className={'heading'}>{props.title}</div>
        <div className={'content'}>{props.children}</div>
      </div>
    </div>
  );
}

function Example(props) {
	return (
		<div className="theme-admonition theme-admonition-example admonition_o5H7 example alert--example">
			<div className="admonitionHeading_FzoX">
				<span className="admonitionIcon_rXq6">
					<Icon icon="fluent:drafts-24-regular" />
				</span>
				{props.title?.length > 0
					? props.title
					: translate({ message: "Exemple" })}
			</div>
			<div className="admonitionContent_Knsx">{props.children}</div>
		</div>
	);
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'my-custom-admonition': MyCustomAdmonition,
  'opentelemetry-tip': OpenTelemetryTipAdmonition,
  'example': Example,
};

export default AdmonitionTypes;

/*
<div class="theme-admonition theme-admonition-undefined admonition_xJq3 alert alert--info">
<div class="admonitionHeading_Gvgb">
  <span class="admonitionIcon_Rf37">
    <span class="text-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" class="icon" viewBox="0 0 1024 1024"><path d="M512 472a40 40 0 1 0 80 0 40 40 0 1 0-80 0m367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8M395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 0 1-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844z"></path></svg>
    </span>
  </span>
  Experimental feature</div>
  <div class="admonitionContent_BuS1">
    <p>
      <a href="/docs/introduction/maturity/">Advice on use of experimental features</a>
    </p>
  </div>
</div>
*/

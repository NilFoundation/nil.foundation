import Script from 'next/script'
import { UIJob } from 'src/freshteam/types'

type FreshteamForEmbedProps = {
  jobId: UIJob['id']
}

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func: any) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if(result === null)
     result = [];
  return result;
}

const FreshteamForEmbed = ({ jobId }: FreshteamForEmbedProps) => {
  const handleLoad = () => {
    console.log('loaded')

    setTimeout(() => {
        const applyButton = document.getElementById('freshteam-job-apply');
        applyButton && applyButton.click()

        }, 5000)
  }

  return (
    <>
      <Script
        src="https://s3.amazonaws.com/files.freshteam.com/production/142690/attachments/6004875605/original/6000069521_widget.js?1662042007"
        strategy="lazyOnload"
        onLoad={handleLoad}
      />
      <div id="freshteam-widget" />
      <div className={`job-view-${jobId}`}></div>
    </>
  )
}

export default FreshteamForEmbed

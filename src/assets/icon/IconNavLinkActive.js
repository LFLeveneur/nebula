import * as React from "react";
const SvgIconNavLinkActive = (props) => (
  <svg
    className={props.className}
    width={props.scale*26 || 26}
    height={props.scale*18 || 18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
        style={{ transform: `scale(${props.scale || 1})` }}
      d="M5.07 7.98c-.257-.23-.513-.464-.764-.702l-.01.057a31.106 31.106 0 0 0 1.537 1.357l.045-.022a33.46 33.46 0 0 1-.807-.69Zm19.902 7.298a3.552 3.552 0 0 0-.308-.92c-.28-.582-.65-1.11-1.042-1.613a17.642 17.642 0 0 0-1.063-1.215l-.19-.197A28.289 28.289 0 0 0 20.4 9.515a15.466 15.466 0 0 0-.336-.282 39.46 39.46 0 0 0-2.034-1.574l-.004-.004-.038-.027a43.582 43.582 0 0 0-1.957-1.342 44.858 44.858 0 0 0-2.793-1.684l-.194-.106a44.25 44.25 0 0 0-2.565-1.309 35.866 35.866 0 0 0-2.268-.97c-.107-.042-.214-.082-.32-.122a31.297 31.297 0 0 0-.625-.223 18.447 18.447 0 0 0-2.62-.714c-.609-.11-1.227-.184-1.848-.15-.31.02-.62.067-.914.178a1.646 1.646 0 0 0-.417.23 1.21 1.21 0 0 0-.317.367 1.29 1.29 0 0 0-.142.474c-.018.166-.007.333.02.495.056.325.173.633.312.925.265.547.607 1.045.974 1.517l.074.096c.586.733 1.23 1.407 1.907 2.045A31.106 31.106 0 0 0 6.271 9.05a45.449 45.449 0 0 0 4.63 3.248l.005.002.23.142a47.768 47.768 0 0 0 3.376 1.871A41.118 41.118 0 0 0 16.7 15.33c.133.057.266.112.4.168a23.72 23.72 0 0 0 .72.288c.665.254 1.337.489 2.02.685.508.147 1.021.274 1.541.37.607.11 1.225.184 1.843.15.307-.019.616-.065.907-.176.145-.056.285-.129.41-.227a1.18 1.18 0 0 0 .31-.36c.078-.14.124-.3.141-.463a1.808 1.808 0 0 0-.02-.487Zm.01.487a1.25 1.25 0 0 1-.138.46c-.078.14-.185.262-.31.357-.123.097-.262.17-.407.225-.29.11-.598.156-.906.176-.616.033-1.233-.042-1.84-.152a16.789 16.789 0 0 1-1.533-.37 25.121 25.121 0 0 1-2.024-.69l-.208-.08a38.996 38.996 0 0 1-.898-.372 35.47 35.47 0 0 1-1.335-.605 40.678 40.678 0 0 1-.847-.415l-.114-.058a47.803 47.803 0 0 1-3.49-1.966l-.163-.1c-.309-.194-.617-.39-.923-.59a45.755 45.755 0 0 1-2.754-1.947 38.725 38.725 0 0 1-1.214-.968 30.431 30.431 0 0 1-1.571-1.391 19.917 19.917 0 0 1-1.879-2.023l-.072-.094c-.366-.47-.706-.968-.967-1.51a3.53 3.53 0 0 1-.306-.909c-.055-.315-.035-.652.116-.928.152-.277.42-.463.704-.57a3.09 3.09 0 0 1 .899-.174c.613-.034 1.229.04 1.834.15.873.165 1.732.411 2.576.703.199.067.396.138.593.211.129.047.256.096.384.145a33.38 33.38 0 0 1 2.219.952 32.491 32.491 0 0 1 .687.329l.015.007c.161.078.321.159.481.24a43.996 43.996 0 0 1 1.572.836 49.91 49.91 0 0 1 2.813 1.687 43.98 43.98 0 0 1 2.02 1.371l.034.025c.088.064.176.127.263.192a40.18 40.18 0 0 1 2.106 1.65 27.925 27.925 0 0 1 2.152 1.997 17.354 17.354 0 0 1 1.053 1.195c.394.499.764 1.024 1.046 1.604.138.29.255.595.31.915.027.16.037.323.02.484h.002Z"
      fill="gold"
    />
    <path
        style={{ transform: `scale(${props.scale || 1})` }}
      d="M4.306 7.278A30.431 30.431 0 0 0 5.878 8.67M4.306 7.278l-.01.057m.01-.057a19.917 19.917 0 0 1-1.878-2.022l-.072-.094c-.366-.47-.706-.968-.967-1.51a3.53 3.53 0 0 1-.306-.909c-.055-.315-.035-.652.116-.928.152-.277.42-.463.704-.57a3.09 3.09 0 0 1 .899-.174c.613-.034 1.229.04 1.834.15.873.165 1.732.411 2.576.703.199.067.396.138.593.211.129.047.256.096.384.145a33.38 33.38 0 0 1 2.219.952 32.491 32.491 0 0 1 .687.329l.015.007c.161.078.321.159.481.24a43.996 43.996 0 0 1 1.572.836 49.91 49.91 0 0 1 2.813 1.687 43.98 43.98 0 0 1 2.02 1.371l.034.025c.088.064.176.127.263.192a40.18 40.18 0 0 1 2.106 1.65 27.925 27.925 0 0 1 2.152 1.997 17.354 17.354 0 0 1 1.053 1.195c.394.499.764 1.024 1.046 1.604.138.29.255.595.31.915.027.16.037.323.02.484h.002a1.25 1.25 0 0 1-.138.462c-.078.14-.185.26-.31.356-.123.097-.262.17-.407.225-.29.11-.598.156-.906.176-.616.033-1.233-.042-1.84-.152a16.789 16.789 0 0 1-1.533-.37 25.121 25.121 0 0 1-2.024-.69l-.208-.08a38.996 38.996 0 0 1-.898-.372 35.47 35.47 0 0 1-1.335-.605 40.678 40.678 0 0 1-.847-.415l-.114-.058a47.803 47.803 0 0 1-3.49-1.966l-.163-.1c-.309-.194-.617-.39-.923-.59a45.755 45.755 0 0 1-2.754-1.947 38.725 38.725 0 0 1-1.214-.968M4.296 7.335a31.106 31.106 0 0 0 1.537 1.357M4.296 7.335a19.984 19.984 0 0 1-1.981-2.141c-.367-.472-.71-.97-.974-1.517a3.579 3.579 0 0 1-.312-.925 1.827 1.827 0 0 1-.02-.495 1.29 1.29 0 0 1 .142-.474c.08-.144.19-.268.317-.367.128-.098.27-.173.417-.23a3.11 3.11 0 0 1 .914-.177c.62-.035 1.24.04 1.848.15.89.166 1.762.417 2.62.713a31.297 31.297 0 0 1 .945.344 34.689 34.689 0 0 1 2.802 1.226 4.393 4.393 0 0 1 .206.1 44.25 44.25 0 0 1 1.825.953l.194.108a44.858 44.858 0 0 1 2.793 1.684 43.582 43.582 0 0 1 1.957 1.342l.038.026a28.289 28.289 0 0 1 4.342 3.678l.19.197a17.642 17.642 0 0 1 1.063 1.216c.393.502.762 1.03 1.042 1.612.137.292.253.598.308.92.026.16.037.325.02.487a1.242 1.242 0 0 1-.142.464 1.18 1.18 0 0 1-.31.36c-.125.097-.265.17-.41.226-.29.11-.6.157-.907.177-.618.034-1.236-.04-1.843-.15a16.587 16.587 0 0 1-1.542-.37 25.494 25.494 0 0 1-2.24-.773 23.72 23.72 0 0 1-.5-.2c-.133-.057-.266-.112-.399-.17a32.188 32.188 0 0 1-1.356-.61 41.118 41.118 0 0 1-.932-.456 47.768 47.768 0 0 1-3.505-1.963l-.005-.003a43.864 43.864 0 0 1-1.094-.694 45.918 45.918 0 0 1-2.711-1.908 35.166 35.166 0 0 1-1.263-1.003m0 0 .045-.022"
      stroke="gold"
    />
  </svg>
);
export default SvgIconNavLinkActive;
